// Click any image in the page content to view it enlarged; click again or press Esc to close
(function () {
  var images = document.querySelectorAll('.post img');
  if (!images.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  var big = document.createElement('img');
  big.alt = '';
  box.appendChild(big);
  document.body.appendChild(box);

  function close() { box.classList.remove('open'); }

  images.forEach(function (img) {
    img.classList.add('zoomable');
    if (!img.title) img.title = 'Click to enlarge';
    img.addEventListener('click', function () {
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      box.classList.add('open');
    });
  });

  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
