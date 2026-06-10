(function () {
  const contato = {
    telefone: '5581999999999',
    rotuloTelefone: '+55 (81) 99999-9999',
    email: 'contato@sodinox.com.br',
    endereco: 'Endereço comercial configurável, Recife - PE',
    consultaMapa: 'Sodinox Recife PE',
    horario: 'Segunda a sexta, 08h às 17h',
    mensagemWhatsapp: 'Olá! Vim pelo site da Sodinox e gostaria de solicitar um orçamento.',
  };

  window.CONTATO_SODINOX = contato;

  function configurarLinksContato() {
    const urlWhatsapp = `https://wa.me/${contato.telefone}?text=${encodeURIComponent(contato.mensagemWhatsapp)}`;
    const urlEmail = `mailto:${contato.email}?subject=${encodeURIComponent('Contato pelo site da Sodinox')}`;

    document.querySelectorAll('[data-link-whatsapp]').forEach((elemento) => {
      elemento.setAttribute('href', urlWhatsapp);
      elemento.setAttribute('target', '_blank');
      elemento.setAttribute('rel', 'noopener');
    });

    document.querySelectorAll('[data-link-email]').forEach((elemento) => {
      elemento.setAttribute('href', urlEmail);
    });

    document.querySelectorAll('[data-telefone-contato]').forEach((elemento) => {
      elemento.textContent = contato.rotuloTelefone;
    });

    document.querySelectorAll('[data-email-contato]').forEach((elemento) => {
      elemento.textContent = contato.email;
    });

    document.querySelectorAll('[data-endereco-contato]').forEach((elemento) => {
      elemento.textContent = contato.endereco;
    });

    document.querySelectorAll('[data-horario-contato]').forEach((elemento) => {
      elemento.textContent = contato.horario;
    });

    document.querySelectorAll('[data-link-mapa]').forEach((elemento) => {
      elemento.setAttribute(
        'href',
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contato.consultaMapa)}`
      );
      elemento.setAttribute('target', '_blank');
      elemento.setAttribute('rel', 'noopener');
    });
  }

  function atualizarAnoRodape() {
    const anoAtual = new Date().getFullYear();
    document.querySelectorAll('[data-ano-atual]').forEach((elemento) => {
      elemento.textContent = `© ${anoAtual} Sodinox`;
    });
  }

  function destacarNavegacao() {
    const paginaAtual = document.body.dataset.pagina;
    document.querySelectorAll('[data-navegacao]').forEach((elemento) => {
      if (elemento.dataset.navegacao === paginaAtual) {
        elemento.classList.add('ativo');
        elemento.setAttribute('aria-current', 'page');
      }
    });
  }

  function configurarMenuMobile() {
    const botaoMenu = document.querySelector('.botao-menu');
    const navegacao = document.querySelector('.navegacao-principal');
    if (!botaoMenu || !navegacao) return;

    const fecharMenu = () => {
      navegacao.classList.remove('aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
    };

    botaoMenu.addEventListener('click', () => {
      const estaAberto = navegacao.classList.toggle('aberto');
      botaoMenu.setAttribute('aria-expanded', String(estaAberto));
    });

    navegacao.querySelectorAll('a').forEach((elemento) => {
      elemento.addEventListener('click', fecharMenu);
    });

    document.addEventListener('click', (evento) => {
      if (!navegacao.classList.contains('aberto')) return;
      if (navegacao.contains(evento.target) || botaoMenu.contains(evento.target)) return;
      fecharMenu();
    });
  }

  function configurarObservador() {
    const itens = document.querySelectorAll('[data-animar]');
    if (!('IntersectionObserver' in window) || itens.length === 0) return;

    const observadorIntersecao = new IntersectionObserver((entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.18 });

    itens.forEach((item) => observadorIntersecao.observe(item));
  }

  document.addEventListener('DOMContentLoaded', () => {
    configurarLinksContato();
    atualizarAnoRodape();
    destacarNavegacao();
    configurarMenuMobile();
    configurarObservador();
  });
})();
