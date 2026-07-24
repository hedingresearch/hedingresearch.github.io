// Minimal mobile navigation toggle.
// The hamburger (.menu-icon) has no native behaviour, so we toggle the
// `.open` class on .site-nav, which the SCSS uses to reveal the menu.
(function () {
  var icon = document.querySelector('.menu-icon');
  var nav = document.querySelector('.site-nav');
  if (!icon || !nav) return;

  icon.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.toggle('open');
  });

  // Close the menu after tapping a link (better mobile UX).
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
    }
  });
})();
