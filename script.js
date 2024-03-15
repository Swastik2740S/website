document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.nav-toggle');
    toggleBtn.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  