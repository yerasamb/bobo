const translations = {
  kk: {
    about: 'Біз туралы',
    programs: 'Топтар',
    subjects: 'Пәндер',
    schedule: 'Кесте',
    teachers: 'Мұғалімдер',
    gallery: 'Галерея',
    login: 'Баланың тағамы',
    events: 'Іс-шаралар',
    heroTitle: 'Әр бала <em>жарық</em> алып өседі',
    heroText: 'Қуаныш пен қамқорлыққа толы орта. Біз ойынға негізделген білімді құрылымдық дамумен үйлестіріп, әр баланың өміріне дұрыс бастаманы ұсынамыз.',
    heroBtn: '👩‍🍳 Баланың тағамы',
    stat1: 'Жылдық тәжірибе',
    stat2: 'Бақытты түлектер',
    stat3: 'Маман мұғалімдер',
    stat4: 'Ата-ана рейтингі'
  },
  ru: {
    about: 'О нас',
    programs: 'Группы',
    subjects: 'Предметы',
    schedule: 'Расписание',
    teachers: 'Преподаватели',
    gallery: 'Галерея',
    login: 'Еда ребенка',
    events: 'Мероприятия',
    heroTitle: 'Каждый ребёнок <em>расцветает</em> и растёт',
    heroText: 'Тёплая и радостная среда, где любознательные умы раскрываются. Мы соединяем игровое обучение со структурированным развитием, чтобы дать каждому ребёнку лучший старт.',
    heroBtn: '👩‍🍳 Еда ребенка',
    stat1: 'Лет опыта',
    stat2: 'Счастливых выпускников',
    stat3: 'Опытных учителей',
    stat4: 'Рейтинг родителей'
  },
  en: {
    about: 'About',
    programs: 'Programs',
    subjects: 'Subjects',
    schedule: 'Schedule',
    teachers: 'Teachers',
    gallery: 'Gallery',
    login: 'Parent Login',
    events: 'Events',
    heroTitle: 'Where Every Child <em>Shines</em> &amp; Grows',
    heroText: 'A nurturing, joyful environment where curious minds blossom. We blend play-based learning with structured development to give every child the best start in life.',
    heroBtn: '👩‍🍳 Childs food',
    stat1: 'Years of Experience',
    stat2: 'Happy Graduates',
    stat3: 'Expert Teachers',
    stat4: 'Parent Rating'
  }
};

