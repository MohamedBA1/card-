import { Translation, ServiceItem, StatItem } from "./types";

export const translations: Record<"ar" | "en", Translation> = {
  ar: {
    navHome: "الرئيسية",
    navAbout: "عن النائب",
    navServices: "الخدمات",
    navStats: "الأرقام",
    navContact: "اتصل بنا",

    heroName: "النائب سيد سمير",
    heroTitle: "عضو مجلس النواب المصري",
    heroOrg: "مجلس النواب المصري",
    verifiedBadge: "حساب برلماني موثق",

    actionCall: "اتصال مباشر",
    actionWhatsapp: "واتساب",
    actionEmail: "البريد الإلكتروني",
    actionFacebook: "فيسبوك",
    actionSave: "حفظ جهة الاتصال",
    actionShare: "مشاركة الكارت",

    aboutTitle: "النائب سيد سمير ",
    aboutText1: "هو رجل أعمال يمتلك خبرة واسعة في مجالات الاستثمار واللوجستيات، ويملك مجموعة من الشركات والاستثمارات في مصر والإمارات العربية المتحدة ودولة الكويت. ويُعد من أصحاب الخبرة البارزة في قطاع اللوجستيات وسلاسل الإمداد، حيث يمتد نشاطه في هذا المجال عبر الكويت والإمارات العربية المتحدة ومصر. كما يمتلك في دولة الإمارات العربية المتحدة شركة S S Nile Investment، المتخصصة في الاستثمار في العديد من القطاعات (التعليم,الطاقة,الصناعة,الخدمات الصحية,النفط,الزراعة,السياحة,التجارة..) ، إلى جانب استثمارات واسعة داخل مصر تشمل الزراعة، والرعاية الصحية، والعقارات، والتكنولوجيا، بما يعكس رؤية استثمارية قائمة على التنوع والنمو المستدام.",
    aboutText2: "",
    aboutText3: "",
    aboutRolesLabel: "العمل السياسي والمناصب",
    aboutRoles: [
      "عضو مجلس النواب المصري ٢٠٢٠ - ٢٠٢٥",
      "عضو مجلس النواب المصري ٢٠٢٥ - ٢٠٣٠",
      "وكيل لجنة الصناعة بمجلس النواب المصري",
      "وكيل لجنة القيم بمجلس النواب المصري ٢٠٢٥",
      "عضو اللجنة العامة بمجلس النواب",
      "عضو اللجنة الاقتصادية في مجلس النواب ٢٠٢٥",
      "رئيس مجلس ادارة نادي مستقبل وطن سبورت"
    ],

    servicesTitle: "الخدمات والأنشطة البرلمانية",
    servicesSubtitle: "بوابة متكاملة لتسهيل التواصل وتقديم الدعم والخدمات للمواطنين في شتى المجالات",

    statsTitle: "حصاد العطاء بالأرقام",
    statsSubtitle: "إنجازات ملموسة وخطوات ثابتة نحو غدٍ أفضل للدائرة وأبنائها الأوفياء",

    qrTitle: "رمز الاستجابة السريعة (QR Code)",
    qrSubtitle: "امسح الرمز ضوئياً للاحتفاظ ببيانات الاتصال وحفظها مباشرة على هاتفك",
    qrScanToSave: "امسح لحفظ جهة الاتصال مباشرة",
    qrCopySuccess: "تم نسخ رابط الكارت بنجاح!",

    contactTitle: "معلومات الاتصال والمكتب",
    contactSubtitle: "يسعدنا دائماً تواصلكم معنا واستقبال مقترحاتكم وطلباتكم في المقر الرسمي",
    contactPhoneLabel: "رقم الهاتف المباشر",
    contactEmailLabel: "البريد الإلكتروني الرسمي",
    contactAddressLabel: "عنوان المكتب الرئيسي",
    contactAddressValue: "جمهورية مصر العربية، محافظة الدقهلية، ميت غمر، شارع الحرية الرئيسي",
    contactHoursLabel: "مواعيد العمل واستقبال الطلبات",
    contactHoursValue: "السبت إلى الخميس: من الساعة 10:00 صباحاً وحتى 8:00 مساءً",
    contactMapLabel: "موقعنا على الخريطة",

    footerCopyright: "جميع الحقوق محفوظة © 2026 النائب سيد سمير",
    footerRights: "عضو مجلس النواب المصري",
    footerCredit: "تم التطوير باحترافية للعمل البرلماني"
  },
  en: {
    navHome: "Home",
    navAbout: "About MP",
    navServices: "Services",
    navStats: "Statistics",
    navContact: "Contact",

    heroName: "MP Sayed Samir",
    heroTitle: "Member of the Egyptian Parliament",
    heroOrg: "Egyptian Parliament",
    verifiedBadge: "Verified MP Account",

    actionCall: "Direct Call",
    actionWhatsapp: "WhatsApp",
    actionEmail: "Email MP",
    actionFacebook: "Facebook Profile",
    actionSave: "Save Contact",
    actionShare: "Share Card",

    aboutTitle: "Sayed Samir",
    aboutText1: "An Egyptian businessman from Mansoura, Dakahlia Governorate. He owns large companies and investments in Egypt, the UAE, and Kuwait across several sectors including medicine, agriculture, technology, real estate, and the automotive industry.",
    aboutText2: "",
    aboutText3: "",
    aboutRolesLabel: "Political Roles & Positions",
    aboutRoles: [
      "Member of the Egyptian House of Representatives 2020 - 2025",
      "Member of the Egyptian House of Representatives 2025 - 2030",
      "Deputy Chair of the House Industry Committee",
      "Deputy Head of the House Ethics Committee 2025",
      "Member of the General Committee of the House of Representatives",
      "Member of the House Economic Committee 2025",
      "Chairman of the Board of Mostaqbal Watan Sport Club"
    ],

    servicesTitle: "Services & Parliamentary Activities",
    servicesSubtitle: "An integrated portal to facilitate communication, support, and public services for citizens",

    statsTitle: "Harvest of Service in Numbers",
    statsSubtitle: "Tangible achievements and steady steps towards a better future for our constituency",

    videoTitle: "Message from the MP",
    videoSubtitle: "A video message from MP Sayed Samir",

    qrTitle: "QR Code Card",
    qrSubtitle: "Scan the code to instantly view and save the digital business card contact details on your device",
    qrScanToSave: "Scan to Save Contact Immediately",
    qrCopySuccess: "Card link copied successfully!",

    contactTitle: "Contact Information & Office",
    contactSubtitle: "We are always delighted to receive your suggestions, inquiries, and requests at our official headquarters",
    contactPhoneLabel: "Direct Telephone Number",
    contactEmailLabel: "Official Email Address",
    contactAddressLabel: "Main Office Address",
    contactAddressValue: "El Horreya Main Street, Mit Ghamr, Dakahlia Governorate, Arab Republic of Egypt",
    contactHoursLabel: "Working & Reception Hours",
    contactHoursValue: "Saturday to Thursday: 10:00 AM to 8:00 PM",
    contactMapLabel: "Our Office Location",

    footerCopyright: "All Rights Reserved © 2026 MP Sayed Samir",
    footerRights: "Member of the Egyptian Parliament",
    footerCredit: "Developed Professionally for Parliamentary Work"
  }
};

