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

  aboutText: "Experienced IT Specialist providing professional support in IT infrastructure, networking, and system administration for businesses across the UAE."
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

  aboutText: "مختص تقنية معلومات ذو خبرة في دعم البنية التحتية للشبكات وإدارة الأنظمة وتقديم حلول احترافية للشركات في جميع أنحاء الإمارات."
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