// Content outside the original navigation and hero controls.  The English text
// remains the source key, so language changes can always be reversed cleanly.
const pageTranslations = {
  kk: {
    'Award Winning': 'Марапатқа ие', 'Best Kindergarten 2023': 'Үздік балабақша 2023', 'Safe & Certified': 'Қауіпсіз әрі сертификатталған', 'Environment': 'орта', 'Years of Joy': 'Қуанышты жылдар',
    '🌱 About Us': '🌱 Біз туралы', 'A Place Your Child Will': 'Балаңыз күнде ', 'Love': 'сүйіп келетін', 'Every Day': ' орын',
    'Founded in 2019, Bobo Kindergarten has been a beacon of excellence in early childhood education. Our philosophy centers on holistic development — nurturing cognitive, emotional, social, and physical growth.': '2019 жылы ашылған BOBO балабақшасы мектепке дейінгі сапалы білім берудің жарқын үлгісі. Біздің бағытымыз — баланың танымдық, эмоциялық, әлеуметтік және дене дамуын жан-жақты қолдау.',
    'Quality and quantity': 'Сапа және мүмкіндік', 'Neuro-exercise,Robotics,Salt cave,Choreography,Karate,Group speech therapy,Fairy tale therapy,Art therapy,Sensory integration,English,Online camera': 'Нейро-жаттығу, робототехника, тұзды үңгір, хореография, каратэ, топтық логопед, ертегі терапиясы, арт-терапия, сенсорлық интеграция, ағылшын тілі, онлайн камера',
    'Curriculum': 'Оқу бағдарламасы', 'International standards–based curriculum blending play, creativity, and structured learning.': 'Ойын, шығармашылық және жүйелі оқытуды біріктіретін халықаралық стандарттарға сай бағдарлама.',
    'Family Involvement': 'Отбасы қатысуы', 'Regular parent updates, open-day events, and family workshops to stay connected.': 'Үнемі ата-анаға хабар беру, ашық есік күндері және отбасылық шеберлік сабақтары.',
    'Multilingual': 'Көптілділік', 'English, Kazakh, and Russian instruction — giving children a trilingual advantage from day one.': 'Ағылшын, қазақ және орыс тілдеріндегі сабақтар — балаға алғашқы күннен үштілді артықшылық береді.',
    '🎨 What We Offer': '🎨 Біздің мүмкіндіктер', 'Our Learning Programs': 'Біздің оқу топтарымыз', 'Each program is carefully designed to match the developmental stage of your child, making learning a joyful adventure.': 'Әр бағдарлама балаңыздың даму кезеңіне сай жасалып, оқуды қызықты саяхатқа айналдырады.',
    ' and ': ' және ', 'Ages 1.5+': '1,5 жастан', 'Ages 1,5+': '1,5 жастан', 'Ages 3+': '3 жастан', 'Ages 3,5+': '3,5 жастан', 'Ages 3,5-4,5': '3,5–4,5 жас', 'Ages 4-5': '4–5 жас', 'Ages 5+': '5 жастан',
    '⏰ Daily Routine': '⏰ Күн тәртібі', 'Daily Schedule': 'Күнделікті кесте', 'A balanced, structured day designed to maximise learning, play, and rest.': 'Оқу, ойын және демалысты тиімді үйлестіретін теңгерімді күн тәртібі.',
    'Morning Arrival & Free Play': 'Таңғы келу және еркін ойын', 'Drop-off, greetings, unstructured exploration': 'Қабылдау, сәлемдесу, еркін зерттеу', 'Morning Circle & Calendar': 'Таңғы шеңбер және күнтізбе', 'Songs, weather, news, mindfulness': 'Әндер, ауа райы, жаңалықтар, зейін жаттығулары', 'Learning Centres': 'Оқу орталықтары', 'Literacy, numeracy, STEM stations': 'Сауаттылық, математика, STEM аймақтары', 'Snack & Rest': 'Тіскебасар және демалыс', 'Healthy snack provided by the academy': 'Балабақша ұсынатын пайдалы тіскебасар', 'Outdoor Play & PE': 'Сырттағы ойын және дене шынықтыру', 'Physical activity, sports, playground': 'Қимыл-қозғалыс, спорт, алаңдағы ойын', 'Arts, Music & Crafts': 'Өнер, музыка және қолөнер', 'Creative expression and projects': 'Шығармашылық және жобалар', 'Lunch & Afternoon Rest': 'Түскі ас және күндізгі демалыс', 'Nutritious lunch, nap for younger kids': 'Құнарлы түскі ас, кішкентайларға ұйқы', 'Language & Story Time': 'Тіл және ертегі уақыты', 'Trilingual reading, storytelling': 'Үш тілде оқу және әңгімелеу', 'Pick-Up / After-Care Begins': 'Алып кету / ұзартылған күн басталады', 'Regular pick-up or extended care': 'Қалыпты алып кету немесе ұзартылған күтім',
    '👩‍🏫 Our Team': '👩‍🏫 Біздің ұжым', 'Meet Our Wonderful Teachers': 'Тамаша ұстаздарымызбен танысыңыз', 'Qualified, passionate educators dedicated to nurturing each child\'s unique potential with warmth and expertise.': 'Әр баланың ерекше қабілетін мейіріммен және кәсіби түрде дамытатын білікті мамандар.', 'Founder': 'Құрылтайшы', 'Manager': 'Меңгеруші', 'Cook': 'Аспаз', 'Doctor': 'Медбике', 'The childcare worker for group Zhalyn': 'Жалын тобының тәрбиешісі', 'The childcare worker for group Kyran': 'Қыран тобының тәрбиешісі', 'The childcare worker for group Baiterek': 'Бәйтерек тобының тәрбиешісі', 'The childcare worker for group Zhuldyz': 'Жұлдыз тобының тәрбиешісі', 'The childcare worker for group Baldauren': 'Балдәурен тобының тәрбиешісі', 'The childcare worker for group Baldyrgan': 'Балдырған тобының тәрбиешісі', 'The childcare worker for group Kulynshak': 'Құлыншақ тобының тәрбиешісі', 'The nanny for Zhalyn and Kyran': 'Жалын және Қыран топтарының күтушісі', 'The nanny for Baiterek': 'Бәйтерек тобының күтушісі', 'The nanny for Zhuldyz': 'Жұлдыз тобының күтушісі', 'The nanny for Baldyrgan': 'Балдырған тобының күтушісі', 'The nanny for Kulynzhak': 'Құлыншақ тобының күтушісі',
    '📸 Gallery': '📸 Галерея', 'Life at Bobo Kindergarten': 'BOBO балабақшасындағы өмір', 'A glimpse into the joy, learning, and friendships that happen every day at our kindergarten.': 'Балабақшамыздағы күнделікті қуаныш, оқу және достық сәттерінен көрініс.', 'All': 'Барлығы', '🎨 Arts & Crafts': '🎨 Өнер және қолөнер', '⚽ Outdoor Play': '⚽ Сырттағы ойын', '📚 Learning': '📚 Оқу', '🎉 Events': '🎉 Іс-шаралар', 'Art Workshop': 'Өнер шеберханасы', 'Sports Day': 'Спорт күні', 'Story Time': 'Ертегі уақыты', 'Graduation Day': 'Бітіру кеші', 'Science Experiments': 'Ғылыми тәжірибелер', 'Painting Class': 'Сурет сабағы', 'Music Show': 'Музыкалық қойылым', 'Playground Fun': 'Алаңдағы ойын', 'Math Games': 'Математикалық ойындар', 'Craft Morning': 'Қолөнер таңы',
    '📅 Events': '📅 Іс-шаралар', 'Upcoming Events': 'Алдағы іс-шаралар', 'Exciting activities, celebrations, and learning opportunities happening soon!': 'Жақында болатын қызықты сабақтар, мерекелер және танымдық мүмкіндіктер!', 'Autumn Ball': 'Күзгі балл', 'The kindergarten was beautifully decorated with colorful autumn leaves, flowers, fruits, and seasonal decorations. Our little ones dressed up in lovely autumn-themed costumes and took part in a special celebration dedicated to the beauty and richness of the autumn season.': 'Балабақша түрлі-түсті күзгі жапырақтармен, гүлдермен, жемістермен және маусымдық безендірулермен әсем безендіріледі. Біздің бүлдіршіндеріміз күз тақырыбындағы әдемі костюмдерін киіп, күз мезгілінің сұлулығы мен молшылығына арналған ерекше мерекелік шараға қатысты.', 'Details coming soon': 'Толығырақ жақында', 'New Year': 'Жаңа жыл', 'Our kindergarten will celebrate the New Year with joy, music, dancing, fun games, and beautiful costumes. It will be a magical day full of smiles and wonderful memorie': 'Балабақшамызда музыка, би, ойындар мен әдемі костюмдерге толы көңілді Жаңа жыл мерекесі өтеді. Бұл күн қуанышқа, күлкіге және керемет естеліктерге толы болады.', 'Nauryz': 'Наурыз', 'Our kindergarten will welcome Nauryz with a joyful celebration of spring, friendship, and Kazakh traditions. The children will enjoy traditional games, music, dancing, and a festive atmosphere.': 'Балабақшамызда Наурыз мерекесін көктемнің, достықтың және қазақы дәстүрлердің жарқын мерекесі ретінде қарсы аламыз. Балаларды ұлттық ойындар, әуен, би және көтеріңкі мерекелік көңіл-күй күтеді.',
    '💬 Parent Reviews': '💬 Ата-ана пікірлері', 'Our greatest achievement is happy children and satisfied parents.': 'Біздің ең үлкен жетістігіміз — бақытты балалар мен риза ата-аналар.', 'Read on 2GIS →': '2GIS-тен оқу →', 'A nurturing home away from home where every child discovers their potential and shines bright.': 'Әр бала өз қабілетін ашып, жарқырайтын үйдегідей мейірімді орта.', 'Quick Links': 'Жылдам сілтемелер', 'About Us': 'Біз туралы', 'Parent Login': 'Ата-ана кіруі', 'Our Teachers': 'Ұстаздарымыз', 'Contact': 'Байланыс', '© 2026 Bobo Kindergarten. All rights reserved. Made with ❤️ for children.': '© 2026 BOBO балабақшасы. Барлық құқық қорғалған. Балалар үшін ❤️ жасалған.'
  },
  ru: {
    'Award Winning': 'Лауреат премий', 'Best Kindergarten 2023': 'Лучший детский сад 2023', 'Safe & Certified': 'Безопасная и сертифицированная', 'Environment': 'среда', 'Years of Joy': 'Лет радости', '🌱 About Us': '🌱 О нас', 'A Place Your Child Will': 'Место, которое ваш ребёнок будет ', 'Love': 'любить', 'Every Day': ' каждый день',
    'Founded in 2019, Bobo Kindergarten has been a beacon of excellence in early childhood education. Our philosophy centers on holistic development — nurturing cognitive, emotional, social, and physical growth.': 'Основанный в 2019 году, детский сад BOBO помогает детям всесторонне развиваться. Мы поддерживаем познавательный, эмоциональный, социальный и физический рост каждого ребёнка.', 'Quality and quantity': 'Качество и возможности', 'Neuro-exercise,Robotics,Salt cave,Choreography,Karate,Group speech therapy,Fairy tale therapy,Art therapy,Sensory integration,English,Online camera': 'Нейроупражнения, робототехника, соляная пещера, хореография, карате, групповой логопед, сказкотерапия, арт-терапия, сенсорная интеграция, английский язык, онлайн-камера', 'Curriculum': 'Программа обучения', 'International standards–based curriculum blending play, creativity, and structured learning.': 'Программа по международным стандартам, объединяющая игру, творчество и структурированное обучение.', 'Family Involvement': 'Участие семьи', 'Regular parent updates, open-day events, and family workshops to stay connected.': 'Регулярные новости для родителей, дни открытых дверей и семейные мастер-классы.', 'Multilingual': 'Три языка', 'English, Kazakh, and Russian instruction — giving children a trilingual advantage from day one.': 'Занятия на английском, казахском и русском языках дают ребёнку трёхъязычное преимущество с первого дня.',
    '🎨 What We Offer': '🎨 Что мы предлагаем', 'Our Learning Programs': 'Наши группы', 'Each program is carefully designed to match the developmental stage of your child, making learning a joyful adventure.': 'Каждая программа соответствует этапу развития ребёнка и превращает обучение в увлекательное приключение.', ' and ': ' и ', 'Ages 1.5+': 'От 1,5 лет', 'Ages 1,5+': 'От 1,5 лет', 'Ages 3+': 'От 3 лет', 'Ages 3,5+': 'От 3,5 лет', 'Ages 3,5-4,5': '3,5–4,5 года', 'Ages 4-5': '4–5 лет', 'Ages 5+': 'От 5 лет',
    '⏰ Daily Routine': '⏰ Распорядок дня', 'Daily Schedule': 'Расписание дня', 'A balanced, structured day designed to maximise learning, play, and rest.': 'Сбалансированный день для учёбы, игр и отдыха.', 'Morning Arrival & Free Play': 'Утренний приём и свободная игра', 'Drop-off, greetings, unstructured exploration': 'Приём, приветствие, свободное исследование', 'Morning Circle & Calendar': 'Утренний круг и календарь', 'Songs, weather, news, mindfulness': 'Песни, погода, новости, упражнения на внимание', 'Learning Centres': 'Учебные центры', 'Literacy, numeracy, STEM stations': 'Грамотность, математика, STEM-станции', 'Snack & Rest': 'Перекус и отдых', 'Healthy snack provided by the academy': 'Полезный перекус от детского сада', 'Outdoor Play & PE': 'Прогулка и физкультура', 'Physical activity, sports, playground': 'Движение, спорт, игровая площадка', 'Arts, Music & Crafts': 'Творчество, музыка и поделки', 'Creative expression and projects': 'Творчество и проекты', 'Lunch & Afternoon Rest': 'Обед и дневной отдых', 'Nutritious lunch, nap for younger kids': 'Полезный обед, сон для младших детей', 'Language & Story Time': 'Языки и время сказок', 'Trilingual reading, storytelling': 'Чтение и рассказы на трёх языках', 'Pick-Up / After-Care Begins': 'Время забрать ребёнка / продлёнка', 'Regular pick-up or extended care': 'Обычный уход домой или продлённый день',
    '👩‍🏫 Our Team': '👩‍🏫 Наша команда', 'Meet Our Wonderful Teachers': 'Познакомьтесь с нашими педагогами', 'Qualified, passionate educators dedicated to nurturing each child\'s unique potential with warmth and expertise.': 'Квалифицированные и заботливые педагоги помогают каждому ребёнку раскрыть свой потенциал.', 'Founder': 'Основатель', 'Manager': 'Заведующая', 'Cook': 'Повар', 'Doctor': 'Медсестра', 'The childcare worker for group Zhalyn': 'Воспитатель группы «Жалын»', 'The childcare worker for group Kyran': 'Воспитатель группы «Қыран»', 'The childcare worker for group Baiterek': 'Воспитатель группы «Бәйтерек»', 'The childcare worker for group Zhuldyz': 'Воспитатель группы «Жұлдыз»', 'The childcare worker for group Baldauren': 'Воспитатель группы «Балдәурен»', 'The childcare worker for group Baldyrgan': 'Воспитатель группы «Балдырған»', 'The childcare worker for group Kulynshak': 'Воспитатель группы «Құлыншақ»', 'The nanny for Zhalyn and Kyran': 'Няня групп «Жалын» и «Қыран»', 'The nanny for Baiterek': 'Няня группы «Бәйтерек»', 'The nanny for Zhuldyz': 'Няня группы «Жұлдыз»', 'The nanny for Baldyrgan': 'Няня группы «Балдырған»', 'The nanny for Kulynzhak': 'Няня группы «Құлыншақ»',
    '📸 Gallery': '📸 Галерея', 'Life at Bobo Kindergarten': 'Жизнь в детском саду BOBO', 'A glimpse into the joy, learning, and friendships that happen every day at our kindergarten.': 'Немного радости, учёбы и дружбы, которые каждый день происходят в нашем саду.', 'All': 'Все', '🎨 Arts & Crafts': '🎨 Творчество', '⚽ Outdoor Play': '⚽ Игры на улице', '📚 Learning': '📚 Обучение', '🎉 Events': '🎉 События', 'Art Workshop': 'Творческая мастерская', 'Sports Day': 'День спорта', 'Story Time': 'Время сказок', 'Graduation Day': 'Выпускной', 'Science Experiments': 'Научные эксперименты', 'Painting Class': 'Урок рисования', 'Music Show': 'Музыкальное выступление', 'Playground Fun': 'Веселье на площадке', 'Math Games': 'Математические игры', 'Craft Morning': 'Утро поделок',
    '📅 Events': '📅 События', 'Upcoming Events': 'Ближайшие события', 'Exciting activities, celebrations, and learning opportunities happening soon!': 'Скоро — интересные занятия, праздники и новые возможности для обучения!', 'Autumn Ball': 'Осенний балл', 'The kindergarten was beautifully decorated with colorful autumn leaves, flowers, fruits, and seasonal decorations. Our little ones dressed up in lovely autumn-themed costumes and took part in a special celebration dedicated to the beauty and richness of the autumn season.': 'Детский сад будет красиво украшен разноцветными осенними листьями, цветами, фруктами и сезонными декорациями. Наши малыши нарядились в красивые костюмы на осеннюю тематику и приняли участие в особенном празднике, посвящённом красоте и богатству осеннего времени года.', 'Details coming soon': 'Подробности скоро', 'New Year': 'Новый год', 'Our kindergarten will celebrate the New Year with joy, music, dancing, fun games, and beautiful costumes. It will be a magical day full of smiles and wonderful memorie': 'В нашем детском саду пройдёт весёлый новогодний праздник с музыкой, танцами, играми и красивыми костюмами. Этот день будет наполнен улыбками, радостью и прекрасными воспоминаниями.', 'Nauryz': 'Наурыз', 'Our kindergarten will welcome Nauryz with a joyful celebration of spring, friendship, and Kazakh traditions. The children will enjoy traditional games, music, dancing, and a festive atmosphere.': 'В нашем детском саду мы встретим Наурыз ярким праздником весны, дружбы и казахских традиций. Детей ждут национальные игры, музыка, танцы и праздничная атмосфера.',
    '💬 Parent Reviews': '💬 Отзывы родителей', 'Our greatest achievement is happy children and satisfied parents.': 'Наше главное достижение — счастливые дети и довольные родители.', 'Read on 2GIS →': 'Читать на 2GIS →', 'A nurturing home away from home where every child discovers their potential and shines bright.': 'Заботливое место, где каждый ребёнок раскрывает свой потенциал и сияет.', 'Quick Links': 'Быстрые ссылки', 'About Us': 'О нас', 'Parent Login': 'Вход для родителей', 'Our Teachers': 'Наши педагоги', 'Contact': 'Контакты', '© 2026 Bobo Kindergarten. All rights reserved. Made with ❤️ for children.': '© 2026 Детский сад BOBO. Все права защищены. Сделано с ❤️ для детей.'
  },
  en: {}
};

