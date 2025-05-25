document.addEventListener("DOMContentLoaded", () => {
  // Language Toggle
  const languageToggle = document.querySelector(".language-toggle")
  const htmlElement = document.documentElement
  const currentLang = document.querySelector(".current-lang")

  // Language translations
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.featured": "Featured",
      "nav.arrivals": "Arrivals",
      "nav.reviews": "Reviews",
      "nav.blog": "Blog",
      "hero.welcome": "WELCOME TO",
      "hero.bookstore": "BOOK STORE",
      "hero.description":
        "Discover a world of stories waiting to be explored. From bestsellers to hidden gems, we have something for every reader. Browse our collection and find your next favorite book today.",
      "hero.learnMore": "Learn More",
      "features.delivery": "Fast Delivery",
      "features.deliveryDesc": "Get your books delivered to your doorstep within 2-3 business days",
      "features.service": "24/7 Service",
      "features.serviceDesc": "Our customer support team is available round the clock to assist you",
      "features.deal": "Best Deal",
      "features.dealDesc": "Enjoy competitive prices and regular discounts on your favorite titles",
      "features.payment": "Secure Payment",
      "features.paymentDesc": "Shop with confidence with our secure and encrypted payment options",
      "about.title": "About Us",
      "about.description":
        "Founded in 2010, our bookstore has been a haven for book lovers for over a decade. We started with a simple mission: to connect readers with stories that inspire, entertain, and transform. Our carefully curated collection spans across genres, from timeless classics to contemporary bestsellers.",
      "about.readMore": "Read More",
      "featured.title": "Featured Books",
      "featured.bookTitle1": "The Great Adventure",
      "featured.author1": "John Smith",
      "featured.bookTitle2": "Mystery Island",
      "featured.author2": "Emily Johnson",
      "featured.bookTitle3": "The Lost City",
      "featured.author3": "Robert Brown",
      "featured.bookTitle4": "Eternal Wisdom",
      "featured.author4": "Sarah Wilson",
      "featured.bookTitle5": "Ocean Secrets",
      "featured.author5": "Michael Davis",
      "featured.bookTitle6": "Mountain Tales",
      "featured.author6": "Jennifer Lee",
      "featured.bookTitle7": "Desert Journey",
      "featured.author7": "David Miller",
      "featured.bookTitle8": "Forest Whispers",
      "featured.author8": "Lisa Thompson",
      "arrivals.title": "New Arrivals",
      "arrivals.bookTitle1": "The Silent Echo",
      "arrivals.author1": "Alexandra Rivers",
      "arrivals.bookTitle2": "Midnight Shadows",
      "arrivals.author2": "Thomas Wright",
      "arrivals.bookTitle3": "Beyond the Horizon",
      "arrivals.author3": "Sophia Martinez",
      "arrivals.bookTitle4": "Whispers in the Wind",
      "arrivals.author4": "Daniel Cooper",
      "arrivals.bookTitle5": "The Last Voyage",
      "arrivals.author5": "Olivia Parker",
      "arrivals.bookTitle6": "Eternal Flames",
      "arrivals.author6": "Nathan Reed",
      "reviews.title": "Reviews",
      "reviews.reviewer1": "John Doe",
      "reviews.review1":
        "I've been a loyal customer for years, and I'm always impressed by the selection and service. The staff recommendations have introduced me to some of my favorite authors that I might have otherwise missed.",
      "reviews.reviewer2": "Jane Smith",
      "reviews.review2":
        "The online ordering process is seamless, and my books always arrive earlier than expected. I also love the monthly book club discussions - they've really enriched my reading experience.",
      "reviews.reviewer3": "Robert Johnson",
      "reviews.review3":
        "As a parent, I appreciate the thoughtfully curated children's section. The staff is incredibly helpful in finding age-appropriate books that my kids actually enjoy reading. The loyalty program is a nice bonus too!",
      "reviews.reviewer4": "Emily Davis",
      "reviews.review4":
        "I discovered this bookstore last year and it's become my favorite place to shop for gifts. The packaging is beautiful, and they offer personalized recommendations that have made me the gift-giving hero among my friends.",
      "digital.title": "DIGITAL BOOKS",
      "digital.description":
        "Embrace the future of reading with our extensive collection of e-books and audiobooks. Enjoy instant access to thousands of titles, read anywhere, and save shelf space while helping the environment.",
      "digital.learnMore": "Browse Digital Library",
      "blog.title": "From Our Blog",
      "blog.post1Title": "Summer Reading List 2023",
      "blog.post1":
        "Discover our top picks for beach reads this summer. From thrilling mysteries to heartwarming romances, we've curated the perfect collection to accompany your vacation.",
      "blog.post2Title": "Meet the Author: Sarah Johnson",
      "blog.post2":
        'We sat down with bestselling author Sarah Johnson to discuss her creative process, upcoming projects, and the inspiration behind her award-winning novel "The Silent Path."',
      "blog.post3Title": "The Art of Building a Home Library",
      "blog.post3":
        "Creating a personal library is about more than just collecting books. Learn how to curate a collection that reflects your interests and creates a cozy reading sanctuary in your home.",
      "blog.readMore": "Read More",
      "footer.description":
        "We're more than just a bookstore - we're a community of readers, writers, and dreamers. Join us in celebrating the magic of literature and the joy of discovering new worlds through the pages of a book.",
      "footer.quickLinks": "Quick Links",
      "footer.contactInfo": "Contact Info",
      "footer.address": "123 Reading Lane, Bookville, BK 12345",
      "footer.phone": "+1 (555) 123-4567",
      "footer.email": "hello@bookstore.com",
      "footer.followUs": "Follow Us",
      "footer.newsletter": "Newsletter",
      "footer.emailPlaceholder": "Enter your email",
      "footer.subscribe": "Subscribe",
      "footer.copyright": "	&copy; 2025 Book Store. All Rights Reserved.",
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.featured": "كتب مميزة",
      "nav.arrivals": "وصل حديثاً",
      "nav.reviews": "آراء القراء",
      "nav.blog": "المدونة",
      "hero.welcome": "مرحباً بكم في",
      "hero.bookstore": "متجر الكتب",
      "hero.description":
        "اكتشف عالماً من القصص بانتظارك. من الكتب الأكثر مبيعاً إلى الجواهر المخفية، لدينا شيء لكل قارئ. تصفح مجموعتنا واعثر على كتابك المفضل التالي اليوم.",
      "hero.learnMore": "اعرف المزيد",
      "features.delivery": "توصيل سريع",
      "features.deliveryDesc": "احصل على كتبك موصلة إلى اب منزلك خلال 2-3 أيام عمل",
      "features.service": "خدمة 24/7",
      "features.serviceDesc": "فريق دعم العملاء لدينا متاح على مدار الساعة لمساعدتك",
      "features.deal": "أفضل العروض",
      "features.dealDesc": "استمتع بأسعار تنافسية وخصومات منتظمة على عناوينك المفضلة",
      "features.payment": "دفع آمن",
      "features.paymentDesc": "تسوق بثقة مع خيارات الدفع الآمنة والمشفرة لدينا",
      "about.title": "من نحن",
      "about.description":
        "تأسست مكتبتنا في عام 2010، وكانت ملاذاً لعشاق الكتب لأكثر من عقد. بدأنا بمهمة بسيطة: ربط القراء بالقصص التي تلهم وتسلي وتحول. تمتد مجموعتنا المختارة بعناية عبر الأنواع، من الكلاسيكيات الخالدة إلى الكتب الأكثر مبيعاً المعاصرة.",
      "about.readMore": "اقرأ المزيد",
      "featured.title": "كتب مميزة",
      "featured.bookTitle1": "المغامرة العظيمة",
      "featured.author1": "جون سميث",
      "featured.bookTitle2": "جزيرة الغموض",
      "featured.author2": "إيميلي جونسون",
      "featured.bookTitle3": "المدينة المفقودة",
      "featured.author3": "روبرت براون",
      "featured.bookTitle4": "الحكمة الأبدية",
      "featured.author4": "سارة ويلسون",
      "featured.bookTitle5": "أسرار المحيط",
      "featured.author5": "مايكل ديفيس",
      "featured.bookTitle6": "حكايات الجبل",
      "featured.author6": "جينيفر لي",
      "featured.bookTitle7": "رحلة الصحراء",
      "featured.author7": "ديفيد ميلر",
      "featured.bookTitle8": "همسات الغابة",
      "featured.author8": "ليزا طومسون",
      "arrivals.title": "وصل حديثاً",
      "arrivals.bookTitle1": "الصدى الصامت",
      "arrivals.author1": "ألكسندرا ريفرز",
      "arrivals.bookTitle2": "ظلال منتصف الليل",
      "arrivals.author2": "توماس رايت",
      "arrivals.bookTitle3": "ما وراء الأفق",
      "arrivals.author3": "صوفيا مارتينيز",
      "arrivals.bookTitle4": "همسات في الريح",
      "arrivals.author4": "دانيال كوبر",
      "arrivals.bookTitle5": "الرحلة الأخيرة",
      "arrivals.author5": "أوليفيا باركر",
      "arrivals.bookTitle6": "اللهب الأبدي",
      "arrivals.author6": "ناثان ريد",
      "reviews.title": "ماذا يقول قراؤنا",
      "reviews.reviewer1": "جون دو",
      "reviews.review1":
        "لقد كنت عميلاً مخلصاً لسنوات، وأنا دائماً منبهر بالاختيار والخدمة. لقد عرفتني توصيات الموظفين على بعض مؤلفي المفضلين الذين ربما كنت سأفوتهم.",
      "reviews.reviewer2": "جين سميث",
      "reviews.review2":
        "عملية الطلب عبر الإنترنت سلسة، وكتبي تصل دائماً قبل الموعد المتوقع. أحب أيضاً مناقشات نادي الكتاب الشهرية - لقد أثرت تجربة القراءة لدي حقاً.",
      "reviews.reviewer3": "روبرت جونسون",
      "reviews.review3":
        "كوالد، أقدر قسم الأطفال المختار بعناية. الموظفون مفيدون للغاية في العثور على كتب مناسبة للعمر يستمتع أطفالي بقراءتها فعلاً. برنامج الولاء هو مكافأة لطيفة أيضاً!",
      "reviews.reviewer4": "إيميلي ديفيس",
      "reviews.review4":
        "اكتشفت هذه المكتبة العام الماضي وأصبحت مكاني المفضل للتسوق للهدايا. التغليف جميل، ويقدمون توصيات شخصية جعلتني بطل تقديم الهدايا بين أصدقائي.",
      "digital.title": "الكتب الرقمية",
      "digital.description":
        "احتضن مستقبل القراءة مع مجموعتنا الواسعة من الكتب الإلكترونية والكتب الصوتية. استمتع بالوصول الفوري إلى آلاف العناوين، واقرأ في أي مكان، ووفر مساحة الرف مع المساعدة في الحفاظ على البيئة.",
      "digital.learnMore": "تصفح المكتبة الرقمية",
      "blog.title": "من مدونتنا",
      "blog.post1Title": "قائمة قراءة صيف 2023",
      "blog.post1":
        "اكتشف أفضل اختياراتنا لقراءة الشاطئ هذا الصيف. من الألغاز المثيرة إلى الروايات الرومانسية الدافئة، لقد اخترنا المجموعة المثالية لمرافقة عطلتك.",
      "blog.post2Title": "لقاء مع المؤلفة: سارة جونسون",
      "blog.post2":
        'جلسنا مع المؤلفة الأكثر مبيعاً سارة جونسون لمناقشة عملية الإبداع لديها، والمشاريع القادمة، والإلهام وراء روايتها الحائزة على جوائز "المسار الصامت".',
      "blog.post3Title": "فن بناء مكتبة منزلية",
      "blog.post3":
        "إنشاء مكتبة شخصية يتعلق بأكثر من مجرد جمع الكتب. تعلم كيفية تنظيم مجموعة تعكس اهتماماتك وتخلق ملاذاً دافئاً للقراءة في منزلك.",
      "blog.readMore": "اقرأ المزيد",
      "footer.description":
        "نحن أكثر من مجرد مكتبة - نحن مجتمع من القراء والكتاب والحالمين. انضم إلينا في الاحتفال بسحر الأدب وفرحة اكتشاف عوالم جديدة من خلال صفحات كتاب.",
      "footer.quickLinks": "روابط سريعة",
      "footer.contactInfo": "معلومات الاتصال",
      "footer.address": "123 شارع القراءة، بوكفيل، BK 12345",
      "footer.phone": "+1 (555) 123-4567",
      "footer.email": "hello@bookstore.com",
      "footer.followUs": "تابعنا",
      "footer.newsletter": "النشرة الإخبارية",
      "footer.emailPlaceholder": "أدخل بريدك الإلكتروني",
      "footer.subscribe": "اشترك",
      "footer.copyright": "	&copy; 2025 متجر الكتب. جميع الحقوق محفوظة.",
    },
  }

  // Check for saved language preference
  const savedLang = localStorage.getItem("language") || "en"

  // Set initial language
  setLanguage(savedLang)

  // Language toggle click handler
  languageToggle.addEventListener("click", () => {
    const currentLanguage = htmlElement.getAttribute("lang") || "en"
    const newLanguage = currentLanguage === "en" ? "ar" : "en"
    setLanguage(newLanguage)
  })

 

   

  // Theme Toggle
 

 



 



 



  

   

  


 
})
