/* =========================================================
   BOBO KINDERGARTEN
   LANGUAGE / SCHEDULE / UI SCRIPT
   ========================================================= */


/* =========================================================
   MAIN NAVIGATION TRANSLATIONS
   ========================================================= */

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

    heroText:
      'Қуаныш пен қамқорлыққа толы орта. Біз ойынға негізделген білімді құрылымдық дамумен үйлестіріп, әр баланың өміріне дұрыс бастаманы ұсынамыз.',

    heroBtn: '👩‍🍳 Баланың тағамы',

    stat1: 'Жылдық тәжірибе',
    stat2: 'Бақытты түлектер',
    stat3: 'Маман мұғалімдер',
    stat4: 'Ата-ана рейтингі',

    portalNav: "Ата-ана порталы",
    heroArtBtn: "🎨 Балалар шығармашылығы",
    portalTag: "🦕 Ата-ана порталы",
    portalTitle: "Балаңыздың күнін BOBO-мен бірге көріңіз",
    portalSub: "Балаңыздың бүгін не жегенін және не жасағанын көру үшін ата-ана порталына немесе BOBO қосымшасына кіріңіз.",
    portalFoodTitle: "Тамақтану",
    portalFoodText: "Тәрбиеші күн сайын жіберетін таңғы ас, түскі ас және бесіндік фотолары.",
    portalArtTitle: "Балалар шығармашылығы",
    portalArtText: "Суреттер, кескіндеме, қолөнер және мүсіндеу: балаңыздың шығармашылық жұмыстарының жеке галереясы.",
    portalOpen: "Ашу →"
  },


  ru: {
    about: 'О нас',
    programs: 'Группы',
    subjects: 'Предметы',
    schedule: 'Расписание',
    teachers: 'Педагоги',
    gallery: 'Галерея',
    login: 'Еда ребёнка',
    events: 'Мероприятия',

    heroTitle:
      'Каждый ребёнок <em>расцветает</em> и растёт',

    heroText:
      'Тёплая и радостная среда, где любознательные умы раскрываются. Мы соединяем игровое обучение со структурированным развитием, чтобы дать каждому ребёнку лучший старт.',

    heroBtn: '👩‍🍳 Еда ребёнка',

    stat1: 'Лет опыта',
    stat2: 'Счастливых выпускников',
    stat3: 'Опытных педагогов',
    stat4: 'Рейтинг родителей',

    portalNav: "Портал родителей",
    heroArtBtn: "🎨 Творчество детей",
    portalTag: "🦕 Портал родителей",
    portalTitle: "День вашего ребёнка вместе с BOBO",
    portalSub: "Войдите в портал родителей или приложение BOBO, чтобы увидеть, что ваш ребёнок ел и создавал сегодня.",
    portalFoodTitle: "Питание",
    portalFoodText: "Фото завтрака, обеда и полдника, которые воспитатель отправляет каждый день.",
    portalArtTitle: "Творчество детей",
    portalArtText: "Рисунки, живопись, поделки и лепка: личная галерея творческих работ вашего ребёнка.",
    portalOpen: "Открыть →"
  },


  en: {
    about: 'About',
    programs: 'Groups',
    subjects: 'Subjects',
    schedule: 'Schedule',
    teachers: 'Teachers',
    gallery: 'Gallery',
    login: "Child's Food",
    events: 'Events',

    heroTitle:
      'Where Every Child <em>Shines</em> &amp; Grows',

    heroText:
      'A nurturing, joyful environment where curious minds blossom. We blend play-based learning with structured development to give every child the best start in life.',

    heroBtn: "👩‍🍳 Child's Food",

    stat1: 'Years of Experience',
    stat2: 'Happy Graduates',
    stat3: 'Expert Teachers',
    stat4: 'Parent Rating',

    portalNav: "Parent portal",
    heroArtBtn: "🎨 Children's Artwork",
    portalTag: "🦕 Parent portal",
    portalTitle: "See your child's day with BOBO",
    portalSub: "Log in to the parent portal or the BOBO app to see what your child ate and created today.",
    portalFoodTitle: "Meals",
    portalFoodText: "Photos of breakfast, lunch and snacks, sent by the teacher every day.",
    portalArtTitle: "Children's Artwork",
    portalArtText: "Drawings, paintings, crafts and modeling: a personal gallery of your child's creative works.",
    portalOpen: "Open →"
  }

};


/* =========================================================
   PAGE TRANSLATIONS
   English = ORIGINAL SOURCE LANGUAGE

   NOTE: keys in this object MUST match the live HTML text
   *exactly* (after whitespace is collapsed to single spaces
   by translateText()/setLanguage() below). Punctuation,
   dashes, decimal separators, capitalisation and Oxford
   commas all matter, so keep these in sync with index.html.
   ========================================================= */

