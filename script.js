

  <script>
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const menuOpenIcon = document.getElementById('menuOpen');
  const menuCloseIcon = document.getElementById('menuClose');

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    menuOpenIcon.classList.toggle('hidden');
    menuCloseIcon.classList.toggle('hidden');
  });
</script>


