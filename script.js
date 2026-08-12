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