const pageTranslations = {

  kk: {

    'Award Winning': 'Марапатқа ие',
    'Best Kindergarten 2023': 'Үздік балабақша 2023',
    'Safe & Certified': 'Қауіпсіз әрі сертификатталған',
    'Environment': 'орта',
    'Years of Joy': 'Қуанышты жылдар',

    '🌱 About Us': '🌱 Біз туралы',

    'A Place Your Child Will':
      'Балаңыз күнде ',

    'Love':
      'сүйіп келетін',

    'Every Day':
      ' орын',

    'Founded in 2019, Bobo Kindergarten has been a beacon of excellence in early childhood education. Our philosophy centers on holistic development — nurturing cognitive, emotional, social, and physical growth.':
      '2019 жылы ашылған BOBO балабақшасы мектепке дейінгі сапалы білім берудің жарқын үлгісі. Біздің бағытымыз — баланың танымдық, эмоциялық, әлеуметтік және дене дамуын жан-жақты қолдау.',

    'Quality and Quantity':
      'Сапа және мүмкіндік',

    'Neuro-exercise, Robotics, Salt Cave, Choreography, Karate, Group Speech Therapy, Fairy Tale Therapy, Art Therapy, Sensory Integration, English, and Online Camera.':
      'Нейро-жаттығу, робототехника, тұзды шахта, хореография, каратэ, топтық логопед, ертегі терапиясы, арт-терапия, сенсорлық интеграция, ағылшын тілі, онлайн камера',

    'Curriculum':
      'Оқу бағдарламасы',

    'International standards-based curriculum blending play, creativity, and structured learning.':
      'Ойын, шығармашылық және жүйелі оқытуды біріктіретін халықаралық стандарттарға сай бағдарлама.',

    'Family Involvement':
      'Отбасы қатысуы',

    'Regular parent updates, open-day events, and family workshops to stay connected.':
      'Үнемі ата-анаға хабар беру, ашық есік күндері және отбасылық шеберлік сабақтары.',

    'Healthy Eating':
      'Дұрыс тамақтану',

    'Nutritious and balanced meals help children grow healthy, happy, and active.':
      'Балаларға пайдалы әрі теңгерімді тағам ұсынып, салауатты әдеттерді қалыптастырамыз.',

    '🎨 What We Offer':
      '🎨 Біздің мүмкіндіктер',

    'Our Learning Programs':
      'Біздің оқу топтарымыз',

    'Each program is carefully designed to match the developmental stage of your child, making learning a joyful adventure.':
      'Әр бағдарлама балаңыздың даму кезеңіне сай жасалып, оқуды қызықты саяхатқа айналдырады.',

    ' and ':
      ' және ',

    'Ages 1.5+':
      '1,5 жастан',

    'Ages 1,5+':
      '1,5 жастан',

    'Ages 3+':
      '3 жастан',

    'Ages 3.5+':
      '3,5 жастан',

    'Ages 3,5+':
      '3,5 жастан',

    'Ages 3.5–4.5':
      '3,5–4,5 жас',

    'Ages 3,5-4,5':
      '3,5–4,5 жас',

    'Ages 4–5':
      '4–5 жас',

    'Ages 4-5':
      '4–5 жас',

    'Ages 5+':
      '5 жастан',


    /* SUBJECTS */

    'Developmental Programs':
      'Дамытушы бағыттар',

    'Subjects We Teach':
      'Қосымша сабақтар',

    'Our comprehensive curriculum covers all developmental domains through play-based and structured learning.':
      'Біздің кешенді оқу бағдарламамыз ойынға негізделген және жүйеленген оқыту арқылы дамудың барлық саласын қамтиды.',

    'Neuro Development':
      'Нейро бағыт',

    'A set of activities designed to support children’s attention, memory, thinking, coordination, and cognitive development.':
      'Баланың ми қызметін, зейінін, есте сақтауын, ойлауын және қимыл үйлесімділігін дамытуға бағытталған жаттығулар кешені.',

    'Salt Room':
      'Тұзды шахта',

    'A comfortable space for relaxation and quiet activities in a salt environment, where children can rest and enjoy calm play.':
      'Тұзды ортада тынығу мен релаксацияға арналған арнайы кеңістік. Балаларға жайлы атмосферада демалып, тыныш ойындармен айналысуға мүмкіндік береді.',

    'Book Therapy':
      'Кітап терапиясы',

    'Using books and stories to help children understand emotions, develop imagination, and build positive social and communication skills.':
      'Кітаптар мен ертегілер арқылы баланың эмоциясын түсінуге, қиялын дамытуға және жағымды мінез-құлық дағдыларын қалыптастыруға көмектесетін бағыт.',

    'Karate':
      'Каратэ',

    'A sports activity that supports physical development, coordination, agility, discipline, concentration, and self-control.':
      'Баланың дене белсенділігін, ептілігін, тәртібін, зейінін және өзін-өзі бақылау дағдыларын дамытуға арналған спорттық бағыт.',

    'Choreography':
      'Хореография',

    'Music and movement activities that help develop rhythm, flexibility, coordination, confidence, and creativity.':
      'Музыка мен қимыл арқылы баланың ырғақ сезімін, икемділігін, үйлесімділігін және шығармашылық қабілетін дамыту.',

    'Group Speech Therapy':
      'Топтық логопед',

    'Group sessions focused on speech development, correct pronunciation, vocabulary expansion, and communication skills.':
      'Балалардың сөйлеу тілін дамытуға, дыбыстарды дұрыс айтуға, сөздік қорын молайтуға және өз ойын еркін жеткізуіне бағытталған топтық сабақтар.',

    'Robotics and STEAM':
      'Робототехника (STEAM)',

    'Engaging activities combining construction, technology, engineering, and creativity. They encourage logical, spatial, and creative thinking.':
      'Құрастыру, технология, инженерия және шығармашылықты біріктіретін қызықты сабақтар. Балалардың логикалық және кеңістіктік ойлауын дамытуға ықпал етеді.',

    'Glenn Doman Method':
      'Глен Доман әдістемесі',

    'An early-development approach focused on stimulating children’s cognitive abilities through visual materials and structured activities.':
      'Баланың ерте жастағы танымдық мүмкіндіктерін дамытуға бағытталған әдістеме. Көрнекі материалдар мен жүйелі жаттығулар арқылы баланың есте сақтау және қабылдау қабілеттерін ынталандырады.',

    'Sensory Integration':
      'Сенсорлық интеграция',

    'Activities designed to help children process sensory information and improve body awareness, balance, and movement coordination.':
      'Әртүрлі сезім мүшелерінен келетін ақпаратты қабылдау және өңдеу дағдыларын дамытуға бағытталған жаттығулар. Қимыл үйлесімділігі мен денені сезіну қабілетін жетілдіруге көмектеседі.',

    'Art Therapy':
      'Арт-терапия',

    'Creative activities such as drawing, modeling, and working with colors that encourage emotional expression, imagination, and creativity.':
      'Сурет салу, мүсіндеу, бояу және шығармашылық жұмыстар арқылы баланың эмоциясын білдіруіне, қиялын және шығармашылық қабілетін дамытуына мүмкіндік береді.',


    /* DAILY ROUTINE */

    '⏰ Daily Routine':
      '⏰ Күн тәртібі',

    'Daily Schedule':
      'Күнделікті кесте',

    'A balanced, structured day designed to maximise learning, play, and rest.':
      'Оқу, ойын және демалысты тиімді үйлестіретін теңгерімді күн тәртібі.',

    'Morning Arrival & Free Play':
      'Таңғы келу және еркін ойын',

    'Drop-off, greetings, unstructured exploration':
      'Қабылдау, сәлемдесу, еркін зерттеу',

    'Morning Circle & Calendar':
      'Таңғы шеңбер және күнтізбе',

    'Songs, weather, news, mindfulness':
      'Әндер, ауа райы, жаңалықтар, зейін жаттығулары',

    'Learning Centres':
      'Оқу орталықтары',

    'Literacy, numeracy, STEM stations':
      'Сауаттылық, математика, STEM аймақтары',

    'Snack & Rest':
      'Тіскебасар және демалыс',

    'Healthy snack provided by the kindergarten':
      'Балабақша ұсынатын пайдалы тіскебасар',

    'Healthy snack provided by the academy':
      'Балабақша ұсынатын пайдалы тіскебасар',

    'Outdoor Play & PE':
      'Сырттағы ойын және дене шынықтыру',

    'Physical activity, sports, playground':
      'Қимыл-қозғалыс, спорт, алаңдағы ойын',

    'Arts, Music & Crafts':
      'Өнер, музыка және қолөнер',

    'Creative expression and projects':
      'Шығармашылық және жобалар',

    'Lunch & Afternoon Rest':
      'Түскі ас және күндізгі демалыс',

    'Nutritious lunch, nap for younger kids':
      'Құнарлы түскі ас, кішкентайларға ұйқы',

    'Language & Story Time':
      'Тіл және ертегі уақыты',

    'Trilingual reading, storytelling':
      'Үш тілде оқу және әңгімелеу',

    'Pick-Up / After-Care Begins':
      'Алып кету / ұзартылған күн басталады',

    'Regular pick-up or extended care':
      'Қалыпты алып кету немесе ұзартылған күтім',


    /* TEAM */

    '👩‍🏫 Our Team':
      '👩‍🏫 Біздің ұжым',

    'Meet Our Wonderful Teachers':
      'Тамаша ұстаздарымызбен танысыңыз',

    'Qualified, passionate educators dedicated to nurturing each child\'s unique potential with warmth and expertise.':
      'Әр баланың ерекше қабілетін мейіріммен және кәсіби түрде дамытатын білікті мамандар.',

    'Founder':
      'Құрылтайшы',

    'Manager':
      'Меңгеруші',

    'Cook':
      'Аспаз',

    'Doctor':
      'Медбике',

    'The childcare worker for group Zhalyn':
      'Жалын тобының тәрбиешісі',

    'The childcare worker for group Kyran':
      'Қыран тобының тәрбиешісі',

    'The childcare worker for group Baiterek':
      'Бәйтерек тобының тәрбиешісі',

    'The childcare worker for group Zhuldyz':
      'Жұлдыз тобының тәрбиешісі',

    'The childcare worker for group Baldauren':
      'Балдәурен тобының тәрбиешісі',

    'The childcare worker for group Baldyrgan':
      'Балдырған тобының тәрбиешісі',

    'The childcare worker for group Kulynshak':
      'Құлыншақ тобының тәрбиешісі',

    'The nanny for Zhalyn and Kyran':
      'Жалын және Қыран топтарының күтушісі',

    'The nanny for Baiterek':
      'Бәйтерек тобының күтушісі',

    'The nanny for Zhuldyz':
      'Жұлдыз тобының күтушісі',

    'The nanny for Baldyrgan':
      'Балдырған тобының күтушісі',

    'The nanny for Kulynshak':
      'Құлыншақ тобының күтушісі',


    /* GALLERY */

    '📸 Gallery':
      '📸 Галерея',

    'Life at Bobo Kindergarten':
      'BOBO балабақшасындағы өмір',

    'A glimpse into the joy, learning, and friendships that happen every day at our kindergarten.':
      'Балабақшамыздағы күнделікті қуаныш, оқу және достық сәттерінен көрініс.',

    'All':
      'Барлығы',

    '🎨 Arts & Crafts':
      '🎨 Өнер және қолөнер',

    '⚽ Outdoor Play':
      '⚽ Сырттағы ойын',

    '📚 Learning':
      '📚 Оқу',

    '🎉 Events':
      '🎉 Іс-шаралар',

    'Art Workshop':
      'Өнер шеберханасы',

    'Sports Day':
      'Спорт күні',

    'Story Time':
      'Ертегі уақыты',

    'Graduation Day':
      'Бітіру кеші',

    'Science Experiments':
      'Ғылыми тәжірибелер',

    'Painting Class':
      'Сурет сабағы',

    'Music Show':
      'Музыкалық қойылым',

    'Playground Fun':
      'Алаңдағы ойын',

    'Math Games':
      'Математикалық ойындар',

    'Craft Morning':
      'Қолөнер таңы',


    /* EVENTS */

    '📅 Events':
      '📅 Іс-шаралар',

    'Upcoming Events':
      'Алдағы іс-шаралар',

    'Exciting activities, celebrations, and learning opportunities happening soon!':
      'Жақында болатын қызықты сабақтар, мерекелер және танымдық мүмкіндіктер!',

    'Events':
      'Іс-шаралар',

    'Class Hour':
      'Тәрбие сағаттары',

    'Class hour':
      'Тәрбие сағаттары',

    'Autumn Ball':
      'Күзгі бал',

    'The kindergarten was beautifully decorated with colorful autumn leaves, flowers, fruits, and seasonal decorations. Our little ones dressed up in lovely autumn-themed costumes and took part in a special celebration dedicated to the beauty and richness of the autumn season.':
      'Балабақша түрлі-түсті күзгі жапырақтармен, гүлдермен, жемістермен және маусымдық безендірулермен әсем безендірілді. Біздің бүлдіршіндеріміз күз тақырыбындағы әдемі костюмдерін киіп, күз мезгілінің сұлулығы мен молшылығына арналған ерекше мерекелік шараға қатысты.',

    'Details coming soon':
      'Толығырақ жақында',

    'New Year':
      'Жаңа жыл',

    'Our kindergarten will celebrate the New Year with joy, music, dancing, fun games, and beautiful costumes. It will be a magical day full of smiles and wonderful memories.':
      'Балабақшамызда музыка, би, ойындар мен әдемі костюмдерге толы көңілді Жаңа жыл мерекесі өтеді. Бұл күн қуанышқа, күлкіге және керемет естеліктерге толы болады.',

    'Nauryz':
      'Наурыз',

    'Our kindergarten will welcome Nauryz with a joyful celebration of spring, friendship, and Kazakh traditions. The children will enjoy traditional games, music, dancing, and a festive atmosphere.':
      'Балабақшамызда Наурыз мерекесін көктемнің, достықтың және қазақы дәстүрлердің жарқын мерекесі ретінде қарсы аламыз. Балаларды ұлттық ойындар, әуен, би және көтеріңкі мерекелік көңіл-күй күтеді.',

    'Day of Knowledge':
      'Білім күні',

    'Day of Languages':
      'Тіл күні',

    'Day of Language':
      'Тіл күні',

    'Republic Day':
      'Республика күні',

    'Day of Republic':
      'Республика күні',

    'Independence Day':
      'Тәуелсіздік күні',

    'Thanksgiving Day':
      'Алғыс айту күні',


    /* REVIEWS / FOOTER */

    '💬 Parent Reviews':
      '💬 Ата-ана пікірлері',

    'Our greatest achievement is happy children and satisfied parents.':
      'Біздің ең үлкен жетістігіміз — бақытты балалар мен риза ата-аналар.',

    'Read on 2GIS →':
      '2GIS-тен оқу →',

    'A nurturing home away from home where every child discovers their potential and shines bright.':
      'Әр бала өз қабілетін ашып, жарқырайтын үйдегідей мейірімді орта.',

    'Quick Links':
      'Жылдам сілтемелер',

    'About Us':
      'Біз туралы',

    'Programs':
      'Топтар',

    'Parent Login':
      'Ата-ана кіруі',

    'Our Teachers':
      'Ұстаздарымыз',

    'Gallery':
      'Галерея',

    'Contact':
      'Байланыс',

    '© 2026 Bobo Kindergarten. All rights reserved. Made with ❤️ for children.':
      '© 2026 BOBO балабақшасы. Барлық құқық қорғалған. Балалар үшін ❤️ жасалған.'
  },


  /* =======================================================
     RUSSIAN
     ======================================================= */

  ru: {

    'Award Winning':
      'Лауреат премий',

    'Best Kindergarten 2023':
      'Лучший детский сад 2023',

    'Safe & Certified':
      'Безопасная и сертифицированная',

    'Environment':
      'среда',

    'Years of Joy':
      'Лет радости',

    '🌱 About Us':
      '🌱 О нас',

    'A Place Your Child Will':
      'Место, которое ваш ребёнок будет ',

    'Love':
      'любить',

    'Every Day':
      ' каждый день',

    'Founded in 2019, Bobo Kindergarten has been a beacon of excellence in early childhood education. Our philosophy centers on holistic development — nurturing cognitive, emotional, social, and physical growth.':
      'Основанный в 2019 году, детский сад BOBO помогает детям всесторонне развиваться. Мы поддерживаем познавательный, эмоциональный, социальный и физический рост каждого ребёнка.',

    'Quality and Quantity':
      'Качество и возможности',

    'Neuro-exercise, Robotics, Salt Cave, Choreography, Karate, Group Speech Therapy, Fairy Tale Therapy, Art Therapy, Sensory Integration, English, and Online Camera.':
      'Нейроупражнения, робототехника, соляная пещера, хореография, карате, групповой логопед, сказкотерапия, арт-терапия, сенсорная интеграция, английский язык, онлайн-камера',

    'Curriculum':
      'Программа обучения',

    'International standards-based curriculum blending play, creativity, and structured learning.':
      'Программа по международным стандартам, объединяющая игру, творчество и структурированное обучение.',

    'Family Involvement':
      'Участие семьи',

    'Regular parent updates, open-day events, and family workshops to stay connected.':
      'Регулярные новости для родителей, дни открытых дверей и семейные мастер-классы.',

    'Healthy Eating':
      'Полезное питание',

    'Nutritious and balanced meals help children grow healthy, happy, and active.':
      'Полезное и сбалансированное питание помогает детям расти здоровыми и активными.',

    '🎨 What We Offer':
      '🎨 Что мы предлагаем',

    'Our Learning Programs':
      'Наши группы',

    'Each program is carefully designed to match the developmental stage of your child, making learning a joyful adventure.':
      'Каждая программа соответствует этапу развития ребёнка и превращает обучение в увлекательное приключение.',

    ' and ':
      ' и ',

    'Ages 1.5+':
      'От 1,5 лет',

    'Ages 1,5+':
      'От 1,5 лет',

    'Ages 3+':
      'От 3 лет',

    'Ages 3.5+':
      'От 3,5 лет',

    'Ages 3,5+':
      'От 3,5 лет',

    'Ages 3.5–4.5':
      '3,5–4,5 года',

    'Ages 3,5-4,5':
      '3,5–4,5 года',

    'Ages 4–5':
      '4–5 лет',

    'Ages 4-5':
      '4–5 лет',

    'Ages 5+':
      'От 5 лет',


    /* SUBJECTS */

    'Developmental Programs':
      'Развивающие направления',

    'Subjects We Teach':
      'Дополнительные занятия',

    'Our comprehensive curriculum covers all developmental domains through play-based and structured learning.':
      'Наша комплексная учебная программа охватывает все сферы развития благодаря сочетанию игровых и структурированных форм обучения.',

    'Neuro Development':
      'Нейро направление',

    'A set of activities designed to support children’s attention, memory, thinking, coordination, and cognitive development.':
      'Комплекс упражнений, направленных на развитие внимания, памяти, мышления, координации движений и познавательных навыков ребёнка.',

    'Salt Room':
      'Соляная пещера',

    'A comfortable space for relaxation and quiet activities in a salt environment, where children can rest and enjoy calm play.':
      'Специальное пространство для спокойного отдыха и релаксации в комфортной соляной атмосфере. Детям предлагаются спокойные игры и занятия.',

    'Book Therapy':
      'Книготерапия',

    'Using books and stories to help children understand emotions, develop imagination, and build positive social and communication skills.':
      'Работа с книгами и сказками, которая помогает ребёнку лучше понимать эмоции, развивать воображение и формировать полезные социальные навыки.',

    'Karate':
      'Карате',

    'A sports activity that supports physical development, coordination, agility, discipline, concentration, and self-control.':
      'Спортивное направление для развития физической активности, ловкости, координации, дисциплины, внимания и навыков самоконтроля.',

    'Choreography':
      'Хореография',

    'Music and movement activities that help develop rhythm, flexibility, coordination, confidence, and creativity.':
      'Занятия музыкой и движением для развития чувства ритма, гибкости, координации и творческих способностей ребёнка.',

    'Group Speech Therapy':
      'Групповой логопед',

    'Group sessions focused on speech development, correct pronunciation, vocabulary expansion, and communication skills.':
      'Занятия, направленные на развитие речи, правильного звукопроизношения, расширение словарного запаса и формирование навыков общения.',

    'Robotics and STEAM':
      'Робототехника (STEAM)',

    'Engaging activities combining construction, technology, engineering, and creativity. They encourage logical, spatial, and creative thinking.':
      'Увлекательные занятия, объединяющие конструирование, технологии, инженерию и творчество. Развивают логическое, пространственное и творческое мышление.',

    'Glenn Doman Method':
      'Методика Глена Домана',

    'An early-development approach focused on stimulating children’s cognitive abilities through visual materials and structured activities.':
      'Методика, направленная на развитие познавательных возможностей ребёнка в раннем возрасте. Использование наглядного материала и систематических занятий стимулирует память и восприятие.',

    'Sensory Integration':
      'Сенсорная интеграция',

    'Activities designed to help children process sensory information and improve body awareness, balance, and movement coordination.':
      'Упражнения для развития способности воспринимать и обрабатывать информацию, поступающую через органы чувств. Способствует улучшению координации и осознания собственного тела.',

    'Art Therapy':
      'Арт-терапия',

    'Creative activities such as drawing, modeling, and working with colors that encourage emotional expression, imagination, and creativity.':
      'Творческие занятия: рисование, лепка, работа с цветом и различные виды творчества, которые помогают ребёнку выражать эмоции, развивать воображение и творческие способности.',


    /* DAILY ROUTINE */

    '⏰ Daily Routine':
      '⏰ Распорядок дня',

    'Daily Schedule':
      'Расписание дня',

    'A balanced, structured day designed to maximise learning, play, and rest.':
      'Сбалансированный день для учёбы, игр и отдыха.',

    'Morning Arrival & Free Play':
      'Утренний приём и свободная игра',

    'Drop-off, greetings, unstructured exploration':
      'Приём, приветствие, свободное исследование',

    'Morning Circle & Calendar':
      'Утренний круг и календарь',

    'Songs, weather, news, mindfulness':
      'Песни, погода, новости, упражнения на внимание',

    'Learning Centres':
      'Учебные центры',

    'Literacy, numeracy, STEM stations':
      'Грамотность, математика, STEM-станции',

    'Snack & Rest':
      'Перекус и отдых',

    'Healthy snack provided by the kindergarten':
      'Полезный перекус от детского сада',

    'Healthy snack provided by the academy':
      'Полезный перекус от детского сада',

    'Outdoor Play & PE':
      'Прогулка и физкультура',

    'Physical activity, sports, playground':
      'Движение, спорт, игровая площадка',

    'Arts, Music & Crafts':
      'Творчество, музыка и поделки',

    'Creative expression and projects':
      'Творчество и проекты',

    'Lunch & Afternoon Rest':
      'Обед и дневной отдых',

    'Nutritious lunch, nap for younger kids':
      'Полезный обед, сон для младших детей',

    'Language & Story Time':
      'Языки и время сказок',

    'Trilingual reading, storytelling':
      'Чтение и рассказы на трёх языках',

    'Pick-Up / After-Care Begins':
      'Время забрать ребёнка / продлёнка',

    'Regular pick-up or extended care':
      'Обычный уход домой или продлённый день',


    /* TEAM */

    '👩‍🏫 Our Team':
      '👩‍🏫 Наша команда',

    'Meet Our Wonderful Teachers':
      'Познакомьтесь с нашими педагогами',

    'Qualified, passionate educators dedicated to nurturing each child\'s unique potential with warmth and expertise.':
      'Квалифицированные и заботливые педагоги помогают каждому ребёнку раскрыть свой потенциал.',

    'Founder':
      'Основатель',

    'Manager':
      'Заведующая',

    'Cook':
      'Повар',

    'Doctor':
      'Медсестра',

    'The childcare worker for group Zhalyn':
      'Воспитатель группы «Жалын»',

    'The childcare worker for group Kyran':
      'Воспитатель группы «Қыран»',

    'The childcare worker for group Baiterek':
      'Воспитатель группы «Бәйтерек»',

    'The childcare worker for group Zhuldyz':
      'Воспитатель группы «Жұлдыз»',

    'The childcare worker for group Baldauren':
      'Воспитатель группы «Балдәурен»',

    'The childcare worker for group Baldyrgan':
      'Воспитатель группы «Балдырған»',

    'The childcare worker for group Kulynshak':
      'Воспитатель группы «Құлыншақ»',

    'The nanny for Zhalyn and Kyran':
      'Няня групп «Жалын» и «Қыран»',

    'The nanny for Baiterek':
      'Няня группы «Бәйтерек»',

    'The nanny for Zhuldyz':
      'Няня группы «Жұлдыз»',

    'The nanny for Baldyrgan':
      'Няня группы «Балдырған»',

    'The nanny for Kulynshak':
      'Няня группы «Құлыншақ»',


    /* GALLERY */

    '📸 Gallery':
      '📸 Галерея',

    'Life at Bobo Kindergarten':
      'Жизнь в детском саду BOBO',

    'A glimpse into the joy, learning, and friendships that happen every day at our kindergarten.':
      'Немного радости, учёбы и дружбы, которые каждый день происходят в нашем саду.',

    'All':
      'Все',

    '🎨 Arts & Crafts':
      '🎨 Творчество',

    '⚽ Outdoor Play':
      '⚽ Игры на улице',

    '📚 Learning':
      '📚 Обучение',

    '🎉 Events':
      '🎉 События',

    'Art Workshop':
      'Творческая мастерская',

    'Sports Day':
      'День спорта',

    'Story Time':
      'Время сказок',

    'Graduation Day':
      'Выпускной',

    'Science Experiments':
      'Научные эксперименты',

    'Painting Class':
      'Урок рисования',

    'Music Show':
      'Музыкальное выступление',

    'Playground Fun':
      'Веселье на площадке',

    'Math Games':
      'Математические игры',

    'Craft Morning':
      'Утро поделок',


    /* EVENTS */

    '📅 Events':
      '📅 События',

    'Upcoming Events':
      'Ближайшие события',

    'Exciting activities, celebrations, and learning opportunities happening soon!':
      'Скоро — интересные занятия, праздники и новые возможности для обучения!',

    'Events':
      'События',

    'Class Hour':
      'Классный час',

    'Class hour':
      'Классный час',

    'Autumn Ball':
      'Осенний бал',

    'The kindergarten was beautifully decorated with colorful autumn leaves, flowers, fruits, and seasonal decorations. Our little ones dressed up in lovely autumn-themed costumes and took part in a special celebration dedicated to the beauty and richness of the autumn season.':
      'Детский сад был красиво украшен разноцветными осенними листьями, цветами, фруктами и сезонными декорациями. Наши малыши нарядились в красивые костюмы на осеннюю тематику и приняли участие в особенном празднике, посвящённом красоте и богатству осеннего времени года.',

    'Details coming soon':
      'Подробности скоро',

    'New Year':
      'Новый год',

    'Our kindergarten will celebrate the New Year with joy, music, dancing, fun games, and beautiful costumes. It will be a magical day full of smiles and wonderful memories.':
      'В нашем детском саду пройдёт весёлый новогодний праздник с музыкой, танцами, играми и красивыми костюмами. Этот день будет наполнен улыбками, радостью и прекрасными воспоминаниями.',

    'Nauryz':
      'Наурыз',

    'Our kindergarten will welcome Nauryz with a joyful celebration of spring, friendship, and Kazakh traditions. The children will enjoy traditional games, music, dancing, and a festive atmosphere.':
      'В нашем детском саду мы встретим Наурыз ярким праздником весны, дружбы и казахских традиций. Детей ждут национальные игры, музыка, танцы и праздничная атмосфера.',

    'Day of Knowledge':
      'День знаний',

    'Day of Languages':
      'День языка',

    'Day of Language':
      'День языка',

    'Republic Day':
      'День Республики',

    'Day of Republic':
      'День Республики',

    'Independence Day':
      'День Независимости',

    'Thanksgiving Day':
      'День благодарности',


    /* FOOTER */

    '💬 Parent Reviews':
      '💬 Отзывы родителей',

    'Our greatest achievement is happy children and satisfied parents.':
      'Наше главное достижение — счастливые дети и довольные родители.',

    'Read on 2GIS →':
      'Читать на 2GIS →',

    'A nurturing home away from home where every child discovers their potential and shines bright.':
      'Заботливое место, где каждый ребёнок раскрывает свой потенциал и сияет.',

    'Quick Links':
      'Быстрые ссылки',

    'About Us':
      'О нас',

    'Programs':
      'Группы',

    'Parent Login':
      'Вход для родителей',

    'Our Teachers':
      'Наши педагоги',

    'Gallery':
      'Галерея',

    'Contact':
      'Контакты',

    '© 2026 Bobo Kindergarten. All rights reserved. Made with ❤️ for children.':
      '© 2026 Детский сад BOBO. Все права защищены. Сделано с ❤️ для детей.'
  },


  /* =======================================================
     ENGLISH
     ======================================================= */

  en: {}

};


