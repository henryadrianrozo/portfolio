// Screenshot lightbox, shared by every case study page.
// Any page with .shot buttons and the #lightbox markup gets this for free.
(function () {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var lightboxImg = document.getElementById('lightbox-img');
  var closeBtn = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    // removeAttribute, not src = '': an empty src resolves to the page URL and
    // makes the browser request the whole document again.
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.shot').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openLightbox(btn.getAttribute('data-full'), btn.querySelector('img').alt);
    });
  });

  // Clicking the backdrop closes; clicking the image itself does not.
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  closeBtn.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
})();
