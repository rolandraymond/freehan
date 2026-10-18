export type Language = 'en' | 'ar';

export interface TranslationContent {
  // Doctor
  doctor: {
    name: string;
    title: string;
    specialization: string;
    bio: string;
    bioDetail: string;
    qualificationsTitle: string;
    q1Title: string;
    q1Place: string;
    q2Title: string;
    q2Place: string;
    q3Title: string;
    q3Place: string;
    experienceTitle: string;
    experienceDesc: string;
    quote: string;
    bookCta: string;
  };

  // Navbar
  nav: {
    home: string;
    about: string;
    services: string;
    doctor: string;
    offers: string;
    contact: string;
    results: string;
    videoGallery: string;
    bookAppointment: string;
  };
  
  // Hero
  hero: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
    secondaryCta: string;
    satisfiedClients: string;
    qualityBadge: string;
  };
  
  // Results
  results: {
    tag: string;
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    surgical: string;
    surgicalCount: string;
    nonSurgical: string;
    nonSurgicalCount: string;
    fillers: string;
    botox: string;
    skinBoosters: string;
    bookSimilar: string;
    viewPage: string;
    procedureDetails: string;
    before: string;
    after: string;
  };

  // Services
  services: {
    title: string;
    subtitle: string;
    description: string;
    learnMore: string;
    dermatology: {
      number: string;
      title: string;
      description: string;
      pageTitle: string;
      pageSubtitle: string;
      pageDescription: string;
    };
    nutrition: {
      number: string;
      title: string;
      description: string;
      pageTitle: string;
      pageSubtitle: string;
      pageDescription: string;
    };
    hair: {
      number: string;
      title: string;
      description: string;
      pageTitle: string;
      pageSubtitle: string;
      pageDescription: string;
    };
    pageHeader: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  
  // Video Gallery
  videoGallery: {
    title: string;
    subtitle: string;
    description: string;
  };
  
  // Why Choose Us
  whyUs: {
    title: string;
    subtitle: string;
    item1: {
      title: string;
      description: string;
    };
    item2: {
      title: string;
      description: string;
    };
    item3: {
      title: string;
      description: string;
    };
    item4: {
      title: string;
      description: string;
    };
  };

  // Final CTA
  cta: {
    tag: string;
    title: string;
    description: string;
    button: string;
  };
  
  // About Us
  about: {
    tag: string;
    title: string;
    subtitle: string;
    intro: string;
    vision: string;
    visionText: string;
    mission: string;
    missionText: string;
    valuesTitle: string;
    val1: {
      title: string;
      description: string;
    };
    val2: {
      title: string;
      description: string;
    };
    val3: {
      title: string;
      description: string;
    };
  };

  // Offers
  offers: {
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    terms: string;
    bookNow: string;
    copyCode: string;
    copied: string;
    discountCode: string;
    items: {
      laser: {
        badge: string;
        title: string;
        description: string;
        code: string;
      };
      hydra: {
        badge: string;
        title: string;
        description: string;
        code: string;
      };
      bride: {
        badge: string;
        title: string;
        subtitle: string;
        description: string;
        code: string;
      };
      consultation: {
        badge: string;
        title: string;
        description: string;
        code: string;
      };
    };
  };

  // Booking
  booking: {
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    formTitle: string;
    fullName: string;
    phone: string;
    email: string;
    service: string;
    selectService: string;
    date: string;
    time: string;
    selectTime: string;
    branch: string;
    selectBranch: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    whatsappBooking: string;
    callClinic: string;
  };

  // Contact
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    infoTitle: string;
    directContact: string;
  };

  // Footer
  footer: {
    aboutTitle: string;
    aboutText: string;
    quickLinks: string;
    branches: string;
    damietta: string;
    newDamietta: string;
    workingHours: string;
    hours: string;
    copyright: string;
    privacy: string;
    terms: string;
    followUs: string;
  };

  // Common
  common: {
    readMore: string;
    viewAll: string;
    callNow: string;
    directions: string;
    bookNow: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  ar: {
    doctor: {
      name: 'د. فريهان زكريا',
      title: '',
      specialization: 'أخصائية الجلدية والتجميل والليزر والتغذية العلاجية',
      bio: 'د. فريهان بتجمع بين تخصص الجلدية والتجميل والليزر والتغذية العلاجية، وبتعتمد في شغلها على فهم الحالة بشكل كامل قبل اختيار أي إجراء.',
      bioDetail: 'بالنسبة لها، النتيجة الجيدة مش بس شكل أفضل؛ هي نتيجة مناسبة للشخص، مبنية على تقييم واضح وخطة مدروسة.',
      qualificationsTitle: 'المؤهلات العلمية',
      q1Title: 'بكالوريوس الطب والجراحة',
      q1Place: 'القصر العيني',
      q2Title: 'ماجستير الأمراض الجلدية',
      q2Place: 'جامعة قناة السويس',
      q3Title: 'دبلومة التغذية العلاجية',
      q3Place: 'المعهد القومي للتغذية',
      experienceTitle: 'الخبرة العملية',
      experienceDesc: 'خبرة في مجالات الجلدية والتجميل والليزر والتغذية العلاجية، مع التعامل مع حالات واحتياجات مختلفة.',
      quote: 'كل حالة لها احتياج مختلف .. ودوري إني أوصل معاك للاختيار المناسب',
      bookCta: 'احجز استشارتك مع د. فريهان',
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      doctor: 'د. فريهان',
      offers: 'العروض',
      contact: 'تواصل معنا',
      results: 'النتائج والحالات',
      videoGallery: 'معرض الفيديوهات',
      bookAppointment: 'احجز استشارتك',
    },
    hero: {
      tag: 'التجربة الرائدة في العناية بالجمال',
      titleLine1: 'جمالك بشكل',
      titleLine2: 'يشبهك',
      description: 'خبرة طبية، فهم حقيقي لاحتياجات كل حالة، وتقنيات متقدمة تساعدنا نوصل لنتيجة متوازنة وطبيعية.',
      cta: 'احجز استشارتك',
      secondaryCta: 'استكشف الخدمات',
      satisfiedClients: 'نخبة من العملاء الراضين',
      qualityBadge: 'أعلى معايير الدقة والأمان',
    },
    results: {
      tag: 'نتائج حقيقية',
      subtitle: 'رحلات التحول الحقيقية',
      title1: 'نتائج',
      title2: 'حقيقية',
      description: 'شوف نتائج لحالات مختلفة، وفرق اتبنى على اختيار العلاج المناسب ودقة التنفيذ.',
      surgical: 'التجميل الجراحي',
      surgicalCount: '5 حالات',
      nonSurgical: 'التجميل غير الجراحي',
      nonSurgicalCount: '3 حالات',
      fillers: 'فيلر',
      botox: 'بوتوكس',
      skinBoosters: 'سكين بوستر',
      bookSimilar: 'احجز نتيجة مماثلة',
      viewPage: 'عرض الصفحة',
      procedureDetails: 'تفاصيل الإجراء',
      before: 'قبل',
      after: 'بعد',
    },
    services: {
      title: 'خدمات تناسب احتياجك',
      subtitle: 'كل حالة لها طريقها',
      description: 'مجموعة من الخدمات الطبية والتجميلية اللي بتبدأ بفهم الحالة، وتنتهي بخطة واضحة تناسب احتياجاتها.',
      learnMore: 'اعرف المزيد',
      dermatology: {
        number: '01',
        title: 'الجلدية والليزر',
        description: 'علاجات متقدمة للبشرة والليزر والحقن التجميلية، باختيار مدروس يناسب طبيعة كل حالة.',
        pageTitle: 'بشرة أفضل .. بخطة أذكى',
        pageSubtitle: 'الجلدية والتجميل والليزر',
        pageDescription: 'علاجات متخصصة لمشاكل البشرة وإجراءات الليزر والتجميل، تحت إشراف طبي وخطة مناسبة لكل حالة.',
      },
      nutrition: {
        number: '02',
        title: 'التغذية العلاجية ونحت الجسم',
        description: 'من التغذية اليومية لنحت الجسم، بنجمع بين التخطيط والتقنيات المناسبة للوصول لتغيير متوازن.',
        pageTitle: 'التغيير يبدأ من الأساس',
        pageSubtitle: 'التغذية العلاجية ونحت القوام',
        pageDescription: 'رحلة تجمع بين التغذية المناسبة وتقنيات نحت الجسم، بخطة تتحدد حسب احتياجات الجسم وأهدافه.',
      },
      hair: {
        number: '03',
        title: 'زراعة وعلاج الشعر',
        description: 'حلول لزراعة الشعر وعلاج مشكلاته، مع تقييم دقيق وخيارات تناسب طبيعة كل حالة.',
        pageTitle: 'شعر أفضل .. يبدأ بخطة صح',
        pageSubtitle: 'علاج واستعادة الشعر',
        pageDescription: 'حلول متخصصة لزراعة الشعر وعلاجه، مع اختيار التقنية والخطوات المناسبة لكل حالة.',
      },
      pageHeader: {
        title: 'خدمات متكاملة.. باختيار مناسب',
        subtitle: 'كل حالة مش زي التانية',
        description: 'الخدمات عندنا بتبدأ بالتقييم، وبعدها بنحدد الطريق الأنسب حسب احتياجات كل حالة.',
      },
    },
    videoGallery: {
      title: 'معرض الفيديوهات',
      subtitle: 'كلام من دكتور فريهان',
      description: 'فيديوهات تشارك فيها د. فريهان خبرتها، وتوضح معلومات مهمة عن الخدمات والحالات بشكل بسيط ومباشر.',
    },
    whyUs: {
      title: 'لماذا تختارنا؟',
      subtitle: 'لأن الفرق في تفاصيل',
      item1: {
        title: 'متابعة حالتك',
        description: 'من التقييم وحتى العلاج، كل خطوة تتم تحت إشراف مباشر من الأطباء المتخصصين.',
      },
      item2: {
        title: 'تقنيات نختارها بعناية',
        description: 'بنستخدم تقنيات وأجهزة متقدمة، مع اختيار الأنسب حسب طبيعة كل حالة.',
      },
      item3: {
        title: 'خطة تناسبك',
        description: 'مفيش حل واحد يناسب الكل. كل خطة بتتحدد حسب الحالة واحتياجاتها والنتيجة المطلوبة.',
      },
      item4: {
        title: 'متابعة من البداية للنهاية',
        description: 'من أول الاستشارة لحد المتابعة، بنفضل قريبين من تفاصيل الحالة وتطورها.',
      },
    },
    cta: {
      tag: 'مستقبل جمالك هنا',
      title: 'ابدأ التغيير الصح',
      description: 'خطوة بسيطة ممكن تكون بداية لاهتمام أكبر بنفسك وبالنتيجة اللي بتدور عليها.',
      button: 'احجز استشارتك',
    },
    about: {
      tag: 'رؤيتنا ورسالتنا',
      title: 'الطب أولًا.. والجمال بوعي',
      subtitle: 'عيادة د. فريهان زكريا',
      intro: 'في عيادة د. فريهان، بنشوف التجميل كجزء من رحلة أكبر: فهم الحالة، تحديد احتياجاتها، واختيار الحل المناسب بدون مبالغة.',
      vision: 'رؤيتنا',
      visionText: 'إننا نقدم تجربة تجمع بين الخبرة الطبية، التكنولوجيا الحديثة، وفهم حقيقي لاحتياجات كل حالة، علشان يكون الوصول للنتيجة أكثر وضوحًا وثقة.',
      mission: 'مهمتنا',
      missionText: 'تقديم حلول علاجية وتجميلية مبنية على تقييم دقيق، مع اختيار ما يناسب كل حالة ومتابعتها خلال مراحل العلاج.',
      valuesTitle: 'قيمنا الأساسية',
      val1: {
        title: 'العلم والخبرة',
        description: 'كل قرار علاجي لازم يكون مبني على معرفة طبية وخبرة عملية، مش مجرد تريند.',
      },
      val2: {
        title: 'الاهتمام الحقيقي',
        description: 'بنسمع الحالة ونفهم احتياجاتها قبل ما نحدد أي خطوة، لأن التفاصيل بتفرق.',
      },
      val3: {
        title: 'نتيجة متوازنة',
        description: 'هدفنا تحسين الشكل والوصول لنتيجة طبيعية ومتناسقة، من غير مبالغة أو تغيير غير ضروري.',
      },
    },
    offers: {
      tag: 'عروض حصرية',
      title: 'عروض لفترة محدودة',
      subtitle: 'اختيارات أحسن.. بسعر أفضل',
      description: 'باقات وعروض على مجموعة من الخدمات لفترة محدودة',
      terms: 'تُطبق الشروط والأحكام على جميع العروض',
      bookNow: 'احجز موعدك الآن',
      copyCode: 'نسخ الكود',
      copied: 'تم النسخ!',
      discountCode: 'كود الخصم:',
      items: {
        laser: {
          badge: '20% خصم',
          title: 'خصم الليزر',
          description: 'خصم فوري عند حجز باقة الليزر للجسم كامل – 6 جلسات',
          code: 'LASER20',
        },
        hydra: {
          badge: 'هدية مجانية',
          title: 'هيدرافيشل هدية',
          description: 'جلسة هيدرافيشل مجانًا مع خدمات بقيمة 3000 جنيه',
          code: 'HYDRA-GIFT',
        },
        bride: {
          badge: 'VIP',
          title: 'باقة العروسة',
          subtitle: 'باكدچ الملكة',
          description: 'تجهيز متكامل للبشرة والجسم قبل الزفاف',
          code: 'BRIDE2026',
        },
        consultation: {
          badge: 'مجاناً',
          title: 'استشارة مجانية',
          description: 'استشارة أولية مجانية للأعضاء الجدد لفترة محدودة',
          code: 'CONSULT',
        },
      },
    },
    booking: {
      tag: 'حجز المواعيد والاستشارات',
      title: 'احجز استشارتك الطبية',
      subtitle: 'عيادة د. فريهان زكريا',
      description: 'ابدأ خطتك العلاجية والتجميلية بخطوة واضحة واستشارة متخصصة مع د. فريهان زكريا وفريق العيادة.',
      formTitle: 'بيانات الحجز والاستشارة',
      fullName: 'الاسم بالكامل',
      phone: 'رقم الهاتف / الواتساب',
      email: 'البريد الإلكتروني (اختياري)',
      service: 'الخدمة المطلوبة',
      selectService: 'اختر الخدمة أو الإجراء',
      date: 'التاريخ المفضل',
      time: 'الوقت المفضل',
      selectTime: 'اختر الفترة المناسبة',
      branch: 'الفرع المفضل',
      selectBranch: 'اختر الفرع الأقرب لك',
      notes: 'ملاحظات أو وصف الحالة',
      notesPlaceholder: 'اكتب باختصار سبب الاستشارة أو أي تفاصيل ترغب في مشاركتها...',
      submit: 'تأكيد طلب الحجز',
      submitting: 'جاري إرسال الطلب...',
      successTitle: 'تم استلام طلب حجزك بنجاح!',
      successDesc: 'شكراً لك، سيتواصل معك المنسق الطبي خلال وقت قصير لتأكيد الموعد وتزويدك بكافة التفاصيل.',
      whatsappBooking: 'حجز سريع عبر واتساب',
      callClinic: 'اتصال مباشر بالعيادة',
    },
    contact: {
      tag: 'تواصل مباشر',
      title: 'تواصل معنا',
      subtitle: 'نحن هنا للإجابة على استفساراتك واستقبالك بكل عناية',
      name: 'الاسم بالكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'رسالتك أو استفسارك',
      send: 'إرسال الرسالة',
      infoTitle: 'معلومات العيادة',
      directContact: 'للتواصل السريع والمباشر',
    },
    footer: {
      aboutTitle: 'د. فريهان زكريا',
      aboutText: 'أخصائية الجلدية والتجميل والليزر والتغذية العلاجية. رعاية طبية متكاملة تهدف لنتائج طبيعية ومتوازنة.',
      quickLinks: 'روابط سريعة',
      branches: 'فروعنا',
      damietta: 'الصفوة مول - برج 2 - الدور الخامس - شقة 8',
      newDamietta: 'المنطقة المركزية - أعلى المصرف المتحد - بجوار المركز الطبي',
      workingHours: 'ساعات العمل',
      hours: 'يومياً: ١٠ صباحاً - ١٠ مساءً',
      copyright: '© ٢٠٢٦ عيادة د. فريهان زكريا. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      followUs: 'تابعونا على منصات التواصل',
    },
    common: {
      readMore: 'اقرأ المزيد',
      viewAll: 'عرض الكل',
      callNow: 'اتصل الآن',
      directions: 'الاتجاهات للعيادة',
      bookNow: 'احجز الآن',
    },
  },

  en: {
    doctor: {
      name: 'Dr. Freehan Zakaria',
      title: '',
      specialization: 'Dermatology, Aesthetics, Laser & Clinical Nutrition Specialist',
      bio: 'Dr. Freehan brings together her expertise in dermatology, aesthetics, laser treatments, and clinical nutrition, with an approach that starts by understanding the full picture before recommending any procedure.',
      bioDetail: 'For her, a good result isn’t simply about looking better. It’s about achieving an outcome that feels right for you based on a clear assessment and a well planned approach.',
      qualificationsTitle: 'Qualifications',
      q1Title: 'Bachelor of Medicine & Surgery',
      q1Place: 'Kasr Al Ainy',
      q2Title: "Master’s in Dermatology",
      q2Place: 'Suez Canal University',
      q3Title: 'Diploma in Clinical Nutrition',
      q3Place: 'National Nutrition Institute',
      experienceTitle: 'Experience',
      experienceDesc: 'Experience across dermatology, aesthetics, laser treatments, and clinical nutrition, with a wide range of cases and individual needs.',
      quote: 'Every case has different needs. My role is to help you find the approach that’s right for you.',
      bookCta: 'Book Your Consultation with Dr. Freehan',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      doctor: 'Dr. Freehan',
      offers: 'Offers',
      contact: 'Contact Us',
      results: 'Results & Cases',
      videoGallery: 'Video Gallery',
      bookAppointment: 'Book Consultation',
    },
    hero: {
      tag: 'A Leading Approach to Beauty & Care',
      titleLine1: 'Beauty,',
      titleLine2: 'Your Way',
      description: 'Medical expertise, a real understanding of every case, and advanced technologies all coming together to achieve balanced, natural looking results.',
      cta: 'Book Your Consultation',
      secondaryCta: 'Explore Our Services',
      satisfiedClients: 'A Community of Satisfied Clients',
      qualityBadge: 'Excellence, Safety & Precision',
    },
    results: {
      tag: 'Real Results',
      subtitle: 'Real Transformation Journeys',
      title1: 'REAL',
      title2: 'RESULTS',
      description: 'See real cases and the difference that comes from choosing the right treatment and paying attention to every detail.',
      surgical: 'Surgical Aesthetics',
      surgicalCount: '5 Cases',
      nonSurgical: 'Non Surgical Aesthetics',
      nonSurgicalCount: '3 Cases',
      fillers: 'Fillers',
      botox: 'Botox',
      skinBoosters: 'Skin Boosters',
      bookSimilar: 'Book Similar Result',
      viewPage: 'View Page',
      procedureDetails: 'Procedure Details',
      before: 'Before',
      after: 'After',
    },
    services: {
      title: 'Services That Fit Your Needs',
      subtitle: 'Every Case Has Its Own Approach',
      description: 'Our medical and aesthetic services start with understanding your needs and end with a clear treatment plan tailored to you.',
      learnMore: 'Learn More',
      dermatology: {
        number: '01',
        title: 'Dermatology & Laser',
        description: 'Advanced skin, laser, and aesthetic injectable treatments, carefully selected to suit each case.',
        pageTitle: 'Better Skin Starts with a Smarter Plan',
        pageSubtitle: 'Dermatology & Laser Procedures',
        pageDescription: 'Specialized treatments for skin concerns, laser procedures, and aesthetic treatments, guided by medical expertise and a plan tailored to each case.',
      },
      nutrition: {
        number: '02',
        title: 'Clinical Nutrition & Body Contouring',
        description: 'From everyday nutrition to body contouring, we combine thoughtful planning with the right technologies to support balanced, realistic results.',
        pageTitle: 'Change Starts from the Inside',
        pageSubtitle: 'Clinical Nutrition & Sculpting',
        pageDescription: 'A personalized approach that combines nutrition plans with body contouring technologies, based on your body, needs, and goals.',
      },
      hair: {
        number: '03',
        title: 'Hair Transplant & Hair Care',
        description: 'Solutions for hair loss and hair restoration, with careful assessment and treatment options suited to each case.',
        pageTitle: 'Better Hair Starts with the Right Plan',
        pageSubtitle: 'Hair Restoration Solutions',
        pageDescription: 'Specialized solutions for hair restoration and treatment, with the right technique and approach selected for each case.',
      },
      pageHeader: {
        title: 'Integrated Services.. The Right Choice',
        subtitle: 'Every Case Is Different',
        description: 'Our services begin with assessment, after which we define the best path suited to each case.',
      },
    },
    videoGallery: {
      title: 'VIDEO GALLERY',
      subtitle: 'Straight from Dr. Freehan',
      description: 'Videos where Dr. Freehan shares her expertise and explains treatments, conditions, and important information in a simple, easy to understand way.',
    },
    whyUs: {
      title: 'WHY CHOOSE US?',
      subtitle: 'Because the Difference Is in the Details',
      item1: {
        title: 'Care That Follows Your Journey',
        description: 'From your initial assessment to treatment, every step is guided by specialized doctors.',
      },
      item2: {
        title: 'Technology, Carefully Selected',
        description: 'We use advanced technologies and carefully select what best suits the needs of each case.',
      },
      item3: {
        title: 'A Plan Made for You',
        description: 'There’s no one size fits all solution. Every treatment plan is based on your condition, needs, and desired outcome.',
      },
      item4: {
        title: 'Follow Up from Start to Finish',
        description: 'From your first consultation through follow-up, we stay closely involved in your progress and treatment journey.',
      },
    },
    cta: {
      tag: 'Your Future Starts Here',
      title: 'Start Your Journey the Right Way',
      description: 'One simple step can be the beginning of better care, greater confidence, and results that feel right for you.',
      button: 'Book Your Consultation',
    },
    about: {
      tag: 'Our Philosophy & Mission',
      title: 'Medicine First • Beauty with Purpose',
      subtitle: "Dr. Freehan's Clinic",
      intro: 'At Dr. Freehan’s Clinic, we see aesthetics as part of a bigger journey: understanding your condition, identifying what you need, and choosing the right approach without going overboard.',
      vision: 'Our Vision',
      visionText: 'To create an experience that brings together medical expertise, modern technology, and a genuine understanding of every case making the journey toward your desired results clearer and more confident.',
      mission: 'Our Mission',
      missionText: 'To provide medical and aesthetic solutions based on careful assessment, choosing what truly suits each case and following its progress throughout treatment.',
      valuesTitle: 'Our Core Values',
      val1: {
        title: 'Science & Experience',
        description: 'Every treatment decision should be based on medical knowledge and hands on experience not just a trend.',
      },
      val2: {
        title: 'Genuine Care',
        description: 'We listen, understand, and assess before deciding on the next step, because the details matter.',
      },
      val3: {
        title: 'Balanced Results',
        description: 'Our goal is to enhance your appearance and achieve natural, harmonious results without unnecessary changes or over treatment.',
      },
    },
    offers: {
      tag: 'Exclusive Offers',
      title: 'Limited Time Offers',
      subtitle: 'Better Choices. Better Value.',
      description: 'Special offers and packages on selected services, available for a limited time.',
      terms: 'Terms and conditions apply to all offers.',
      bookNow: 'Book Your Appointment Now',
      copyCode: 'Copy Code',
      copied: 'Copied!',
      discountCode: 'Discount Code:',
      items: {
        laser: {
          badge: '20% OFF',
          title: 'Laser Package',
          description: 'Get an instant discount when booking a full body laser package of 6 sessions.',
          code: 'LASER20',
        },
        hydra: {
          badge: 'COMPLIMENTARY',
          title: 'HYDRAFACIAL ON US',
          description: 'Enjoy a complimentary Hydrafacial session when you book services worth EGP 3,000.',
          code: 'HYDRA-GIFT',
        },
        bride: {
          badge: 'VIP',
          title: 'Bridal Package',
          subtitle: 'The Queen Package',
          description: 'A complete skin and body preparation plan ahead of your wedding day.',
          code: 'BRIDE2026',
        },
        consultation: {
          badge: 'COMPLIMENTARY',
          title: 'FREE CONSULTATION',
          description: 'Enjoy a complimentary initial consultation for new members for a limited time.',
          code: 'CONSULT',
        },
      },
    },
    booking: {
      tag: 'Appointment & Consultation',
      title: 'Book Your Consultation',
      subtitle: 'Dr. Freehan Zakaria Clinic',
      description: 'Begin your aesthetic journey with a personalized clinical assessment led by Dr. Freehan Zakaria and our expert team.',
      formTitle: 'Consultation Request Form',
      fullName: 'Full Name',
      phone: 'Phone / WhatsApp Number',
      email: 'Email Address (Optional)',
      service: 'Interested Service',
      selectService: 'Select treatment or procedure',
      date: 'Preferred Date',
      time: 'Preferred Time',
      selectTime: 'Select preferred time slot',
      branch: 'Preferred Branch',
      selectBranch: 'Select clinic branch',
      notes: 'Notes or Case Description',
      notesPlaceholder: 'Briefly share your concern, question or treatment goals...',
      submit: 'Confirm Consultation Request',
      submitting: 'Submitting request...',
      successTitle: 'Consultation Request Confirmed!',
      successDesc: 'Thank you! Our medical coordinator will reach out promptly to confirm your consultation slot and guide you.',
      whatsappBooking: 'Quick WhatsApp Booking',
      callClinic: 'Direct Call to Clinic',
    },
    contact: {
      tag: 'Get In Touch',
      title: 'Contact Us',
      subtitle: "We're here to answer your questions and welcome you with world-class care",
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message',
      send: 'Send Message',
      infoTitle: 'Clinic Information',
      directContact: 'Direct Assistance',
    },
    footer: {
      aboutTitle: 'Dr. Freehan Zakaria',
      aboutText: 'Dermatology, Aesthetics, Laser & Clinical Nutrition Specialist. Integrated medical care designed for natural, balanced outcomes.',
      quickLinks: 'Quick Links',
      branches: 'Our Branches',
      damietta: 'Safwa Mall – Tower 2 – 5th Floor – Apartment 8',
      newDamietta: 'Central Zone – Above United Bank – Next to the Medical Center',
      workingHours: 'Working Hours',
      hours: 'Daily: 10:00 AM - 10:00 PM',
      copyright: '© 2026 Dr. Freehan Zakaria Clinic. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      followUs: 'Follow Us',
    },
    common: {
      readMore: 'Read More',
      viewAll: 'View All',
      callNow: 'Call Now',
      directions: 'Get Directions',
      bookNow: 'Book Now',
    },
  },
};
