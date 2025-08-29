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
});