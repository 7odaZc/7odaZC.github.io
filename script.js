// Add this to your existing script
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  // Toggle menu visibility
  navToggle.addEventListener('change', function() {
    if (this.checked) {
      navMenu.classList.add('active');
    } else {
      navMenu.classList.remove('active');
    }
  });
  
  // Close menu when clicking on a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.checked = false;
      navMenu.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navToggle.checked = false;
      navMenu.classList.remove('active');
    }
  });
});