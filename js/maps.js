(function () {
  function buildMapUrl(query) {
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const frame = document.querySelector('[data-map-frame]');
    if (!frame) return;

    const contact = window.SODINOX_CONTACT || {};
    const query = contact.mapQuery || 'Sodinox Recife PE';
    frame.src = buildMapUrl(query);
  });
})();