/* =========================================================
   LANGUAGE STATE
   ========================================================= */

let currentLanguage = 'kk';

const langButtons =
  document.querySelectorAll('.lang-btn');


/* =========================================================
   GROUP TRANSLATIONS
   ========================================================= */

const groupTranslations = {

  kk: {
    Kulynshak: 'Құлыншақ',
    Baldyrgan: 'Балдырған',
    Zhuldyz: 'Жұлдыз',
    Baiterek: 'Бәйтерек',
    Kyran: 'Қыран',
    Zhalyn: 'Жалын',
    Baldauren: 'Балдәурен'
  },

  ru: {
    Kulynshak: 'Кулыншак',
    Baldyrgan: 'Балдырган',
    Zhuldyz: 'Жулдыз',
    Baiterek: 'Байтерек',
    Kyran: 'Кыран',
    Zhalyn: 'Жалын',
    Baldauren: 'Балдәурен'
  },

  en: {
    Kulynshak: 'Kulynshak',
    Baldyrgan: 'Baldyrgan',
    Zhuldyz: 'Zhuldyz',
    Baiterek: 'Baiterek',
    Kyran: 'Kyran',
    Zhalyn: 'Zhalyn',
    Baldauren: 'Baldauren'
  }

};


/* =========================================================
   SPECIAL SCHEDULE TRANSLATIONS
   ========================================================= */