export const servicesData: ServiceItem[] = [
  {
    id: "meeting",
    titleAr: "طلب لقاء رسمي",
    titleEn: "Request Official Meeting",
    descAr: "حجز موعد للمقابلة الشخصية لعرض المقترحات والمطالب والحلول الممكنة لمشكلات الدائرة.",
    descEn: "Book an appointment for a personal meeting to present proposals, requests, and community solutions.",
    iconName: "CalendarDays"
  },
  {
    id: "community",
    titleAr: "الخدمات المجتمعية",
    titleEn: "Community Services",
    descAr: "تنسيق ومتابعة مشروعات البنية التحتية، الرعاية الصحية، والمساعدات الاجتماعية للأسر الأولى بالرعاية.",
    descEn: "Coordination and follow-up on infrastructure, healthcare, and social support for families in need.",
    iconName: "HeartHandshake"
  },
  {
    id: "complaint",
    titleAr: "تقديم الشكاوى والمقترحات",
    titleEn: "Submit Complaints",
    descAr: "قناة رسمية مباشرة لتلقي الشكاوى ومتابعتها بجدية وسرعة بالتنسيق مع الأجهزة التنفيذية والوزارات.",
    descEn: "A direct official channel to submit complaints and track resolutions with executive bodies and ministries.",
    iconName: "FileText"
  },
  {
    id: "projects",
    titleAr: "المشروعات والمبادرات",
    titleEn: "Sponsoring Projects",
    descAr: "دعم ورعاية المبادرات الخدمية والتعليمية والرياضية التي تسهم في بناء جيل واعد ودعم الشباب بالدائرة.",
    descEn: "Supporting public, educational, and athletic initiatives to empower the youth and build a promising generation.",
    iconName: "Briefcase"
  },
  {
    id: "achievements",
    titleAr: "الإنجازات وطلبات الإحاطة",
    titleEn: "Parliamentary Achievements",
    descAr: "استعراض طلبات الإحاطة، الأسئلة البرلمانية، والاقتراحات بمشروعات القوانين المقدمة لخدمة الصالح العام.",
    descEn: "Overview of legislative proposals, formal inquiries, and draft laws submitted to serve the public interest.",
    iconName: "Award"
  },
  {
    id: "news",
    titleAr: "آخر الأخبار والتغطيات",
    titleEn: "Latest News & Events",
    descAr: "تغطية شاملة ومستمرة للجلسات البرلمانية، الزيارات الميدانية، والمشروعات القائمة في الدائرة.",
    descEn: "Comprehensive and continuous coverage of parliamentary sessions, field visits, and local ongoing projects.",
    iconName: "Newspaper"
  }
];

export const statsData: StatItem[] = [
  {
    id: "served",
    labelAr: "مواطن تم خدمتهم",
    labelEn: "Citizens Served",
    value: 52000,
    suffix: "+",
    iconName: "Users"
  },
  {
    id: "projects",
    labelAr: "مشروعات تنموية مدعومة",
    labelEn: "Development Projects",
    value: 124,
    suffix: "",
    iconName: "Building2"
  },
  {
    id: "meetings",
    labelAr: "لقاءات جماهيرية مفتوحة",
    labelEn: "Public Meetings",
    value: 865,
    suffix: "",
    iconName: "MessageSquareText"
  },
  {
    id: "initiatives",
    labelAr: "مبادرات مجتمعية منطلقة",
    labelEn: "Community Initiatives",
    value: 48,
    suffix: "",
    iconName: "Flame"
  }
];

export const contactInfo = {
  phone: "+201009988888",
  whatsapp: "https://wa.me/201009988888",
  email: "ssamirmp1@gmail.com",
  facebook: "https://www.facebook.com/share/181EnYghKG/?mibextid=wwXIfr",
  vcfFile: "/src/assets/files/SayedSamir.vcf"
};
