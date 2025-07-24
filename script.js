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
  // Get all elements
  const tabItems = document.querySelectorAll('.top-prod-list-item');
  const sliderContainers = document.querySelectorAll('.slider-container');
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const selectedOption = document.getElementById('selectedOption');

  // Function to show content based on index
  function showContent(index) {
      // Hide all containers
      sliderContainers.forEach(container => {
          container.classList.remove('active');
          container.classList.add('hidden');
      });

      // Show selected container
      if (sliderContainers[index]) {
          sliderContainers[index].classList.remove('hidden');
          sliderContainers[index].classList.add('active');
      }
  }

  // Desktop tab functionality
  tabItems.forEach((tab, index) => {
      tab.addEventListener('click', function () {
          // Remove active class from all tabs
          tabItems.forEach(item => item.classList.remove('list-active'));
          
          // Add active class to clicked tab
          this.classList.add('list-active');
          
          // Show corresponding content
          showContent(index);

          // Update dropdown selection (for consistency)
          dropdownItems.forEach(item => item.classList.remove('active'));
          dropdownItems[index].classList.add('active');
          selectedOption.textContent = this.textContent;
      });
  });

  // Dropdown button click
  dropdownButton.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
      dropdownButton.classList.toggle('active');
  });

  // Dropdown item selection
  dropdownItems.forEach((item, index) => {
      item.addEventListener('click', function () {
          // Update selected option
          selectedOption.textContent = this.textContent;
          
          // Update active states
          dropdownItems.forEach(dropItem => dropItem.classList.remove('active'));
          this.classList.add('active');

          // Update desktop tabs (for consistency)
          tabItems.forEach(tab => tab.classList.remove('list-active'));
          tabItems[index].classList.add('list-active');
          
          // Show corresponding content
          showContent(index);
          
          // Close dropdown
          dropdownMenu.classList.remove('show');
          dropdownButton.classList.remove('active');
      });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
      if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.remove('show');
          dropdownButton.classList.remove('active');
      }
  });

  // Handle window resize to ensure proper state
  window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
          dropdownMenu.classList.remove('show');
          dropdownButton.classList.remove('active');
      }
  });
});