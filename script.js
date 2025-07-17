function toggleMenus() {
  if (document.getElementById('menuA').classList.contains('hidden')) {
    document.getElementById('menuA').classList.remove('hidden');
    document.getElementById('menuB').classList.add('hidden');
    icon.className = 'fa-solid fa-arrow-right icon';

  } else {
    document.getElementById('menuA').classList.add('hidden');
    document.getElementById('menuB').classList.remove('hidden');
    icon.className = 'fa-solid fa-arrow-left icon';
  }
}

// Show/hide button based on scroll position
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    document.getElementById('backToTop').classList.add('show');
  } else {
    document.getElementById('backToTop').classList.remove('show');
  }
});

// Smooth scroll to top when button is clicked
document.getElementById('backToTop').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});