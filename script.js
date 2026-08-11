// Sticky nav
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach((a) => a.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

// FAQ
function toggleFaq(el) {
  const item = el.parentElement;
  document.querySelectorAll('.faq-item').forEach((i) => {
    if (i !== item) {
      i.classList.remove('open');
    }
  });
  item.classList.toggle('open');
}

// Gallery filter
function filterGallery(btn, cat) {
  document.querySelectorAll('.gf-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach((item) => {
    const show = cat === 'all' || item.dataset.cat === cat;
    item.style.opacity = show ? '1' : '0.2';
    item.style.transform = show ? '' : 'scale(0.95)';
    item.style.transition = 'opacity .3s, transform .3s';
  });
}

// Parent portal API and authenticated state
const BOBO_API_URL = 'https://bobo-serverr-production.up.railway.app';
const boboApi = {
  async request(path, options = {}) {
    const response = await fetch(`${BOBO_API_URL}${path}`, options);
    const body = await response.json().catch(() => null);
    return { response, body };
  },
  login(username, password) {
    return this.request('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
  },
  getChild(childId) {
    return this.request(`/children/id/${encodeURIComponent(childId)}`);
  },
  getPhotos(childId) {
    return this.request(`/photos/${encodeURIComponent(childId)}`);
  }
};

const parentLoginForm = document.getElementById('parentLoginForm');
const parentLoginButton = document.getElementById('parentLoginButton');
const parentLoginStatus = document.getElementById('parentLoginStatus');
const parentDashboard = document.getElementById('parentDashboard');
const parentDashboardStatus = document.getElementById('parentDashboardStatus');
const parentWelcome = document.getElementById('parentWelcome');
const parentLogoutButton = document.getElementById('parentLogoutButton');
const childDetails = document.getElementById('childDetails');
const portalEmpty = document.getElementById('portalEmpty');
const foodPhotosGrid = document.getElementById('foodPhotosGrid');
let parentSession = null;

function setLoginLoading(loading) {
  parentLoginButton.disabled = loading;
  parentLoginButton.textContent = loading ? 'Signing in...' : 'Sign In';
}

function addChildDetail(label, value) {
  const detail = document.createElement('div');
  detail.className = 'child-detail';
  const labelElement = document.createElement('span');
  labelElement.textContent = label;
  const valueElement = document.createElement('strong');
  valueElement.textContent = value || '—';
  detail.append(labelElement, valueElement);
  childDetails.appendChild(detail);
}

function formatUploadTime(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? (value || '—') : date.toLocaleString();
}

function displayPhotos(photos) {
  foodPhotosGrid.replaceChildren();
  portalEmpty.hidden = photos.length > 0;
  photos.forEach((photo) => {
    const card = document.createElement('article');
    card.className = 'food-photo-card';
    const image = document.createElement('img');
    image.src = photo.imageUrl;
    image.alt = `${photo.mealType || 'Meal'} food photo`;
    image.loading = 'lazy';
    const placeholder = document.createElement('div');
    placeholder.className = 'food-photo-placeholder';
    placeholder.textContent = 'Meal photo unavailable';
    placeholder.hidden = true;
    image.addEventListener('error', () => {
      image.hidden = true;
      placeholder.hidden = false;
    });
    const info = document.createElement('div');
    info.className = 'food-photo-info';
    const title = document.createElement('h4');
    title.textContent = photo.mealType || 'Meal';
    const teacher = document.createElement('p');
    teacher.textContent = `Teacher: ${photo.teacher || '—'}`;
    const uploadTime = document.createElement('p');
    uploadTime.textContent = `Uploaded: ${formatUploadTime(photo.uploadTime)}`;
    info.append(title, teacher, uploadTime);
    card.append(image, placeholder, info);
    foodPhotosGrid.appendChild(card);
  });
}

async function loadParentDashboard() {
  const { childId } = parentSession;
  parentDashboard.hidden = false;
  parentDashboardStatus.textContent = 'Loading child information...';
  childDetails.replaceChildren();
  foodPhotosGrid.replaceChildren();
  portalEmpty.hidden = true;

  try {
    const { response: childResponse, body: child } = await boboApi.getChild(childId);
    if (childResponse.status === 404) throw new Error('child-not-found');
    if (!childResponse.ok || !child) throw new Error('server');
    addChildDetail('Child Name', child.name);
    addChildDetail('Child ID', child.childId);
    addChildDetail('Group', child.group);
    parentDashboardStatus.textContent = 'Loading meals...';

    const { response: photosResponse, body: photos } = await boboApi.getPhotos(childId);
    if (!photosResponse.ok) throw new Error('server');
    displayPhotos(Array.isArray(photos) ? photos : []);
    parentDashboardStatus.textContent = '';
  } catch (error) {
    console.error('Parent portal error:', error);
    parentDashboardStatus.textContent = error.message === 'child-not-found'
      ? 'Child information could not be found.'
      : 'Unable to connect to BOBO server. Please try again.';
  }
}

parentLoginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!parentLoginForm.reportValidity()) return;
  const formData = new FormData(parentLoginForm);
  parentLoginStatus.textContent = '';
  setLoginLoading(true);

  try {
    const { response, body: user } = await boboApi.login(formData.get('username'), formData.get('password'));
    if (response.status === 401 || response.status === 403) {
      parentLoginStatus.textContent = 'Invalid username or password.';
      return;
    }
    if (!response.ok || !user) throw new Error('server');
    if (user.role !== 'PARENT') {
      parentLoginStatus.textContent = 'This portal is for parents only.';
      return;
    }
    if (!user.child) throw new Error('child-not-found');

    parentSession = { username: user.username, childId: String(user.child) };
    parentWelcome.textContent = `Welcome, ${parentSession.username || 'Parent'}!`;
    parentLoginForm.hidden = true;
    window.location.hash = 'parent';
    await loadParentDashboard();
  } catch (error) {
    console.error('Parent login error:', error);
    parentLoginStatus.textContent = error.message === 'child-not-found'
      ? 'Child information could not be found.'
      : 'Unable to connect to BOBO server. Please try again.';
  } finally {
    setLoginLoading(false);
  }
});

parentLogoutButton.addEventListener('click', () => {
  parentSession = null;
  parentLoginForm.reset();
  parentLoginForm.hidden = false;
  parentDashboard.hidden = true;
  parentLoginStatus.textContent = '';
  window.location.hash = 'parent-login';
  document.getElementById('parent-login').scrollIntoView({ behavior: 'smooth' });
});

// Schedule item click
document.querySelectorAll('.schedule-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.schedule-item').forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach((r) => observer.observe(r));