const specialScheduleTranslations = {

  kk: {

    'Children Arrival':
      'Балаларды қабылдау',

    'Parent conversation, consultation and children arrival':
      'Ата-аналармен немесе баланың басқа заңды өкілдерімен әңгімелесу, кеңес беру және балаларды қабылдау.',

    'Parent conversation, consultation, children\'s independent activities and morning exercise':
      'Ата-аналармен немесе баланың басқа заңды өкілдерімен әңгімелесу, кеңес беру. Балалардың іс-әрекеті (ойын, танымдық, коммуникативтік, шығармашылық, эксперименталдық, еңбек, қимыл, бейнелеу, дербес және басқалары). Ертеңгілік жаттығу.',

    'Breakfast':
      'Таңғы ас',

    'Preparation for Organized Activities':
      'Ұйымдастырылған іс-әрекетті өткізуге дайындық',

    'Preparation for organized educational activities':
      'Ұйымдастырылған іс-әрекетті өткізуге дайындық',

    'Organized Educational Activities':
      'Кестеге сәйкес ҰІӘ',

    'Activities according to the daily educational schedule':
      'Кестеге сәйкес ұйымдастырылған іс-әрекет',

    'Second Breakfast':
      '2-таңғы ас',

    'Second breakfast':
      '2-таңғы ас',

    'Outdoor Walk':
      'Серуен',

    'Outdoor Walk & Return':
      'Серуен және серуеннен оралу',

    'Preparation for outdoor activity, outdoor walk and return to the group':
      'Серуенге дайындық, серуен және серуеннен оралу.',

    'Preparation for outdoor activity and outdoor walk':
      'Серуенге дайындық және серуен',

    'Return from Outdoor Walk':
      'Серуеннен оралу',

    'Return to the group and hygiene procedures':
      'Топқа оралу және гигиеналық шаралар',

    'Lunch':
      'Түскі ас',

    'Daytime Sleep':
      'Күндізгі ұйқы',

    'Daytime sleep and rest':
      'Күндізгі ұйқы және демалыс',

    'Gradual Wake-Up & Wellness':
      'Ұйқыдан біртіндеп ояту, сауықтыру шаралары',

    'Gradual wake-up and wellness activities':
      'Ұйқыдан біртіндеп ояту және сауықтыру шаралары',

    'Afternoon Snack':
      'Бесін ас',

    'Independent Activities & Individual Work':
      'Балалардың дербес іс-әрекеті және балалармен жеке жұмыс',

    'Movement, national, role-playing, board games, creative activities, books and individual work with children':
      'Қимылдық, ұлттық, сюжетті-рөлдік, үстел үсті-баспа және басқа ойындар, бейнелеу іс-әрекеті, кітап қарау және балалармен жеке жұмыс',

    'Evening Meal':
      'Кешкі ас',

    'Evening meal':
      'Кешкі ас',

    'Independent Activities':
      'Балалардың дербес іс-әрекеті',

    'Movement, national, role-playing, board games, creative activities, books and other independent activities':
      'Қимылдық, ұлттық, сюжетті-рөлдік, үстел үсті-баспа және басқа ойындар, бейнелеу іс-әрекеті, кітап қарау және басқа дербес іс-әрекеттер',

    'Going Home':
      'Балалардың үйге қайтуы',

    'Children leave for home':
      'Балалардың үйге қайтуы'

  },


  ru: {

    'Children Arrival':
      'Приём детей',

    'Parent conversation, consultation and children arrival':
      'Беседа и консультация с родителями или другими законными представителями ребёнка и приём детей.',

    'Parent conversation, consultation, children\'s independent activities and morning exercise':
      'Беседа и консультация с родителями или другими законными представителями ребёнка. Самостоятельная деятельность детей (игровая, познавательная, коммуникативная, творческая, экспериментальная, трудовая, двигательная, изобразительная, индивидуальная и другая). Утренняя гимнастика.',

    'Breakfast':
      'Завтрак',

    'Preparation for Organized Activities':
      'Подготовка к организованной деятельности',

    'Preparation for organized educational activities':
      'Подготовка к организованной образовательной деятельности',

    'Organized Educational Activities':
      'Организованная деятельность по расписанию',

    'Activities according to the daily educational schedule':
      'Организованная деятельность согласно расписанию',

    'Second Breakfast':
      'Второй завтрак',

    'Second breakfast':
      'Второй завтрак',

    'Outdoor Walk':
      'Прогулка',

    'Outdoor Walk & Return':
      'Прогулка и возвращение',

    'Preparation for outdoor activity, outdoor walk and return to the group':
      'Подготовка к прогулке, прогулка и возвращение в группу.',

    'Preparation for outdoor activity and outdoor walk':
      'Подготовка к прогулке и прогулка',

    'Return from Outdoor Walk':
      'Возвращение с прогулки',

    'Return to the group and hygiene procedures':
      'Возвращение в группу и гигиенические процедуры',

    'Lunch':
      'Обед',

    'Daytime Sleep':
      'Дневной сон',

    'Daytime sleep and rest':
      'Дневной сон и отдых',

    'Gradual Wake-Up & Wellness':
      'Постепенное пробуждение и оздоровительные процедуры',

    'Gradual wake-up and wellness activities':
      'Постепенное пробуждение и оздоровительные мероприятия',

    'Afternoon Snack':
      'Полдник',

    'Independent Activities & Individual Work':
      'Самостоятельная деятельность и индивидуальная работа',

    'Movement, national, role-playing, board games, creative activities, books and individual work with children':
      'Подвижные, национальные, сюжетно-ролевые, настольно-печатные и другие игры, изобразительная деятельность, рассматривание книг и индивидуальная работа с детьми',

    'Evening Meal':
      'Ужин',

    'Evening meal':
      'Ужин',

    'Independent Activities':
      'Самостоятельная деятельность детей',

    'Movement, national, role-playing, board games, creative activities, books and other independent activities':
      'Подвижные, национальные, сюжетно-ролевые, настольно-печатные и другие игры, изобразительная деятельность, рассматривание книг и другие самостоятельные занятия',

    'Going Home':
      'Уход детей домой',

    'Children leave for home':
      'Уход детей домой'

  },


  en: {

    'Children Arrival':
      'Children Arrival',

    'Parent conversation, consultation and children arrival':
      'Conversation and consultation with parents or other legal representatives of the child and children arrival.',

    'Parent conversation, consultation, children\'s independent activities and morning exercise':
      'Conversation and consultation with parents or other legal representatives of the child. Children\'s independent activities (play, cognitive, communicative, creative, experimental, work, movement, visual, individual and other activities). Morning exercise.',

    'Breakfast':
      'Breakfast',

    'Preparation for Organized Activities':
      'Preparation for Organized Activities',

    'Preparation for organized educational activities':
      'Preparation for organized educational activities',

    'Organized Educational Activities':
      'Scheduled Educational Activities',

    'Activities according to the daily educational schedule':
      'Educational activities according to the daily schedule',

    'Second Breakfast':
      'Second Breakfast',

    'Second breakfast':
      'Second Breakfast',

    'Outdoor Walk':
      'Outdoor Walk',

    'Outdoor Walk & Return':
      'Outdoor Walk & Return',

    'Preparation for outdoor activity and outdoor walk':
      'Preparation for outdoor activity and outdoor walk',

    'Preparation for outdoor activity, outdoor walk and return to the group':
      'Preparation for outdoor activity, outdoor walk and return to the group.',

    'Return from Outdoor Walk':
      'Return from Outdoor Walk',

    'Return to the group and hygiene procedures':
      'Return to the group and hygiene procedures',

    'Lunch':
      'Lunch',

    'Daytime Sleep':
      'Daytime Sleep',

    'Daytime sleep and rest':
      'Daytime sleep and rest',

    'Gradual Wake-Up & Wellness':
      'Gradual Wake-Up & Wellness',

    'Gradual wake-up and wellness activities':
      'Gradual wake-up and wellness activities',

    'Afternoon Snack':
      'Afternoon Snack',

    'Independent Activities & Individual Work':
      'Independent Activities & Individual Work',

    'Movement, national, role-playing, board games, creative activities, books and individual work with children':
      'Movement, national, role-playing, board games, creative activities, books and individual work with children',

    'Evening Meal':
      'Evening Meal',

    'Evening meal':
      'Evening Meal',

    'Independent Activities':
      'Independent Activities',

    'Movement, national, role-playing, board games, creative activities, books and other independent activities':
      'Movement, national, role-playing, board games, creative activities, books and other independent activities',

    'Going Home':
      'Going Home',

    'Children leave for home':
      'Children leave for home'

  }

};