const langButtons = document.querySelectorAll('.lang-btn');
let currentLanguage = 'kk';

function setLanguage(lang) {
  currentLanguage = lang;
  const selected = translations[lang] || translations.en;

  document.documentElement.lang = lang === 'kk' ? 'kk' : lang === 'ru' ? 'ru' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (selected[key]) {
      el.textContent = selected[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (selected[key]) {
      el.innerHTML = selected[key];
    }
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || parent.closest('[data-i18n], [data-i18n-html], script, style')) continue;
    const source = node.__boboSourceText || node.nodeValue;
    node.__boboSourceText = source;
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    const text = source.trim();
    const textMap = pageTranslations[lang] || {};
    const nonTextPrefix = text.match(/^[^\p{L}\p{N}]+/u)?.[0] || '';
    const translated = textMap[text] || (textMap[text.slice(nonTextPrefix.length)] && `${nonTextPrefix}${textMap[text.slice(nonTextPrefix.length)]}`);
    node.nodeValue = translated ? `${leading}${translated}${trailing}` : source;
  }

  document.title = lang === 'kk' ? 'BOBO балабақшасы' : lang === 'ru' ? 'Детский сад BOBO' : 'Bobo Kindergarten';
  document.querySelector('.lang-switcher').setAttribute('aria-label', lang === 'kk' ? 'Тіл таңдау' : lang === 'ru' ? 'Выбор языка' : 'Language selector');

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  if (typeof renderGroupSchedule === 'function') renderGroupSchedule();
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const baseSchedule = [
  ['7:30–8:30', 'var(--sky)', 'Morning Arrival & Free Play', 'Drop-off, greetings, unstructured exploration'],
  ['8:30–9:00', 'var(--grass)', 'Morning Circle & Calendar', 'Songs, weather, news, mindfulness'],
  ['9:00–10:00', 'var(--rose)', 'Learning Centres', 'Literacy, numeracy, STEM stations'],
  ['10:00–10:30', 'var(--sun)', 'Snack & Rest', 'Healthy snack provided by the academy'],
  ['10:30–11:30', 'var(--lavender)', 'Outdoor Play & PE', 'Physical activity, sports, playground'],
  ['11:30–12:30', 'var(--peach)', 'Arts, Music & Crafts', 'Creative expression and projects'],
  ['12:30–1:30', 'var(--grass)', 'Lunch & Afternoon Rest', 'Nutritious lunch, nap for younger kids'],
  ['1:30–3:00', 'var(--sky)', 'Language & Story Time', 'Trilingual reading, storytelling'],
  ['3:00–3:30', 'var(--rose)', 'Pick-Up / After-Care Begins', 'Regular pick-up or extended care']
];
const groupScheduleTemplates = Object.fromEntries(
  ['Kulynshak', 'Baldyrgan', 'Baldauren', 'Zhuldyz', 'Baiterek', 'Kyran', 'Zhalyn']
    .map((group) => [group, baseSchedule.map((item) => [...item])])
);
let selectedScheduleGroup = 'Kulynshak';
const scheduleText = {
  kk: { title: ' тобының күн тәртібі', note: 'Үлгі кесте — нақты уақытты топ тәрбиешісі растайды.' },
  ru: { title: ' — расписание группы', note: 'Примерное расписание — точное время подтвердит педагог группы.' },
  en: { title: ' Daily Schedule', note: 'Sample schedule — details will be confirmed by the group teacher.' }
};

function renderGroupSchedule() {
  const list = document.getElementById('scheduleList');
  const title = document.getElementById('scheduleGroupTitle');
  const note = document.getElementById('scheduleTemplateNote');
  if (!list || !title || !note) return;
  const language = currentLanguage || 'kk';
  const localized = scheduleText[language] || scheduleText.en;
  const textMap = pageTranslations[language] || {};
  title.textContent = `${selectedScheduleGroup}${localized.title}`;
  note.textContent = localized.note;
  list.replaceChildren();
  groupScheduleTemplates[selectedScheduleGroup].forEach(([time, color, activity, details], index) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = `schedule-item${index === 0 ? ' active' : ''}`;
    const timeElement = document.createElement('span');
    timeElement.className = 'time';
    timeElement.textContent = time;
    const dot = document.createElement('span');
    dot.className = 's-dot';
    dot.style.background = color;
    const info = document.createElement('span');
    info.className = 's-info';
    const heading = document.createElement('h4');
    heading.textContent = textMap[activity] || activity;
    const description = document.createElement('p');
    description.textContent = textMap[details] || details;
    info.append(heading, description);
    item.append(timeElement, dot, info);
    item.addEventListener('click', () => {
      list.querySelectorAll('.schedule-item').forEach((scheduleItem) => scheduleItem.classList.remove('active'));
      item.classList.add('active');
    });
    list.appendChild(item);
  });
  document.querySelectorAll('.schedule-group-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.scheduleGroup === selectedScheduleGroup);
  });
}

document.querySelectorAll('.schedule-group-btn').forEach((button) => {
  button.addEventListener('click', () => {
    selectedScheduleGroup = button.dataset.scheduleGroup;
    renderGroupSchedule();
  });
});

setLanguage('kk');

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
