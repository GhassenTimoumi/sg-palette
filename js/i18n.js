/* =========================================================
   SG Palette — i18n (Français / العربية) with RTL support
   ========================================================= */
(function (global) {
  'use strict';

  var DICT = {
    fr: {
      'nav.products': 'Produits',
      'nav.gallery': 'Galerie',
      'nav.calc': 'Devis en ligne',
      'nav.why': 'Pourquoi nous',
      'nav.process': 'Fabrication',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',
      'nav.cta': 'Demander un devis',

      'hero.eyebrow': 'Fournisseur N°1 en Tunisie',
      'hero.title': 'Le leader de la <span class="hl">palette en bois</span> en Tunisie',
      'hero.lead': "Depuis plus de 25 ans, SG Palette fabrique et livre des palettes en bois de qualité supérieure — robustes, durables et taillées pour vos besoins de manutention, de stockage et d'export.",
      'hero.cta1': 'Demander un devis gratuit',
      'hero.cta2': 'Découvrir nos produits →',
      'hero.badge1': '✔ Livraison partout en Tunisie',
      'hero.badge2': '✔ Qualité contrôlée & traçabilité',
      'hero.badge3': '✔ Solutions sur-mesure',
      'hero.badge3plain': 'Sur-mesure',

      'stat.years': "ans d'expérience",
      'stat.stock': 'palettes en stock',
      'stat.refs': 'références disponibles',
      'stat.eco': 'bois durable & contrôlé',

      'pf.eyebrow': 'Points forts',
      'pf.title': 'Pourquoi SGP fait la différence',
      'pf.sub': 'Trois promesses simples qui font la confiance de nos clients industriels, logistiques et exportateurs.',
      'pf.c1.t': 'Qualité supérieure',
      'pf.c1.d': 'Des palettes en bois fabriquées à partir de matériaux de premier choix, pour une résistance et une durabilité exceptionnelles.',
      'pf.c2.t': 'Large gamme',
      'pf.c2.d': 'Tailles standards, formats européens, caisses en bois et configurations personnalisées — plus de 200 références au catalogue.',
      'pf.c3.t': 'Service client',
      'pf.c3.d': 'Un accompagnement prioritaire, des délais respectés et un support technique dédié à chaque étape de votre projet.',

      'prod.eyebrow': 'Notre gamme',
      'prod.title': 'Des palettes pour chaque usage',
      'prod.sub': 'Neuves, réemployées ou certifiées export — nous adaptons le format, la charge et le traitement à votre cahier des charges.',
      'prod.cta': 'Parler à un conseiller',
      'prod.p1.tag': 'Standard', 'prod.p1.t': 'Palettes neuves', 'prod.p1.d': 'Palettes en bois neuves, inspectées et triées, prêtes pour la manutention et le stockage intensif.',
      'prod.p2.tag': 'Le plus demandé', 'prod.p2.t': 'EUR / EPAL & formats', 'prod.p2.d': 'Formats européens normalisés 120×80 et 120×100, compatibles chaînes logistiques et export.',
      'prod.p3.tag': 'Emballage', 'prod.p3.t': 'Caisses en bois', 'prod.p3.d': 'Caisses et emballages bois robustes pour protéger et transporter vos marchandises en toute sécurité.',
      'prod.p4.tag': 'Projet', 'prod.p4.t': 'Solutions sur-mesure', 'prod.p4.d': 'Dimensions, épaisseurs et capacités de charge conçues précisément selon votre besoin.',
      'prod.p5.tag': 'International', 'prod.p5.t': 'Certifiées export', 'prod.p5.d': 'Palettes conformes aux exigences du transport international, avec traçabilité documentée.',
      'prod.p6.tag': 'Économique', 'prod.p6.t': 'Palettes réemployées', 'prod.p6.d': 'Palettes contrôlées, réparées si nécessaire et reclassées — une option fiable et économique.',

      'gal.eyebrow': 'Galerie',
      'gal.title': 'Nos palettes en images',
      'gal.sub': 'Un aperçu de nos formats et finitions. Chaque produit est personnalisable selon vos dimensions et volumes.',
      'gal.g1': 'Palette standard', 'gal.g2': 'Palette EUR / EPAL', 'gal.g3': 'Caisse en bois',
      'gal.g4': 'Palette renforcée', 'gal.g5': 'Palette sur-mesure', 'gal.g6': 'Palettes empilées',

      'calc.eyebrow': 'Devis instantané',
      'calc.title': 'Estimez votre devis en ligne',
      'calc.sub': 'Obtenez une fourchette de prix indicative en quelques secondes. Pour une offre ferme, envoyez votre demande.',
      'calc.type': 'Type de produit',
      'calc.size': 'Format',
      'calc.cond': 'État',
      'calc.cond.new': 'Neuve',
      'calc.cond.used': 'Réemployée',
      'calc.treat': 'Traitement export (HT / ISPM 15)',
      'calc.qty': 'Quantité',
      'calc.region': 'Région de livraison',
      'calc.estimate': 'Estimation indicative',
      'calc.unit': 'Prix unitaire estimé',
      'calc.total': 'Total estimé',
      'calc.note': '* Estimation indicative hors TVA, basée sur des prix moyens. Le prix final dépend du volume, des dimensions exactes et du traitement.',
      'calc.send': 'Envoyer cette estimation',
      'calc.t.standard': 'Palette standard',
      'calc.t.euro': 'EUR / EPAL',
      'calc.t.crate': 'Caisse en bois',
      'calc.t.heavy': 'Palette renforcée',

      'why.eyebrow': 'Pourquoi nous',
      'why.title': "Une entreprise bâtie sur l'exigence",
      'why.sub': 'SG Palette est une société dynamique et innovante, dédiée à la fabrication de palettes de qualité supérieure adaptées aux besoins de ses clients.',
      'why.more': 'En savoir plus sur nous →',
      'why.1.t': 'Expérience', 'why.1.d': 'Plus de 25 ans de savoir-faire dans la fabrication et la commercialisation de palettes en bois.',
      'why.2.t': 'Passion', 'why.2.d': 'Un engagement profond pour des solutions de transport durables, fiables et rentables.',
      'why.3.t': 'Engagement', 'why.3.d': 'Un service client exceptionnel et des relations de confiance sur le long terme.',

      'proc.eyebrow': 'Notre processus',
      'proc.title': 'Du bois brut à la palette livrée',
      'proc.sub': "Chaque palette est inspectée, réparée si nécessaire et triée selon les spécifications avant d'être livrée à temps.",
      'proc.1.t': 'Sélection du bois', 'proc.1.d': 'Matériaux de premier choix, issus de sources durables et écologiques.',
      'proc.2.t': 'Fabrication', 'proc.2.d': 'Assemblage précis selon les normes et vos spécifications techniques.',
      'proc.3.t': 'Contrôle qualité', 'proc.3.d': 'Inspection, réparation et tri rigoureux pour une qualité garantie.',
      'proc.4.t': 'Livraison', 'proc.4.d': 'Expédition fiable et dans les délais, partout en Tunisie.',

      'about.eyebrow': 'Qui sommes-nous',
      'about.title': 'La Société Galgaoui',
      'about.p1': 'SGP — la Société Galgaoui de fabrication et de commercialisation de palettes en bois — est le fournisseur <strong>N°1 en Tunisie</strong>. Nous mettons la qualité, la fiabilité et la satisfaction client au cœur de tout ce que nous faisons.',
      'about.p2': 'Nous nous engageons à respecter les plus hautes normes environnementales en utilisant des matériaux durables et écologiques, avec un bois issu de sources responsables.',
      'about.badge': "années d'expertise",
      'about.pill1': 'Gestion de la qualité', 'about.pill2': 'Traçabilité', 'about.pill3': 'Matériaux durables', 'about.pill4': 'Livraison fiable',

      'cta.title': 'Un projet de palettes ? Parlons-en.',
      'cta.sub': 'Recevez un devis gratuit et personnalisé sous 24 h.',
      'cta.quote': 'Demander un devis',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Demandez votre devis',
      'contact.sub': 'Notre équipe vous répond rapidement avec une offre adaptée à vos volumes et formats.',
      'contact.phone': 'Téléphone', 'contact.email': 'Email', 'contact.addr': 'Adresse',
      'contact.addrval': 'Boujardgua, Mornag, Ben Arous — Tunisie',
      'contact.map': 'Voir sur Google Maps →',
      'form.name': 'Nom complet', 'form.name.ph': 'Votre nom',
      'form.phone': 'Téléphone', 'form.phone.ph': '+216 ...',
      'form.email': 'Email', 'form.email.ph': 'vous@entreprise.com',
      'form.need': 'Besoin', 'form.need.ph': 'Sélectionnez…',
      'form.msg': 'Message', 'form.msg.ph': 'Quantité, dimensions, délais…',
      'form.send': 'Envoyer la demande',
      'form.ok': '✔ Merci ! Votre demande a bien été préparée.',

      'foot.tag': 'Le leader de la fabrication et commercialisation de palettes en bois en Tunisie.',
      'foot.products': 'Produits', 'foot.company': 'Entreprise', 'foot.contact': 'Contact',
      'foot.follow': 'Suivez-nous',
      'foot.rights': 'SG Palette — Société Galgaoui. Tous droits réservés.',
      'foot.made': 'Bois durable 🌿 · Fabriqué en Tunisie 🇹🇳'
    },

    ar: {
      'nav.products': 'المنتجات',
      'nav.gallery': 'المعرض',
      'nav.calc': 'عرض سعر فوري',
      'nav.why': 'لماذا نحن',
      'nav.process': 'التصنيع',
      'nav.about': 'من نحن',
      'nav.contact': 'اتصل بنا',
      'nav.cta': 'اطلب عرض سعر',

      'hero.eyebrow': 'المورّد رقم 1 في تونس',
      'hero.title': 'الرائد في صناعة <span class="hl">منصّات الخشب</span> في تونس',
      'hero.lead': 'منذ أكثر من 25 عامًا، تصنّع SG Palette وتوصّل منصّات خشبية عالية الجودة — متينة ومستدامة ومصمَّمة لاحتياجات المناولة والتخزين والتصدير.',
      'hero.cta1': 'اطلب عرض سعر مجاني',
      'hero.cta2': '← اكتشف منتجاتنا',
      'hero.badge1': '✔ توصيل في كامل تونس',
      'hero.badge2': '✔ جودة مراقَبة وتتبُّع',
      'hero.badge3': '✔ حلول حسب الطلب',
      'hero.badge3plain': 'حسب الطلب',

      'stat.years': 'سنة خبرة',
      'stat.stock': 'منصّة في المخزون',
      'stat.refs': 'مرجع متوفّر',
      'stat.eco': 'خشب مستدام ومراقَب',

      'pf.eyebrow': 'نقاط القوة',
      'pf.title': 'لماذا تصنع SGP الفارق',
      'pf.sub': 'ثلاثة وعود بسيطة تمنح الثقة لعملائنا في الصناعة واللوجستيك والتصدير.',
      'pf.c1.t': 'جودة عالية',
      'pf.c1.d': 'منصّات خشبية مصنوعة من مواد من الدرجة الأولى، لمتانة وصلابة استثنائية.',
      'pf.c2.t': 'تشكيلة واسعة',
      'pf.c2.d': 'مقاسات قياسية وأوروبية وصناديق خشبية وتكوينات مخصّصة — أكثر من 200 مرجع في الكتالوج.',
      'pf.c3.t': 'خدمة العملاء',
      'pf.c3.d': 'مرافقة ذات أولوية، واحترام الآجال، ودعم تقني مخصّص في كل مرحلة من مشروعك.',

      'prod.eyebrow': 'تشكيلتنا',
      'prod.title': 'منصّات لكل استعمال',
      'prod.sub': 'جديدة أو مُعاد استعمالها أو معتمدة للتصدير — نكيّف المقاس والحمولة والمعالجة حسب كرّاس شروطك.',
      'prod.cta': 'تحدّث إلى مستشار',
      'prod.p1.tag': 'قياسية', 'prod.p1.t': 'منصّات جديدة', 'prod.p1.d': 'منصّات خشبية جديدة، مفحوصة ومفرزة، جاهزة للمناولة والتخزين المكثّف.',
      'prod.p2.tag': 'الأكثر طلبًا', 'prod.p2.t': 'EUR / EPAL ومقاسات', 'prod.p2.d': 'مقاسات أوروبية قياسية 120×80 و120×100، متوافقة مع سلاسل اللوجستيك والتصدير.',
      'prod.p3.tag': 'تغليف', 'prod.p3.t': 'صناديق خشبية', 'prod.p3.d': 'صناديق وتغليف خشبي متين لحماية بضائعك ونقلها بأمان.',
      'prod.p4.tag': 'مشروع', 'prod.p4.t': 'حلول حسب الطلب', 'prod.p4.d': 'أبعاد وسماكات وحمولات مصمَّمة بدقّة حسب حاجتك.',
      'prod.p5.tag': 'دولي', 'prod.p5.t': 'معتمدة للتصدير', 'prod.p5.d': 'منصّات مطابقة لمتطلبات النقل الدولي، مع تتبُّع موثّق.',
      'prod.p6.tag': 'اقتصادية', 'prod.p6.t': 'منصّات مُعاد استعمالها', 'prod.p6.d': 'منصّات مفحوصة ومُصلَحة عند الحاجة ومُعاد تصنيفها — خيار موثوق واقتصادي.',

      'gal.eyebrow': 'المعرض',
      'gal.title': 'منصّاتنا بالصور',
      'gal.sub': 'لمحة عن مقاساتنا وتشطيباتنا. كل منتج قابل للتخصيص حسب أبعادك وكمياتك.',
      'gal.g1': 'منصّة قياسية', 'gal.g2': 'منصّة EUR / EPAL', 'gal.g3': 'صندوق خشبي',
      'gal.g4': 'منصّة مقوّاة', 'gal.g5': 'منصّة حسب الطلب', 'gal.g6': 'منصّات مكدّسة',

      'calc.eyebrow': 'تقدير فوري',
      'calc.title': 'احسب عرض سعرك عبر الإنترنت',
      'calc.sub': 'احصل على نطاق سعري تقريبي في ثوانٍ. للحصول على عرض نهائي، أرسل طلبك.',
      'calc.type': 'نوع المنتج',
      'calc.size': 'المقاس',
      'calc.cond': 'الحالة',
      'calc.cond.new': 'جديدة',
      'calc.cond.used': 'مُعاد استعمالها',
      'calc.treat': 'معالجة للتصدير (HT / ISPM 15)',
      'calc.qty': 'الكمية',
      'calc.region': 'جهة التوصيل',
      'calc.estimate': 'تقدير تقريبي',
      'calc.unit': 'السعر التقريبي للوحدة',
      'calc.total': 'المجموع التقريبي',
      'calc.note': '* تقدير تقريبي دون احتساب الأداء، مبني على أسعار متوسطة. السعر النهائي يتعلق بالكمية والأبعاد الدقيقة والمعالجة.',
      'calc.send': 'أرسل هذا التقدير',
      'calc.t.standard': 'منصّة قياسية',
      'calc.t.euro': 'EUR / EPAL',
      'calc.t.crate': 'صندوق خشبي',
      'calc.t.heavy': 'منصّة مقوّاة',

      'why.eyebrow': 'لماذا نحن',
      'why.title': 'شركة مبنية على المعايير العالية',
      'why.sub': 'SG Palette شركة ديناميكية ومبتكرة، متخصّصة في صناعة منصّات عالية الجودة تلائم احتياجات عملائها.',
      'why.more': '← اعرف المزيد عنّا',
      'why.1.t': 'الخبرة', 'why.1.d': 'أكثر من 25 عامًا من الدراية في صناعة وتسويق المنصّات الخشبية.',
      'why.2.t': 'الشغف', 'why.2.d': 'التزام عميق بحلول نقل مستدامة وموثوقة ومجدية.',
      'why.3.t': 'الالتزام', 'why.3.d': 'خدمة عملاء استثنائية وعلاقات ثقة على المدى الطويل.',

      'proc.eyebrow': 'مسارنا',
      'proc.title': 'من الخشب الخام إلى منصّة مُسلَّمة',
      'proc.sub': 'كل منصّة تُفحَص وتُصلَح عند الحاجة وتُفرَز حسب المواصفات قبل تسليمها في الوقت المحدّد.',
      'proc.1.t': 'اختيار الخشب', 'proc.1.d': 'مواد من الدرجة الأولى، من مصادر مستدامة وصديقة للبيئة.',
      'proc.2.t': 'التصنيع', 'proc.2.d': 'تجميع دقيق حسب المعايير ومواصفاتك التقنية.',
      'proc.3.t': 'مراقبة الجودة', 'proc.3.d': 'فحص وإصلاح وفرز دقيق لجودة مضمونة.',
      'proc.4.t': 'التوصيل', 'proc.4.d': 'شحن موثوق وفي الآجال، في كامل تونس.',

      'about.eyebrow': 'من نحن',
      'about.title': 'شركة القلقاوي',
      'about.p1': 'SGP — شركة القلقاوي لصناعة وتسويق المنصّات الخشبية — هي المورّد <strong>رقم 1 في تونس</strong>. نضع الجودة والموثوقية ورضا العميل في صميم كل ما نقوم به.',
      'about.p2': 'نلتزم باحترام أعلى المعايير البيئية باستعمال مواد مستدامة وصديقة للبيئة، بخشب من مصادر مسؤولة.',
      'about.badge': 'سنوات خبرة',
      'about.pill1': 'إدارة الجودة', 'about.pill2': 'التتبُّع', 'about.pill3': 'مواد مستدامة', 'about.pill4': 'توصيل موثوق',

      'cta.title': 'لديك مشروع منصّات؟ لنتحدّث.',
      'cta.sub': 'احصل على عرض سعر مجاني ومخصّص خلال 24 ساعة.',
      'cta.quote': 'اطلب عرض سعر',

      'contact.eyebrow': 'اتصل بنا',
      'contact.title': 'اطلب عرض سعرك',
      'contact.sub': 'يردّ فريقنا بسرعة بعرض يلائم كمياتك ومقاساتك.',
      'contact.phone': 'الهاتف', 'contact.email': 'البريد الإلكتروني', 'contact.addr': 'العنوان',
      'contact.addrval': 'بوجرڨة، مرناق، بن عروس — تونس',
      'contact.map': '← عرض على خرائط Google',
      'form.name': 'الاسم الكامل', 'form.name.ph': 'اسمك',
      'form.phone': 'الهاتف', 'form.phone.ph': '+216 ...',
      'form.email': 'البريد الإلكتروني', 'form.email.ph': 'you@company.com',
      'form.need': 'الحاجة', 'form.need.ph': 'اختر…',
      'form.msg': 'رسالة', 'form.msg.ph': 'الكمية، الأبعاد، الآجال…',
      'form.send': 'إرسال الطلب',
      'form.ok': '✔ شكرًا! تم تجهيز طلبك بنجاح.',

      'foot.tag': 'الرائد في صناعة وتسويق المنصّات الخشبية في تونس.',
      'foot.products': 'المنتجات', 'foot.company': 'الشركة', 'foot.contact': 'اتصل بنا',
      'foot.follow': 'تابعنا',
      'foot.rights': 'SG Palette — شركة القلقاوي. كل الحقوق محفوظة.',
      'foot.made': 'خشب مستدام 🌿 · صُنع في تونس 🇹🇳'
    }
  };

  function apply(lang) {
    var d = DICT[lang] || DICT.fr;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (d[k] === undefined) return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = d[k];
      else el.textContent = d[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (d[k] !== undefined) el.setAttribute('placeholder', d[k]);
    });

    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      var match = b.getAttribute('data-lang-btn') === lang;
      b.classList.toggle('active', match);
      b.setAttribute('aria-pressed', String(match));
    });
    try { localStorage.setItem('sgp-lang', lang); } catch (e) {}
    global.SGP_LANG = lang;
    document.dispatchEvent(new CustomEvent('sgp:lang', { detail: { lang: lang, dict: d } }));
  }

  function t(key) { var d = DICT[global.SGP_LANG] || DICT.fr; return d[key] || key; }

  global.SGPi18n = {
    apply: apply,
    t: t,
    init: function () {
      var saved;
      try { saved = localStorage.getItem('sgp-lang'); } catch (e) {}
      apply(saved === 'ar' ? 'ar' : 'fr');
      document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
        b.addEventListener('click', function () { apply(b.getAttribute('data-lang-btn')); });
      });
    }
  };
})(window);
