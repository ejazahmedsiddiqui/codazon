 // Menu toggle functionality
        function toggleMenus() {
            const menuA = document.getElementById('menuA');
            const menuB = document.getElementById('menuB');
            const toggleBtn = document.querySelector('.menu-btn');
            const icon = toggleBtn.querySelector('.icon');
            
            if (menuA.classList.contains('hidden')) {
                // Show menu A, hide menu B
                menuA.classList.remove('hidden');
                menuB.classList.add('hidden');
                icon.className = 'fa-solid fa-arrow-right icon';
                toggleBtn.setAttribute('aria-label', 'Switch to secondary menu');
            } else {
                // Show menu B, hide menu A
                menuA.classList.add('hidden');
                menuB.classList.remove('hidden');
                icon.className = 'fa-solid fa-arrow-left icon';
                toggleBtn.setAttribute('aria-label', 'Switch to main menu');
            }
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const activeMenu = document.querySelector('.nav-menu:not(.hidden)');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            
            if (activeMenu.classList.contains('active')) {
                activeMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
            } else {
                activeMenu.classList.add('active');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-times"></i>';
                mobileMenuBtn.setAttribute('aria-label', 'Close mobile menu');
            }
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    const activeMenu = document.querySelector('.nav-menu.active');
                    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                    
                    if (activeMenu) {
                        activeMenu.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                        mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
                    }
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const navbar = document.querySelector('.navbar');
            const activeMenu = document.querySelector('.nav-menu.active');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            
            if (window.innerWidth <= 768 && activeMenu && !navbar.contains(event.target)) {
                activeMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
            }
        });

        // Keyboard navigation support
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const activeMenu = document.querySelector('.nav-menu.active');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                
                if (activeMenu && window.innerWidth <= 768) {
                    activeMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
                    mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
                    mobileMenuBtn.focus();
                }
            }
        });