/* =========================================================
   HELPER: TRANSLATE TEXT
   ========================================================= */

function translateText(text, language) {

  const mainMap =
    translations[language] || {};

  const pageMap =
    pageTranslations[language] || {};

  const specialMap =
    specialScheduleTranslations[language] || {};


  /*
   * Main translations
   */

  if (mainMap[text] !== undefined) {
    return mainMap[text];
  }


  /*
   * Page translations
   */

  if (pageMap[text] !== undefined) {
    return pageMap[text];
  }


  /*
   * Schedule translations
   */

  if (specialMap[text] !== undefined) {
    return specialMap[text];
  }


  /*
   * Emoji / symbol prefix
   *
   * Example:
   *
   * 🌱 About Us
   */

  const prefixMatch =
    text.match(/^[^\p{L}\p{N}]+/u);


  if (prefixMatch) {

    const prefix =
      prefixMatch[0];

    const cleanText =
      text.slice(prefix.length);


    if (mainMap[cleanText] !== undefined) {
      return prefix + mainMap[cleanText];
    }


    if (pageMap[cleanText] !== undefined) {
      return prefix + pageMap[cleanText];
    }


    if (specialMap[cleanText] !== undefined) {
      return prefix + specialMap[cleanText];
    }

  }


  /*
   * No translation found.
   */

  return text;

}


