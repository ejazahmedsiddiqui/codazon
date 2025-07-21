function toggleMenus() {
  if (document.getElementById('menuA').classList.contains('hidden')) {
    document.getElementById('menuA').classList.remove('hidden');
    document.getElementById('menuB').classList.add('hidden');
    icon.className = 'fa-solid fa-arrow-right fa-shake icon';

  } else {
    document.getElementById('menuA').classList.add('hidden');
    document.getElementById('menuB').classList.remove('hidden');
    icon.className = 'fa-solid fa-arrow-left fa-shake icon';
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


// Heart icon

document.addEventListener('DOMContentLoaded', function () {
  const heartIcons = document.querySelectorAll('.heart-icon');

  heartIcons.forEach(heart => {
    heart.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      this.classList.toggle('active');

      // Toggle heart symbol
      if (this.classList.contains('active')) {
        this.textContent = '♥';
      } else {
        this.textContent = '♡';
      }
    });
  });
});

//Tiny-Slider
const tnslider1 = tns({
  container: '.slider1',
  fixedWidth: 166.74,
  loop: false,
  speed: 600,
  edgePadding: 10,
  nav: false,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: '#controls',
  prevButton: '.previous',
  nextButton: '.next',
  responsive: {
    450: { items: 1 },
    500: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 5 },
    1600: { items: 6 }
  },
});

// Second slider (Furniture Item Card)
const tnslider2 = tns({
  container: '.slider2',
  loop: false,
  speed: 600,
  edgePadding: 10,
  nav: false,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: '#controls2',
  prevButton: '.previous2',
  nextButton: '.next2',
  responsive: {
    450: { items: 1 },
    500: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 5 },
    1600: { items: 6 }
  }
});
const tnslider3 = tns({
  container: '.slider3',
  loop: false,
  speed: 600,
  edgePadding: 10,
  nav: false,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: '#controls3',
  prevButton: '.previous3',
  nextButton: '.next3',
  responsive: {
    450: { items: 1 },
    500: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 5 },
    1600: { items: 6 }
  }
});
const tnslider4 = tns({
  container: '.slider4',
  loop: false,
  speed: 600,
  edgePadding: 10,
  nav: false,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: '#controls4',
  prevButton: '.previous4',
  nextButton: '.next4',
  responsive: {
    450: { items: 1 },
    500: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 5 },
    1600: { items: 6 }
  }
});
const tnslider5 = tns({
  container: '.slider5',
  loop: false,
  speed: 600,
  edgePadding: 10,
  nav: false,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: '#controls5',
  prevButton: '.previous5',
  nextButton: '.next5',
  responsive: {
    450: { items: 1 },
    500: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 5 },
    1600: { items: 6 }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Get all tab items and furniture lists
  const tabItems = document.querySelectorAll('.top-prod-list-item');
  const sliderContainer = document.querySelectorAll('.slider-container');

  // Add click event listener to each tab
  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs
      tabItems.forEach(item => {
        item.classList.remove('list-active');
      });

      // Add active class to clicked tab
      this.classList.add('list-active');

      // Hide all furniture lists
      sliderContainer.forEach(item => {
        item.classList.remove('active');
        item.classList.add('hidden');
      });

      // Show the corresponding furniture list
      if (sliderContainer[index]) {
        sliderContainer[index].classList.remove('hidden');
        sliderContainer[index].classList.add('active');
      }
    });
  });
});
