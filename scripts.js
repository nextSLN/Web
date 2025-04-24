// Soline Website JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and effects
    initGlowEffects();
    initFAQAccordion();
    initScrollEffects();
    initMobileMenu();
    initTypingEffect();
    initValidatorDemo();
});

// Create glowing background effects
function initGlowEffects() {
    const glowCount = 5;
    const container = document.querySelector('body');
    
    for (let i = 0; i < glowCount; i++) {
        const glowElement = document.createElement('div');
        glowElement.classList.add('bg-glow');
        
        // Random positioning
        glowElement.style.left = `${Math.random() * 100}%`;
        glowElement.style.top = `${Math.random() * 100}%`;
        
        // Random size variation
        const size = 200 + Math.random() * 200;
        glowElement.style.width = `${size}px`;
        glowElement.style.height = `${size}px`;
        
        container.appendChild(glowElement);
    }
}

// Handle FAQ accordion functionality
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('#faq .bg-gray-900');
    
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('.mt-4');
        const icon = item.querySelector('i.fas');
        
        // Initially hide all but the first FAQ answer
        if (item !== faqItems[0]) {
            content.style.display = 'none';
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
        
        button.addEventListener('click', () => {
            // Toggle current item
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                content.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}

// Add scroll-based animations
function initScrollEffects() {
    // Add class to feature cards for animation
    const featureCards = document.querySelectorAll('#features .relative.group');
    featureCards.forEach(card => {
        card.classList.add('feature-card');
    });
    
    // Animate elements when they come into view
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Add floating animation to hero image
    const heroImage = document.querySelector('.hidden.md\\:block');
    if (heroImage) {
        heroImage.classList.add('floating');
    }
    
    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Apply parallax to hero section
        const heroSection = document.querySelector('.relative.overflow-hidden');
        if (heroSection) {
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
}

// Handle mobile menu
function initMobileMenu() {
    // Create mobile menu button if it doesn't exist
    const nav = document.querySelector('nav .max-w-7xl');
    const mobileMenuExists = document.querySelector('.mobile-menu-button');
    
    if (!mobileMenuExists) {
        // Create mobile menu button
        const mobileButton = document.createElement('div');
        mobileButton.classList.add('md:hidden', 'flex', 'items-center', 'mobile-menu-button');
        mobileButton.innerHTML = `
            <button class="text-gray-300 hover:text-white focus:outline-none">
                <i class="fas fa-bars text-xl"></i>
            </button>
        `;
        
        // Create mobile menu container
        const mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu', 'fixed', 'top-16', 'left-0', 'w-full', 'h-screen', 'bg-dark', 'z-40', 'p-4');
        mobileMenu.innerHTML = `
            <div class="flex flex-col space-y-4 px-2 pt-4 pb-6">
                <a href="#" class="text-white hover:text-primary px-3 py-2 text-base font-medium">Home</a>
                <a href="#features" class="text-gray-300 hover:text-primary px-3 py-2 text-base font-medium">Features</a>
                <a href="#pricing" class="text-gray-300 hover:text-primary px-3 py-2 text-base font-medium">Pricing</a>
                <a href="#faq" class="text-gray-300 hover:text-primary px-3 py-2 text-base font-medium">FAQ</a>
                <div class="pt-4">
                    <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80">
                        Dashboard
                    </a>
                </div>
            </div>
        `;
        
        // Add button to navbar
        nav.appendChild(mobileButton);
        document.body.appendChild(mobileMenu);
        
        // Toggle mobile menu on button click
        mobileButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            
            const icon = mobileButton.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                const icon = mobileButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Add typing effect to hero text
function initTypingEffect() {
    const heroTitle = document.querySelector('.text-4xl.font-extrabold');
    if (heroTitle) {
        const firstSpan = heroTitle.querySelector('span:first-child');
        if (firstSpan) {
            firstSpan.classList.add('typing');
            firstSpan.style.width = '100%';
        }
    }
}

// Animate the validator demo
function initValidatorDemo() {
    const validatorDemo = document.querySelector('.bg-gray-900 .space-y-4');
    
    if (validatorDemo) {
        // Services to validate in the demo
        const services = [
            { name: 'Netflix', status: 'Valid', color: 'text-green-400', plan: 'Premium 4K', planColor: 'text-blue-400' },
            { name: 'Spotify', status: 'Valid', color: 'text-green-400', plan: 'Family Plan', planColor: 'text-blue-400' },
            { name: 'Disney+', status: 'Invalid', color: 'text-red-400', plan: '-', planColor: 'text-gray-500' },
            { name: 'Amazon Prime', status: 'Valid', color: 'text-green-400', plan: 'Annual Plan', planColor: 'text-blue-400' },
            { name: 'Hulu', status: 'Processing', color: 'text-yellow-400', plan: '...', planColor: 'text-yellow-400' },
            { name: 'HBO Max', status: 'Valid', color: 'text-green-400', plan: 'Ad-Free', planColor: 'text-blue-400' },
            { name: 'YouTube Premium', status: 'Invalid', color: 'text-red-400', plan: '-', planColor: 'text-gray-500' },
            { name: 'Paramount+', status: 'Valid', color: 'text-green-400', plan: 'Essential', planColor: 'text-blue-400' },
            { name: 'Apple TV+', status: 'Valid', color: 'text-green-400', plan: 'Monthly', planColor: 'text-blue-400' },
            { name: 'Crunchyroll', status: 'Valid', color: 'text-green-400', plan: 'Premium', planColor: 'text-blue-400' }
        ];
        
        // Current index to display
        let currentIndex = 0;
        
        // Update the validator display every few seconds
        setInterval(() => {
            const resultsContainer = validatorDemo.querySelector('.bg-gray-800:last-child .grid');
            if (resultsContainer) {
                // Clear current results
                resultsContainer.innerHTML = '';
                
                // Display 3 services at a time
                for (let i = 0; i < 3; i++) {
                    const serviceIndex = (currentIndex + i) % services.length;
                    const service = services[serviceIndex];
                    
                    // Add service name
                    const nameElement = document.createElement('div');
                    nameElement.classList.add('text-gray-400');
                    nameElement.textContent = `${service.name}:`;
                    resultsContainer.appendChild(nameElement);
                    
                    // Add service status
                    const statusElement = document.createElement('div');
                    statusElement.classList.add(service.color);
                    statusElement.textContent = service.status;
                    resultsContainer.appendChild(statusElement);
                    
                    // Add plan info
                    const planElement = document.createElement('div');
                    planElement.classList.add(service.planColor);
                    planElement.textContent = service.plan;
                    resultsContainer.appendChild(planElement);
                }
                
                // Move to next set of services
                currentIndex = (currentIndex + 1) % services.length;
            }
        }, 3000);
    }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Create interactive pricing slider (if needed)
function initPricingSlider() {
    const slider = document.getElementById('usage-slider');
    if (slider) {
        slider.addEventListener('input', function() {
            // Update pricing based on slider value
            const value = this.value;
            const basicPrice = document.getElementById('basic-price');
            const proPrice = document.getElementById('pro-price');
            const enterprisePrice = document.getElementById('enterprise-price');
            
            // Calculate new prices based on usage
            if (basicPrice) basicPrice.textContent = `$${(9.99 + (value * 0.1)).toFixed(2)}`;
            if (proPrice) proPrice.textContent = `$${(24.99 + (value * 0.2)).toFixed(2)}`;
            if (enterprisePrice) enterprisePrice.textContent = `$${(99.99 + (value * 0.5)).toFixed(2)}`;
        });
    }
} 