/* =========================================================
   SET LANGUAGE
   ========================================================= */

function setLanguage(lang) {

  if (!translations[lang]) {
    lang = 'en';
  }


  currentLanguage =
    lang;


  /*
   * Combine translation dictionaries.
   */

  const selected = {

    ...(translations[lang] || {}),

    ...(pageTranslations[lang] || {}),

    ...(specialScheduleTranslations[lang] || {})

  };


  /* =======================================================
     HTML LANGUAGE
     ======================================================= */

  document.documentElement.lang =
    lang === 'kk'
      ? 'kk'
      : lang === 'ru'
        ? 'ru'
        : 'en';


  /* =======================================================
     DATA-I18N
     ======================================================= */

  document
    .querySelectorAll('[data-i18n]')
    .forEach((el) => {

      const key =
        el.dataset.i18n;


      if (
        selected[key] !== undefined
      ) {

        el.textContent =
          selected[key];

      }

    });


  /* =======================================================
     DATA-I18N-HTML
     ======================================================= */

  document
    .querySelectorAll('[data-i18n-html]')
    .forEach((el) => {

      const key =
        el.dataset.i18nHtml;


      if (
        selected[key] !== undefined
      ) {

        el.innerHTML =
          selected[key];

      }

    });


  /* =======================================================
     TRANSLATE NORMAL TEXT
     ======================================================= */

  const walker =
    document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );


  let node;


  while (
    (node = walker.nextNode())
  ) {

    const parent =
      node.parentElement;


    if (!parent) {
      continue;
    }


    /*
     * Don't translate special elements.
     */

    if (
      parent.closest(
        '[data-i18n], [data-i18n-html], script, style, noscript, textarea, input, select, option'
      )
    ) {

      continue;

    }


    /*
     * Save ORIGINAL English text only once.
     *
     * This is the important fix.
     *
     * It prevents:
     *
     * English → Kazakh → Russian
     *
     * Instead:
     *
     * English → Kazakh
     * English → Russian
     * English → English
     */

    if (
      node.__boboOriginalText === undefined
    ) {

      node.__boboOriginalText =
        node.nodeValue;

    }


    const source =
      node.__boboOriginalText;


    const leading =
      source.match(/^\s*/)?.[0] || '';


    const trailing =
      source.match(/\s*$/)?.[0] || '';


    /*
     * IMPORTANT FIX:
     *
     * The HTML source is pretty-printed, so multi-line
     * text (paragraphs that wrap across several lines with
     * indentation) produces text nodes whose *inner*
     * whitespace contains raw newlines and runs of spaces,
     * e.g. "Founded in 2019, ... excellence\n      in early
     * childhood ...".
     *
     * The translation dictionaries above are written as
     * normal single-line strings, so a straight `.trim()`
     * (which only strips leading/trailing whitespace) never
     * matched those multi-line paragraphs — they silently
     * stayed in English no matter which language was
     * selected.
     *
     * Collapsing all internal whitespace runs to a single
     * space before doing the dictionary lookup fixes this
     * for every multi-line paragraph on the page.
     */

    const cleanText =
      source.trim().replace(/\s+/g, ' ');


    if (!cleanText) {
      continue;
    }


    let translated =
      selected[cleanText];


    /*
     * If exact translation isn't found,
     * use the helper.
     */

    if (
      translated === undefined
    ) {

      translated =
        translateText(
          cleanText,
          lang
        );

    }


    /*
     * Keep original if there is
     * no translation.
     */

    if (
      translated === undefined ||
      translated === null
    ) {

      translated =
        cleanText;

    }


    node.nodeValue =
      `${leading}${translated}${trailing}`;

  }


  /* =======================================================
     PAGE TITLE
     ======================================================= */

  document.title =
    lang === 'kk'
      ? 'BOBO балабақшасы'
      : lang === 'ru'
        ? 'Детский сад BOBO'
        : 'Bobo Kindergarten';


  /* =======================================================
     LANGUAGE SWITCHER ARIA LABEL
     ======================================================= */

  const languageSwitcher =
    document.querySelector(
      '.lang-switcher'
    );


  if (languageSwitcher) {

    languageSwitcher.setAttribute(
      'aria-label',

      lang === 'kk'
        ? 'Тіл таңдау'
        : lang === 'ru'
          ? 'Выбор языка'
          : 'Language selector'

    );

  }


  /* =======================================================
     ACTIVE LANGUAGE BUTTON
     ======================================================= */

  langButtons.forEach((button) => {

    button.classList.toggle(

      'active',

      button.dataset.lang ===
        lang

    );

  });


  /* =======================================================
     UPDATE GROUP SCHEDULE
     ======================================================= */

  if (
    typeof renderGroupSchedule ===
    'function'
  ) {

    renderGroupSchedule();

  }

}


/* =========================================================
   LANGUAGE BUTTON EVENTS
   ========================================================= */

langButtons.forEach((button) => {

  button.addEventListener(
    'click',
    () => {

      const language =
        button.dataset.lang;


      setLanguage(language);

    }
  );

});


/* =========================================================
   STANDARD SCHEDULE
   ========================================================= */

const baseSchedule = [

  [
    '7:30–8:30',
    'var(--sky)',
    'Morning Arrival & Free Play',
    'Drop-off, greetings, unstructured exploration'
  ],

  [
    '8:30–9:00',
    'var(--grass)',
    'Morning Circle & Calendar',
    'Songs, weather, news, mindfulness'
  ],

  [
    '9:00–10:00',
    'var(--rose)',
    'Learning Centres',
    'Literacy, numeracy, STEM stations'
  ],

  [
    '10:00–10:30',
    'var(--sun)',
    'Snack & Rest',
    'Healthy snack provided by the kindergarten'
  ],

  [
    '10:30–11:30',
    'var(--lavender)',
    'Outdoor Play & PE',
    'Physical activity, sports, playground'
  ],

  [
    '11:30–12:30',
    'var(--peach)',
    'Arts, Music & Crafts',
    'Creative expression and projects'
  ],

  [
    '12:30–1:30',
    'var(--grass)',
    'Lunch & Afternoon Rest',
    'Nutritious lunch, nap for younger kids'
  ],

  [
    '1:30–3:00',
    'var(--sky)',
    'Language & Story Time',
    'Trilingual reading, storytelling'
  ],

  [
    '3:00–3:30',
    'var(--rose)',
    'Pick-Up / After-Care Begins',
    'Regular pick-up or extended care'
  ]

];


/* =========================================================
   SPECIAL GROUP SCHEDULE
   ========================================================= */

const specialGroupSchedule = [

  [
    '7:30–8:30',
    'var(--sky)',
    'Children Arrival',
    'Parent conversation, consultation and children arrival'
  ],

  [
    '8:30–9:00',
    'var(--grass)',
    'Breakfast',
    'Breakfast'
  ],

  [
    '9:00–9:15',
    'var(--rose)',
    'Preparation for Organized Activities',
    'Preparation for organized educational activities'
  ],

  [
    '9:15–11:15',
    'var(--lavender)',
    'Organized Educational Activities',
    'Activities according to the daily educational schedule'
  ],

  [
    '10:00–10:15',
    'var(--sun)',
    'Second Breakfast',
    'Second breakfast'
  ],

  [
    '11:15–12:20',
    'var(--peach)',
    'Outdoor Walk',
    'Preparation for outdoor activity and outdoor walk'
  ],

  [
    '12:20–12:30',
    'var(--sky)',
    'Return from Outdoor Walk',
    'Return to the group and hygiene procedures'
  ],

  [
    '12:30–13:00',
    'var(--grass)',
    'Lunch',
    'Lunch'
  ],

  [
    '13:00–15:00',
    'var(--lavender)',
    'Daytime Sleep',
    'Daytime sleep and rest'
  ],

  [
    '15:00–15:20',
    'var(--sky)',
    'Gradual Wake-Up & Wellness',
    'Gradual wake-up and wellness activities'
  ],

  [
    '15:20–15:40',
    'var(--sun)',
    'Afternoon Snack',
    'Afternoon snack'
  ],

  [
    '15:40–16:00',
    'var(--rose)',
    'Independent Activities & Individual Work',
    'Movement, national, role-playing, board games, creative activities, books and individual work with children'
  ],

  [
    '16:00–16:30',
    'var(--peach)',
    'Outdoor Walk',
    'Preparation for outdoor activity and outdoor walk'
  ],

  [
    '16:30–17:00',
    'var(--grass)',
    'Evening Meal',
    'Evening meal'
  ],

  [
    '17:30–17:45',
    'var(--lavender)',
    'Independent Activities',
    'Movement, national, role-playing, board games, creative activities, books and other independent activities'
  ],

  [
    '17:45–18:00',
    'var(--sky)',
    'Going Home',
    'Children leave for home'
  ]

];


