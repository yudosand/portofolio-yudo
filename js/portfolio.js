(() => {
  'use strict';

  const navbar = document.getElementById('navbarNav');
  const modal = document.getElementById('imageModal');
  const modalVisual = modal.querySelector('.modal-image-wrap');

  const clearModalVisual = () => {
    modalVisual.replaceChildren();
    modalVisual.classList.remove('has-project-image');
    modalVisual.setAttribute('aria-hidden', 'true');
  };

  // Failed or unavailable visuals leave the same neutral container in place.
  document.querySelectorAll('.project-visual img').forEach((image) => {
    const clearCardVisual = () => {
      if (!image.parentElement) return;
      image.parentElement.setAttribute('aria-hidden', 'true');
      image.remove();
    };
    image.addEventListener('error', clearCardVisual, { once: true });
    if (image.complete && image.naturalWidth === 0) clearCardVisual();
  });

  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(navbar, { toggle: false }).hide();
      }
    });
  });

  // Read shared card content so the preview and its accessible title stay in sync.
  modal.addEventListener('show.bs.modal', (event) => {
    const card = event.relatedTarget?.closest('.project-card');
    if (!card) {
      event.preventDefault();
      return;
    }

    const fields = {
      modalProjectTitle: card.querySelector('.project-title').textContent,
      modalCategory: card.querySelector('.project-category').textContent,
      modalRole: card.querySelector('.project-role span').textContent,
      modalOverview: card.dataset.overview,
      modalContribution: card.dataset.contribution,
      modalTools: card.dataset.tools,
      modalOutcome: card.dataset.outcome,
      modalStatus: card.dataset.status || '',
    };

    Object.entries(fields).forEach(([id, value]) => {
      document.getElementById(id).textContent = value;
    });
    const features = card.dataset.features.split('|').map((feature) => {
      const item = document.createElement('li');
      item.textContent = feature;
      return item;
    });
    document.getElementById('modalFeatures').replaceChildren(...features);
    document.getElementById('modalStatusItem').hidden = !card.dataset.status;

    clearModalVisual();
    const cardImage = card.querySelector('.project-image');
    if (cardImage) {
      const preview = new Image();
      preview.className = 'modal-project-image';
      preview.alt = cardImage.alt;
      preview.width = cardImage.naturalWidth || Number(cardImage.getAttribute('width'));
      preview.height = cardImage.naturalHeight || Number(cardImage.getAttribute('height'));
      preview.addEventListener('error', () => {
        if (modalVisual.contains(preview)) clearModalVisual();
      }, { once: true });
      preview.src = cardImage.getAttribute('src');
      modalVisual.append(preview);
      modalVisual.classList.add('has-project-image');
      modalVisual.removeAttribute('aria-hidden');
    }
    modal.querySelector('.modal-body').scrollTop = 0;
  });

  modal.addEventListener('hidden.bs.modal', clearModalVisual);

  modal.addEventListener('shown.bs.modal', () => {
    modal.querySelector('.modal-body').scrollTop = 0;
    document.getElementById('modalCloseButton').focus({ preventScroll: true });
  });
})();
