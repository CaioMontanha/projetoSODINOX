(function () {
  const contact = {
    phone: '5581999999999',
    phoneLabel: '+55 (81) 99999-9999',
    email: 'contato@sodinox.com.br',
    address: 'Endereço comercial configurável, Recife - PE',
    mapQuery: 'Sodinox Recife PE',
    hours: 'Segunda a sexta, 08h às 17h',
    whatsappMessage: 'Olá! Vim pelo site da Sodinox e gostaria de solicitar um orçamento.',
  };

  window.SODINOX_CONTACT = contact;

  function setContactLinks() {
    const whatsappUrl = `https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.whatsappMessage)}`;
    const emailUrl = `mailto:${contact.email}?subject=${encodeURIComponent('Contato pelo site da Sodinox')}`;

    document.querySelectorAll('[data-whatsapp]').forEach((link) => {
      link.setAttribute('href', whatsappUrl);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    });

    document.querySelectorAll('[data-email]').forEach((link) => {
      link.setAttribute('href', emailUrl);
    });

    document.querySelectorAll('[data-contact-phone]').forEach((node) => {
      node.textContent = contact.phoneLabel;
    });

    document.querySelectorAll('[data-contact-email]').forEach((node) => {
      node.textContent = contact.email;
    });

    document.querySelectorAll('[data-contact-address]').forEach((node) => {
      node.textContent = contact.address;
    });

    document.querySelectorAll('[data-contact-hours]').forEach((node) => {
      node.textContent = contact.hours;
    });

    document.querySelectorAll('[data-map-link]').forEach((link) => {
      link.setAttribute('href', `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    });
  }

  function setFooterYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll('[data-current-year]').forEach((node) => {
      node.textContent = `© ${year} Sodinox`;
    });
  }

  function setActiveNav() {
    const page = document.body.dataset.page;
    document.querySelectorAll('[data-nav]').forEach((link) => {
      if (link.dataset.nav === page) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function setMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    const closeNav = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      closeNav();
    });
  }

  function setRevealObserver() {
    const items = document.querySelectorAll('[data-animate]');
    if (!('IntersectionObserver' in window) || items.length === 0) return;

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    items.forEach((item) => observer.observe(item));
  }

  document.addEventListener('DOMContentLoaded', () => {
    setContactLinks();
    setFooterYear();
    setActiveNav();
    setMobileNav();
    setRevealObserver();
  });
})();