/* =========================================================
   KULYNSHAK / BALDYRGAN SCHEDULE
   ========================================================= */

const kulynshakBaldyrganSchedule = [

  [
    '7:30–8:30',
    'var(--sky)',
    'Children Arrival',
    'Parent conversation, consultation, children\'s independent activities and morning exercise'
  ],

  [
    '8:30–9:00',
    'var(--grass)',
    'Breakfast',
    'Breakfast'
  ],

  [
    '9:00–9:15',
    'var(--rose)',
    'Preparation for Organized Activities',
    'Preparation for organized educational activities'
  ],

  [
    '9:15–11:15',
    'var(--lavender)',
    'Organized Educational Activities',
    'Activities according to the daily educational schedule'
  ],

  [
    '10:00–10:15',
    'var(--sun)',
    'Second Breakfast',
    'Second breakfast'
  ],

  [
    '10:30–12:00',
    'var(--peach)',
    'Outdoor Walk',
    'Preparation for outdoor activity and outdoor walk'
  ],

  [
    '12:00–12:20',
    'var(--sky)',
    'Return from Outdoor Walk',
    'Return to the group and hygiene procedures'
  ],

  [
    '12:20–12:50',
    'var(--grass)',
    'Lunch',
    'Lunch'
  ],

  [
    '13:00–15:00',
    'var(--lavender)',
    'Daytime Sleep',
    'Daytime sleep and rest'
  ],

  [
    '15:00–15:30',
    'var(--sky)',
    'Gradual Wake-Up & Wellness',
    'Gradual wake-up and wellness activities'
  ],

  [
    '15:30–15:40',
    'var(--sun)',
    'Afternoon Snack',
    'Afternoon snack'
  ],

  [
    '15:40–16:00',
    'var(--rose)',
    'Independent Activities & Individual Work',
    'Movement, national, role-playing, board games, creative activities, books and individual work with children'
  ],

  [
    '16:00–16:30',
    'var(--peach)',
    'Outdoor Walk & Return',
    'Preparation for outdoor activity, outdoor walk and return to the group'
  ],

  [
    '16:30–17:00',
    'var(--grass)',
    'Evening Meal',
    'Evening meal'
  ],

  [
    '17:30–17:45',
    'var(--lavender)',
    'Independent Activities',
    'Movement, national, role-playing, board games, creative activities, books and other independent activities'
  ],

  [
    '17:45–18:00',
    'var(--sky)',
    'Going Home',
    'Children leave for home'
  ]

];


/* =========================================================
   BAITEREK / KYRAN SCHEDULE

   Same timings as the shared specialGroupSchedule
   (Baldauren / Zhuldyz), except the first row combines
   arrival, parent conversation, children's independent
   activities and morning exercise into a single block.
   ========================================================= */

const baiterekKyranSchedule = [

  [
    '7:30–8:30',
    'var(--sky)',
    'Children Arrival',
    'Parent conversation, consultation, children\'s independent activities and morning exercise'
  ],

  [
    '8:30–9:00',
    'var(--grass)',
    'Breakfast',
    'Breakfast'
  ],

  [
    '9:00–9:15',
    'var(--rose)',
    'Preparation for Organized Activities',
    'Preparation for organized educational activities'
  ],

  [
    '9:15–11:15',
    'var(--lavender)',
    'Organized Educational Activities',
    'Activities according to the daily educational schedule'
  ],

  [
    '10:00–10:15',
    'var(--sun)',
    'Second Breakfast',
    'Second breakfast'
  ],

  [
    '11:15–12:20',
    'var(--peach)',
    'Outdoor Walk',
    'Preparation for outdoor activity and outdoor walk'
  ],

  [
    '12:20–12:30',
    'var(--sky)',
    'Return from Outdoor Walk',
    'Return to the group and hygiene procedures'
  ],

  [
    '12:30–13:00',
    'var(--grass)',
    'Lunch',
    'Lunch'
  ],

  [
    '13:00–15:00',
    'var(--lavender)',
    'Daytime Sleep',
    'Daytime sleep and rest'
  ],

  [
    '15:00–15:20',
    'var(--sky)',
    'Gradual Wake-Up & Wellness',
    'Gradual wake-up and wellness activities'
  ],

  [
    '15:20–15:40',
    'var(--sun)',
    'Afternoon Snack',
    'Afternoon snack'
  ],

  [
    '15:40–16:00',
    'var(--rose)',
    'Independent Activities & Individual Work',
    'Movement, national, role-playing, board games, creative activities, books and individual work with children'
  ],

  [
    '16:00–16:30',
    'var(--peach)',
    'Outdoor Walk',
    'Preparation for outdoor activity and outdoor walk'
  ],

  [
    '16:30–17:00',
    'var(--grass)',
    'Evening Meal',
    'Evening meal'
  ],

  [
    '17:30–17:45',
    'var(--lavender)',
    'Independent Activities',
    'Movement, national, role-playing, board games, creative activities, books and other independent activities'
  ],

  [
    '17:45–18:00',
    'var(--sky)',
    'Going Home',
    'Children leave for home'
  ]

];


/* =========================================================
   ZHALYN SCHEDULE
   ========================================================= */

const zhalynSchedule = [

  [
    '7:30–8:30',
    'var(--sky)',
    'Children Arrival',
    'Parent conversation, consultation, children\'s independent activities and morning exercise'
  ],

  [
    '8:30–8:50',
    'var(--grass)',
    'Breakfast',
    'Breakfast'
  ],

  [
    '8:50–9:00',
    'var(--rose)',
    'Preparation for Organized Activities',
    'Preparation for organized educational activities'
  ],

  [
    '9:00–11:25',
    'var(--lavender)',
    'Organized Educational Activities',
    'Activities according to the daily educational schedule'
  ],

  [
    '10:20–10:45',
    'var(--sun)',
    'Second Breakfast',
    'Second breakfast'
  ],

  [
    '11:25–12:30',
    'var(--peach)',
    'Outdoor Walk',
    'Preparation for outdoor activity and outdoor walk'
  ],

  [
    '12:30–12:40',
    'var(--sky)',
    'Return from Outdoor Walk',
    'Return to the group and hygiene procedures'
  ],

  [
    '12:40–13:10',
    'var(--grass)',
    'Lunch',
    'Lunch'
  ],

  [
    '13:00–15:00',
    'var(--lavender)',
    'Daytime Sleep',
    'Daytime sleep and rest'
  ],

  [
    '15:00–15:20',
    'var(--sky)',
    'Gradual Wake-Up & Wellness',
    'Gradual wake-up and wellness activities'
  ],

  [
    '15:20–15:40',
    'var(--sun)',
    'Afternoon Snack',
    'Afternoon snack'
  ],

  [
    '15:40–16:00',
    'var(--rose)',
    'Independent Activities & Individual Work',
    'Movement, national, role-playing, board games, creative activities, books and individual work with children'
  ],

  [
    '16:00–16:30',
    'var(--peach)',
    'Outdoor Walk',
    'Preparation for outdoor activity and outdoor walk'
  ],

  [
    '16:30–17:00',
    'var(--grass)',
    'Evening Meal',
    'Evening meal'
  ],

  [
    '17:00–17:45',
    'var(--lavender)',
    'Independent Activities',
    'Movement, national, role-playing, board games, creative activities, books and other independent activities'
  ],

  [
    '17:45–18:00',
    'var(--sky)',
    'Going Home',
    'Children leave for home'
  ]

];


/* =========================================================
   STANDARD GROUPS
   ========================================================= */

const standardGroups = [

  'Kulynshak',
  'Baldyrgan',
  'Zhuldyz',
  'Baiterek',
  'Kyran',
  'Zhalyn'

];


/* =========================================================
   SPECIAL GROUPS
   ========================================================= */

const specialGroups = [

  'Baldauren',
  'Zhuldyz',
  'Kulynshak',
  'Baldyrgan',
  'Baiterek',
  'Kyran',
  'Zhalyn'

];


/* =========================================================
   GROUP SCHEDULE TEMPLATES
   ========================================================= */

const groupScheduleTemplates = {};


/* Standard schedules */

standardGroups.forEach((group) => {

  groupScheduleTemplates[group] =
    baseSchedule.map(
      (item) => [...item]
    );

});


/* Special schedules */

specialGroups.forEach((group) => {

  groupScheduleTemplates[group] =
    specialGroupSchedule.map(
      (item) => [...item]
    );

});


/*
 * Kulynshak and Baldyrgan use their own dedicated
 * schedule (different timings from the shared
 * specialGroupSchedule used by Baldauren / Zhuldyz),
 * so override them here, after the loops above.
 */

['Kulynshak', 'Baldyrgan'].forEach((group) => {

  groupScheduleTemplates[group] =
    kulynshakBaldyrganSchedule.map(
      (item) => [...item]
    );

});


/*
 * Baiterek and Kyran also use their own dedicated
 * schedule (same timings as specialGroupSchedule, but
 * with the combined first-row description), so override
 * them here too.
 */

