document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Dark / Light Mode Toggle with LocalStorage
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  
  // Save preference locally
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';

    if (isDark) {
      document.body.removeAttribute('data-theme');
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    }
  });

  /* ==========================================================================
     2. Responsive Navigation Hamburger Menu
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isOpened = navMenu.classList.contains('active');
    hamburgerBtn.querySelector('i').className = isOpened ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  // Close mobile navigation menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburgerBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  /* ==========================================================================
     3. Scroll Highlight for Navigation Menu
     ========================================================================== */
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

});