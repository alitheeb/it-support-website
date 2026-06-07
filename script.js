console.log("IT Website Loaded Successfully 🚀");
const translations = {
  en: {
    navServices: "Services",
    navWhy: "Why Me",
    navAbout: "About Me",
    navContact: "Contact",

    title: "German IT Support & Network Services",
    subtitle: "Reliable IT services for businesses in the UAE 🇦🇪",
    whatsappBtn: "Contact on WhatsApp",
    servicesTitle: "Services",
    featuresTitle: "Why Choose Me",
    aboutTitle: "About Me",
    contactTitle: "Contact",

    service1: "IT Support (Remote & On-site)",
  service2: "Network Setup & Troubleshooting",
  service3: "Microsoft 365 Setup",
  service4: "Wi-Fi Optimization",
  service5: "CCTV Technical Support",
  service6: "Cybersecurity Basics",

  why1: "⚡ Fast response time",
  why2: "🔧 Reliable technical support",
  why3: "📊 Business-focused solutions",
  why4: "🌐 On-site & remote assistance",

  aboutText: "Experienced IT Specialist providing professional support in IT infrastructure, networking, and system administration for businesses across the UAE.",

  pricingTitle: "IT Packages & Pricing",

  basicTitle: "Basic Plan",
  basicDesc: "Perfect for small offices",
  basic1: "Remote & On-site IT Support",
  basic2: "Basic troubleshooting",
  basic3: "Microsoft 365 support",

  standardTitle: "Standard Plan",
  standardDesc: "Ideal for growing businesses",
  standard1: "Remote & On-site support",
  standard2: "Network troubleshooting",
  standard3: "Cybersecurity checks",

  premiumTitle: "Premium Plan",
  premiumDesc: "Full IT infrastructure support",
  premium1: "Server management",
  premium2: "Remote & On-site Priority support",
  premium3: "Advanced security",

  OnetimeTitle: "One-time Services",
  OnetimeDesc: "Office IT setup",
  Onetime1: "Network configuration",
  Onetime2: "CCTV setup support",
  Onetime3:"Wi-Fi optimization"
  },

  ar: {
    navServices: "الخدمات",
    navWhy: "لماذا أنا",
    navAbout: "عني",
    navContact: "تواصل معي",

    title: "خدمات دعم IT والشبكات بمعايير ألمانية",
    subtitle: "حلول تقنية موثوقة للشركات في الإمارات 🇦🇪",
    whatsappBtn: "تواصل عبر واتساب",
    servicesTitle: "الخدمات",
    featuresTitle: "لماذا تختارني",
    aboutTitle: "حولي",
    contactTitle: "تواصل معي",

    service1: "دعم تقني (عن بعد و ميداني)",
  service2: "إعداد الشبكات وحل المشاكل",
  service3: "إعداد Microsoft 365",
  service4: "تحسين شبكة الواي فاي",
  service5: "دعم أنظمة المراقبة CCTV",
  service6: "أساسيات الأمن السيبراني",

  why1: "⚡ سرعة استجابة عالية",
  why2: "🔧 دعم تقني موثوق",
  why3: "📊 حلول موجهة للشركات",
  why4: "🌐 دعم عن بعد و ميداني",

  aboutText: "مختص تقنية معلومات ذو خبرة في دعم البنية التحتية للشبكات وإدارة الأنظمة وتقديم حلول احترافية للشركات في جميع أنحاء الإمارات.",

  pricingTitle: "باقات وأسعار خدمات IT",

  basicTitle: "الباقة الأساسية",
  basicDesc: "مناسبة للمكاتب الصغيرة",
  basic1: "دعم تقني ميداني و عن بعد",
  basic2: "حل المشاكل الأساسية",
  basic3: "دعم Microsoft 365",

  standardTitle: "الباقة المتوسطة",
  standardDesc: "مثالية للشركات المتوسطة",
  standard1: "دعم ميداني وعن بعد",
  standard2: "حل مشاكل الشبكات",
  standard3: "فحص أمني أساسي",

  premiumTitle: "الباقة الاحترافية",
  premiumDesc: "دعم كامل للبنية التحتية",
  premium1: "إدارة السيرفرات",
  premium2: "دعم عن بعد و ميداني بأولوية",
  premium3: "حماية وأمن متقدم",

  OnetimeTitle: "خدمات إضافية",
  OnetimeDesc: "تجهيز البنية التقنية للمكاتب ",
  Onetime1: " تهيئة وإدارة الشبكات ",
  Onetime2:" دعم وتركيب أنظمة المراقبة",
  Onetime3: " تحسين أداء وتغطية شبكة واي-فاي "
  }
};

let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";

  // تغيير النصوص مع Animation
  document.body.classList.add("fade-out");

  setTimeout(() => {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      el.innerText = translations[currentLang][key];
    });

    // تغيير الاتجاه
    document.body.style.direction = currentLang === "ar" ? "rtl" : "ltr";

    // تغيير العلم
    document.getElementById("langBtn").innerText =
      currentLang === "en" ? "🇬🇧" : "🇦🇪";

    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");

    setTimeout(() => {
      document.body.classList.remove("fade-in");
    }, 300);

  }, 150);
}