['Baiterek', 'Kyran'].forEach((group) => {

  groupScheduleTemplates[group] =
    baiterekKyranSchedule.map(
      (item) => [...item]
    );

});


/*
 * Zhalyn also uses its own dedicated schedule.
 */

groupScheduleTemplates['Zhalyn'] =
  zhalynSchedule.map(
    (item) => [...item]
  );


/* =========================================================
   SELECTED GROUP
   ========================================================= */

let selectedScheduleGroup =
  'Kulynshak';


/* =========================================================
   SCHEDULE TRANSLATIONS
   ========================================================= */

const scheduleText = {

  kk: {

    title:
      ' тобының күн тәртібі',

    note:
      'Күн тәртібі топтың жас ерекшелігі мен ұйымдастырылған іс-әрекет кестесіне сәйкес жүргізіледі.'

  },


  ru: {

    title:
      ' — расписание группы',

    note:
      'Распорядок дня проводится в соответствии с возрастом детей и расписанием организованной деятельности группы.'

  },


  en: {

    title:
      ' Daily Schedule',

    note:
      'The daily routine follows the children’s age group and the scheduled educational activities.'

  }

};


/* =========================================================
   RENDER GROUP SCHEDULE
   ========================================================= */

function renderGroupSchedule() {

  const list =
    document.getElementById(
      'scheduleList'
    );


  const title =
    document.getElementById(
      'scheduleGroupTitle'
    );


  const note =
    document.getElementById(
      'scheduleTemplateNote'
    );


  /*
   * If schedule HTML doesn't exist,
   * stop.
   */

  if (
    !list ||
    !title ||
    !note
  ) {

    return;

  }


  const language =
    currentLanguage || 'kk';


  const localized =
    scheduleText[language] ||
    scheduleText.en;


  const textMap =
    pageTranslations[language] ||
    {};


  const specialMap =
    specialScheduleTranslations[language] ||
    specialScheduleTranslations.en;


  /* =======================================================
     VALIDATE GROUP
     ======================================================= */

  if (
    !groupScheduleTemplates[
      selectedScheduleGroup
    ]
  ) {

    selectedScheduleGroup =
      'Kulynshak';

  }


  /* =======================================================
     GROUP TITLE
     ======================================================= */

  const translatedGroup =
    groupTranslations[language]?.[
      selectedScheduleGroup
    ] ||
    selectedScheduleGroup;


  title.textContent =
    `${translatedGroup}${localized.title}`;


  /* =======================================================
     NOTE
     ======================================================= */

  note.textContent =
    localized.note;


  /* =======================================================
     CLEAR OLD SCHEDULE
     ======================================================= */

  list.replaceChildren();


  /* =======================================================
     GET SCHEDULE
     ======================================================= */

  const schedule =
    groupScheduleTemplates[
      selectedScheduleGroup
    ];


  const isSpecialGroup =
    specialGroups.includes(
      selectedScheduleGroup
    );


  /* =======================================================
     RENDER ITEMS
     ======================================================= */

  schedule.forEach(
    (
      [time, color, activity, details],
      index
    ) => {

      const item =
        document.createElement(
          'button'
        );


      item.type =
        'button';


      item.className =
        `schedule-item${
          index === 0
            ? ' active'
            : ''
        }`;


      /* TIME */

      const timeElement =
        document.createElement(
          'span'
        );


      timeElement.className =
        'time';


      timeElement.textContent =
        time;


      /* DOT */

      const dot =
        document.createElement(
          'span'
        );


      dot.className =
        's-dot';


      dot.style.background =
        color;


      /* INFO */

      const info =
        document.createElement(
          'span'
        );


      info.className =
        's-info';


      /* HEADING */

      const heading =
        document.createElement(
          'h4'
        );


      if (isSpecialGroup) {

        heading.textContent =
          specialMap[activity] ||
          activity;

      } else {

        heading.textContent =
          textMap[activity] ||
          activity;

      }


      /* DESCRIPTION */

      const description =
        document.createElement(
          'p'
        );


      if (isSpecialGroup) {

        description.textContent =
          specialMap[details] ||
          details;

      } else {

        description.textContent =
          textMap[details] ||
          details;

      }


      /* ASSEMBLE */

      info.append(
        heading,
        description
      );


      item.append(
        timeElement,
        dot,
        info
      );


      /* ===================================================
         CLICK
         =================================================== */

      item.addEventListener(
        'click',
        () => {

          list
            .querySelectorAll(
              '.schedule-item'
            )
            .forEach(
              (scheduleItem) => {

                scheduleItem.classList.remove(
                  'active'
                );

              }
            );


          item.classList.add(
            'active'
          );

        }
      );


      list.appendChild(
        item
      );

    }
  );


  /* =======================================================
     ACTIVE GROUP BUTTON
     ======================================================= */

  document
    .querySelectorAll(
      '.schedule-group-btn'
    )
    .forEach(
      (button) => {

        button.classList.toggle(

          'active',

          button.dataset.scheduleGroup ===
            selectedScheduleGroup

        );

      }
    );

}


/* =========================================================
   GROUP BUTTON EVENTS
   ========================================================= */

document
  .querySelectorAll(
    '.schedule-group-btn'
  )
  .forEach(
    (button) => {

      button.addEventListener(
        'click',
        () => {

          const group =
            button.dataset.scheduleGroup;


          if (
            !groupScheduleTemplates[group]
          ) {

            console.warn(
              `Unknown schedule group: ${group}`
            );

            return;

          }


          selectedScheduleGroup =
            group;


          renderGroupSchedule();

        }
      );

    }
  );


/* =========================================================
   EVENT / CLASS HOUR SWITCHER
   ========================================================= */

document
  .querySelectorAll(
    '.event-type-btn'
  )
  .forEach(
    (button) => {

      button.addEventListener(
        'click',
        () => {

          /*
           * Active button
           */

          document
            .querySelectorAll(
              '.event-type-btn'
            )
            .forEach(
              (btn) => {

                btn.classList.remove(
                  'active'
                );

              }
            );


          button.classList.add(
            'active'
          );


          const type =
            button.dataset.eventType;


          const eventsPanel =
            document.getElementById(
              'eventsPanel'
            );


          const classHourPanel =
            document.getElementById(
              'classHourPanel'
            );


          if (eventsPanel) {

            eventsPanel.style.display =
              type === 'events'
                ? 'grid'
                : 'none';

          }


          if (classHourPanel) {

            classHourPanel.style.display =
              type === 'classHour'
                ? 'grid'
                : 'none';

          }

        }
      );

    }
  );


/* =========================================================
   STICKY NAVBAR
   ========================================================= */

window.addEventListener(
  'scroll',
  () => {

    const navbar =
      document.getElementById(
        'navbar'
      );


    if (!navbar) {
      return;
    }


    navbar.classList.toggle(
      'scrolled',
      window.scrollY > 20
    );

  }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

  const navLinks =
    document.getElementById(
      'navLinks'
    );


  if (!navLinks) {
    return;
  }


  navLinks.classList.toggle(
    'open'
  );

}


document
  .querySelectorAll(
    '.nav-links a'
  )
  .forEach(
    (link) => {

      link.addEventListener(
        'click',
        () => {

          const navLinks =
            document.getElementById(
              'navLinks'
            );


          if (navLinks) {

            navLinks.classList.remove(
              'open'
            );

          }

        }
      );

    }
  );


/* =========================================================
   FAQ
   ========================================================= */

function toggleFaq(el) {

  if (!el) {
    return;
  }


  const item =
    el.parentElement;


  if (!item) {
    return;
  }


  document
    .querySelectorAll(
      '.faq-item'
    )
    .forEach(
      (faqItem) => {

        if (
          faqItem !== item
        ) {

          faqItem.classList.remove(
            'open'
          );

        }

      }
    );


  item.classList.toggle(
    'open'
  );

}


/* =========================================================
   GALLERY FILTER
   ========================================================= */

function filterGallery(
  button,
  category
) {

  if (!button) {
    return;
  }


  /* Active filter */

  document
    .querySelectorAll(
      '.gf-btn'
    )
    .forEach(
      (btn) => {

        btn.classList.remove(
          'active'
        );

      }
    );


  button.classList.add(
    'active'
  );


  /* Filter items */

  document
    .querySelectorAll(
      '.gallery-item'
    )
    .forEach(
      (item) => {

        const show =
          category === 'all' ||
          item.dataset.cat ===
            category;


        item.style.opacity =
          show
            ? '1'
            : '0.2';


        item.style.transform =
          show
            ? ''
            : 'scale(0.95)';


        item.style.transition =
          'opacity .3s, transform .3s';

      }
    );

}


/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */

const reveals =
  document.querySelectorAll(
    '.reveal'
  );


if (
  'IntersectionObserver'
  in window
) {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                'visible'
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.1
      }
    );


  reveals.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

} else {

  /*
   * Fallback for older browsers.
   */

  reveals.forEach(
    (element) => {

      element.classList.add(
        'visible'
      );

    }
  );

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

setLanguage('kk');