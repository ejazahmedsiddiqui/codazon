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


// Heart icon

document.addEventListener('DOMContentLoaded', function() {
  const heartIcons = document.querySelectorAll('.heart-icon');
  
  heartIcons.forEach(heart => {
      heart.addEventListener('click', function(e) {
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
const tnslider = tns({
  container: '.slider',
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
    450: {
      items: 1,
    },
    500: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1600: {
      items: 6,
    },
  },
});

// Function to update button states
function updateButtonStates() {
  const info = tnslider.getInfo();
  const prevBtn = document.querySelector('.previous');
  const nextBtn = document.querySelector('.next');
  
  // Disable/enable previous button
  if (info.index === 0) {
    prevBtn.disabled = true;
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.remove('disabled');
  }
  
  // Disable/enable next button
  if (info.index >= info.slideCount - info.items) {
    nextBtn.disabled = true;
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
  }
}

// Listen to slider events
tnslider.events.on('indexChanged', updateButtonStates);

// Initial button state check
updateButtonStates();