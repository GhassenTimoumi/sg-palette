/* SG Palette — interactions */
(function () {
  'use strict';
  var t = function (k) { return window.SGPi18n ? window.SGPi18n.t(k) : k; };
  var lang = function () { return window.SGP_LANG || 'fr'; };

  /* ---------- Sticky nav ---------- */
  var nav = document.getElementById('nav');
  var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 10); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById('burger');
  var links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open'); burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Render pallet illustrations ---------- */
  var P = window.SGPallet;
  if (P) {
    P.render(document.getElementById('heroPallet'), { scale: 22, topBoards: 5, accentIndex: 2, animate: true, label: 'Palette en bois SG Palette' });
    P.render(document.getElementById('aboutPallet'), { scale: 17, topBoards: 5, accentIndex: 2 });
    P.render(document.getElementById('preloaderPallet'), { scale: 15, topBoards: 5, accentIndex: 2, animate: true });

  }

  /* Gallery is pre-rendered statically in index.html (crawlable).
     Fallback render only if the static markup is missing. */
  var GAL = [
    { f: 'palette-bois-neuve-tunisie.jpg', key: 'gal.g1' },
    { f: 'palette-europe-epal.jpg', key: 'gal.g2' },
    { f: 'caisse-bois-emballage.jpg', key: 'gal.g3' },
    { f: 'palette-renforcee-bois.jpg', key: 'gal.g4' },
    { f: 'caisse-bois-grand-format.jpg', key: 'gal.g5' },
    { f: 'palettes-empilees-stock.jpg', key: 'gal.g6' }
  ];
  var gal = document.getElementById('gallery');
  if (gal && !gal.children.length) {
    gal.innerHTML = GAL.map(function (g) {
      var alt = window.SGPi18n ? window.SGPi18n.t(g.key) : '';
      return '<figure class="g-card reveal">' +
        '<div class="g-card__img g-card__img--photo"><img src="assets/gallery/' + g.f + '" alt="' + alt + '" loading="lazy" /></div>' +
        '<figcaption data-i18n="' + g.key + '"></figcaption></figure>';
    }).join('');
  }

  /* ---------- Social buttons ---------- */
  var SOCIAL = [
    { name: 'WhatsApp', href: 'https://wa.me/21651886122', cls: 'wa', path: 'M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.516 5.26l-.999 3.648 3.472-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.199.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' },
    { name: 'Facebook', href: 'https://www.facebook.com/', cls: 'fb', path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z' },
    { name: 'Instagram', href: 'https://www.instagram.com/', cls: 'ig', path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-10.4a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/', cls: 'in', path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 112.06-2.07 2.07 2.07 0 01-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' },
    { name: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Mornag,+Ben+Arous,+Tunisie', cls: 'mp', path: 'M12 0C7.31 0 3.5 3.81 3.5 8.5c0 5.94 7.63 14.9 7.96 15.28a.72.72 0 001.08 0C12.87 23.4 20.5 14.44 20.5 8.5 20.5 3.81 16.69 0 12 0zm0 11.75A3.25 3.25 0 1115.25 8.5 3.25 3.25 0 0112 11.75z' }
  ];
  function socialHTML() {
    return SOCIAL.map(function (s) {
      return '<a class="social__btn social__btn--' + s.cls + '" href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.name + '">' +
        '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="' + s.path + '"/></svg></a>';
    }).join('');
  }
  ['socialRow', 'socialFooter'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = socialHTML();
  });

  /* ---------- Quote calculator ---------- */
  var BASE = { standard: 18, euro: 24, crate: 35, heavy: 28 };
  var SIZE = { '80x60': 0.7, '100x80': 0.9, '120x80': 1.0, '120x100': 1.15 };
  var TYPE_OPTS = {
    standard: { topBoards: 5, accentIndex: 2 },
    euro: { topBoards: 7, accentIndex: 3 },
    crate: { crate: true },
    heavy: { topBoards: 6, accentIndex: 2 }
  };
  var elType = document.getElementById('calcType');
  var elSize = document.getElementById('calcSize');
  var elTreat = document.getElementById('calcTreat');
  var elQty = document.getElementById('calcQty');
  var elQtyVal = document.getElementById('calcQtyVal');
  var elUnit = document.getElementById('calcUnit');
  var elTotal = document.getElementById('calcTotal');
  var elPreview = document.getElementById('calcPreview');
  var cond = 'new';

  function money(v) {
    var n = v.toLocaleString(lang() === 'ar' ? 'ar-TN' : 'fr-TN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return n + ' ' + (lang() === 'ar' ? 'د.ت' : 'DT');
  }
  function qtyDiscount(q) { return q >= 3000 ? 0.72 : q >= 1000 ? 0.8 : q >= 500 ? 0.88 : q >= 100 ? 0.95 : 1; }

  function recalc() {
    if (!elType) return;
    var ty = elType.value, sz = elSize.value, q = parseInt(elQty.value, 10);
    var unit = BASE[ty] * SIZE[sz] * (cond === 'new' ? 1 : 0.55);
    if (elTreat.checked) unit += 2.5;
    unit *= qtyDiscount(q);
    elQtyVal.textContent = q.toLocaleString(lang() === 'ar' ? 'ar-TN' : 'fr-TN');
    elUnit.textContent = money(unit);
    elTotal.textContent = money(unit * q);
    if (elPreview && P) P.render(elPreview, Object.assign({ scale: 15 }, TYPE_OPTS[ty]));
  }
  if (elType) {
    [elType, elSize, elTreat, elQty].forEach(function (el) {
      el.addEventListener('input', recalc); el.addEventListener('change', recalc);
    });
    var seg = document.getElementById('calcCond');
    seg.querySelectorAll('.seg__btn').forEach(function (b) {
      b.addEventListener('click', function () {
        seg.querySelectorAll('.seg__btn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active'); cond = b.getAttribute('data-val'); recalc();
      });
    });
    var send = document.getElementById('calcSend');
    if (send) send.addEventListener('click', function () {
      var subj = encodeURIComponent('Devis en ligne — ' + elType.options[elType.selectedIndex].text + ' ' + elSize.value);
      var body = encodeURIComponent(
        'Type: ' + elType.options[elType.selectedIndex].text + '\n' +
        'Format: ' + elSize.value + '\n' +
        'État: ' + (cond === 'new' ? t('calc.cond.new') : t('calc.cond.used')) + '\n' +
        'Export: ' + (elTreat.checked ? 'Oui' : 'Non') + '\n' +
        'Quantité: ' + elQty.value + '\n' +
        'Prix unitaire estimé: ' + elUnit.textContent + '\n' +
        'Total estimé: ' + elTotal.textContent);
      window.location.href = 'mailto:contact@sg-palette.com?subject=' + subj + '&body=' + body;
    });
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById('quoteForm');
  var note = document.getElementById('formNote');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var data = new FormData(form);
    var subject = encodeURIComponent('Demande de devis — ' + (data.get('product') || 'Palettes'));
    var body = encodeURIComponent('Nom: ' + data.get('name') + '\nTéléphone: ' + data.get('phone') + '\nEmail: ' + data.get('email') + '\nBesoin: ' + data.get('product') + '\n\n' + data.get('message'));
    if (note) note.hidden = false;
    window.location.href = 'mailto:contact@sg-palette.com?subject=' + subject + '&body=' + body;
    form.reset();
  });

  /* ---------- i18n init (default FR) + recalc on language change ---------- */
  if (window.SGPi18n) window.SGPi18n.init();
  document.addEventListener('sgp:lang', recalc);

  /* ---------- Scroll reveal (after dynamic content exists) ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) { setTimeout(function () { e.target.classList.add('in'); }, (i % 4) * 80); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else reveals.forEach(function (el) { el.classList.add('in'); });

  /* ---------- Counters ---------- */
  var nums = document.querySelectorAll('.stat__num');
  function animateNum(el) {
    var target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '', dur = 1500, start = performance.now();
    function step(now) {
      var p = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3), val = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { animateNum(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { cio.observe(n); });
  }

  /* ---------- Year ---------- */
  /* (preloader is handled by the independent inline failsafe in index.html) */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  recalc();
})();
