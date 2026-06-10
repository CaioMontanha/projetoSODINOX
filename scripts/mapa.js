(function () {
  function construirUrlMapa(consulta) {
    return `https://www.google.com/maps?q=${encodeURIComponent(consulta)}&output=embed`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quadroMapa = document.querySelector('[data-quadro-mapa]');
    if (!quadroMapa) return;

    const contato = window.CONTATO_SODINOX || {};
    const consulta = contato.consultaMapa || 'Sodinox Recife PE';
    quadroMapa.src = construirUrlMapa(consulta);
  });
})();
