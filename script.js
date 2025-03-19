// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Services Data
    const services = [
        {
            title: "Sports Car Transport Service in Delhi",
            description: "Transporting high-end sports cars requires special attention, secure carriers, and expert handling. Our specialized car carrier in Delhi ensures that your sports car is transported safely without any damage. We use enclosed car carriers to provide added protection against external elements and road debris. Additionally, our trained professionals ensure secure strapping and handling techniques to prevent any movement during transit."
        },
        {
            title: "Luxury Car Transport Service in Delhi",
            description: "Owning a luxury car means you need a trusted car movers in Delhi who can handle it with the care it deserves. Our enclosed carriers and expert logistics ensure that your luxury vehicle reaches its destination in perfect condition. Luxury vehicles require specialized handling, and our team is equipped with the latest technology to ensure smooth transportation, including hydraulic lifts, soft straps, and temperature-controlled carriers when needed."
        },
        {
            title: "Sedan Car Transport Service in Delhi",
            description: "Our sedan car transport service in Delhi provides a secure and economical way to transport your sedan to any location in India. Whether it’s a compact sedan or a full-sized vehicle, we use advanced loading techniques and premium packing materials to prevent any damage."
        },
        {
            title: "SUVs Car Transport Service in Delhi",
            description: "We offer car shifting services in Delhi for SUVs of all sizes. Our specialized carriers ensure that large vehicles are securely transported without any risk of damage. SUVs have a higher weight and size, which require heavy-duty carriers equipped with robust securing mechanisms to avoid any displacement during transit."
        },
        {
            title: "Damaged Car Transport Service in Delhi",
            description: "If your car has been involved in an accident and requires transport, we offer safe and affordable damaged car transport services in Delhi. We use flatbed trucks and tow trucks to safely transport damaged vehicles to repair centers, scrap yards, or any location of your choice."
        },
        {
            title: "Old Car Transport Service in Delhi",
            description: "Planning to move your old car? Our vehicle shifting company in Delhi provides reliable solutions for transporting used cars securely. Whether you are selling your old car to a buyer in another city or relocating it to a new destination, we ensure safe handling and timely delivery."
        },
        {
            title: "New Car Transport Service in Delhi",
            description: "We specialize in transporting brand-new vehicles for individuals and dealerships, ensuring timely and safe deliveries. Our auto shifting services in Delhi cater to automobile manufacturers, showrooms, and private owners looking to move their brand-new cars securely."
        },
        {
            title: "Bike Transport Service in Delhi",
            description: "Apart from cars, we also provide bike transport service in Delhi, ensuring secure and timely delivery of motorcycles. Our two-wheeler transport services include specialized bike carriers, padded restraints, and protective covers to prevent any scratches or damage."
        },
        {
            title: "Interstate Car Transport Services",
            description: "We offer interstate car transport services for those looking to move their vehicles from Delhi to any other state in India. Our team ensures compliance with inter-state transport regulations and provides insurance coverage for added protection."
        },
        // {
        //     title: "Domestic Car Transport Services",
        //     description: "Our domestic car transport services cover both local and long-distance moves, ensuring secure transportation anywhere in the country. Whether it’s a short-distance relocation within Delhi or a cross-country move, we provide tailored solutions to suit your needs."
        // },
    ];

    // Dynamically populate services
    const servicesGrid = document.querySelector('.services-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.setAttribute('data-aos', 'fade-up');
        serviceCard.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                pickup: document.getElementById('pickup').value,
                delivery: document.getElementById('delivery').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send this data to your server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your inquiry. We will contact you shortly!');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle (if you add a mobile menu)
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Add scroll-based animations for the header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // FAQ Functionality
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach(faq => {
        const questionContainer = faq.querySelector(".faq-question-container");
        questionContainer.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
});

// Helper function to validate phone numbers
function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

// Helper function to validate email addresses
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add form validation
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.required && !this.value) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }

        if (this.type === 'tel' && this.value && !validatePhone(this.value)) {
            this.classList.add('error');
        }

        if (this.type === 'email' && this.value && !validateEmail(this.value)) {
            this.classList.add('error');
        }
    });
});

// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.review-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        lazy: {
            loadPrevNext: true,
        },
    });
});

// To integrate with Google Reviews API
// Note: You'll need to set up Google Places API and get your API key
async function loadGoogleReviews() {
    // Replace with your Google Places API key and Place ID
    const apiKey = 'YOUR_API_KEY';
    const placeId = 'YOUR_PLACE_ID';
    
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`);
        const data = await response.json();
        
        if (data.result && data.result.reviews) {
            updateReviewSlides(data.result.reviews);
        }
    } catch (error) {
        console.error('Error loading Google reviews:', error);
    }
}

function updateReviewSlides(reviews) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    reviews.forEach(review => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="review-card">
                <div class="review-header">
                    <img src="${review.profile_photo_url || 'https://ui-avatars.com/api/?name=' + review.author_name}" alt="${review.author_name}" class="reviewer-image">
                    <div class="reviewer-info">
                        <h4>${review.author_name}</h4>
                        <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                    </div>
                </div>
                <p class="review-text">"${review.text}"</p>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });
    
    // Reinitialize Swiper after adding new slides
    swiper.update();
}

$(document).ready(function() {
    const faqs = document.querySelectorAll("[unique-script-id='w-w-dm-id'] .faq .faq-question-container");
  
    faqs.forEach(function(faq) {
      faq.addEventListener("click", function() {
        $(faq).closest(".faq").toggleClass("active");
      });
    });
  })


  // Footer JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('.footer a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile footer accordion for smaller screens
    if (window.innerWidth < 768) {
        const footerHeadings = document.querySelectorAll('.footer-column h3');
        
        footerHeadings.forEach(heading => {
            heading.addEventListener('click', function() {
                const column = this.parentElement;
                column.classList.toggle('active');
                
                const columnList = column.querySelector('ul');
                if (column.classList.contains('active')) {
                    columnList.style.maxHeight = columnList.scrollHeight + 'px';
                } else {
                    columnList.style.maxHeight = '0';
                }
            });
            
            // Initialize all lists as closed
            const columnList = heading.nextElementSibling;
            if (columnList && columnList.tagName === 'UL') {
                columnList.style.maxHeight = '0';
                columnList.style.overflow = 'hidden';
                columnList.style.transition = 'max-height 0.3s ease';
            }
        });
    }
    
    // Back to top button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Add this CSS for the back to top button
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #ff6600;
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .back-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            background-color: #e55c00;
            transform: translateY(-3px);
        }
    `;
    document.head.appendChild(style);
});








// About Us Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for header background
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            parallaxBg.style.transform = `scale(1.1) translateY(${scrollPosition * 0.05}px)`;
        });
    }
    
    // Animate stats counter when in viewport
    const statCounters = document.querySelectorAll('.stat-counter');
    const statsSection = document.querySelector('.stats-section');
    
    if (statsSection && statCounters.length) {
        let counted = false;
        
        function animateCounters() {
            if (counted) return;
            
            const sectionTop = statsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                counted = true;
                
                statCounters.forEach(counter => {
                    const target = parseInt(counter.closest('.stat-item').dataset.count);
                    let count = 0;
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps
                    
                    const updateCount = () => {
                        if (count < target) {
                            count += increment;
                            counter.textContent = Math.ceil(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCount();
                });
            }
        }
        
        window.addEventListener('scroll', animateCounters);
        animateCounters(); // Check on load
    }
    
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Check on load
    
    // Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.control-prev');
    const nextButton = document.querySelector('.control-next');
    
    if (testimonialSlides.length && indicators.length) {
        let currentSlide = 0;
        
        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        }
        
        function nextSlide() {
            let next = currentSlide + 1;
            if (next >= testimonialSlides.length) next = 0;
            showSlide(next);
        }
        
        function prevSlide() {
            let prev = currentSlide - 1;
            if (prev < 0) prev = testimonialSlides.length - 1;
            showSlide(prev);
        }
        
        // Auto slide every 5 seconds
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Reset interval on manual navigation
        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }
        
        // Event listeners
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
        });
    }
    
    // Team card flip on mobile
    const teamCards = document.querySelectorAll('.team-card');
    
    if (window.innerWidth < 768 && teamCards.length) {
        teamCards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('flipped');
                
                const cardFront = this.querySelector('.card-front');
                const cardBack = this.querySelector('.card-back');
                
                if (this.classList.contains('flipped')) {
                    cardFront.style.transform = 'rotateY(180deg)';
                    cardBack.style.transform = 'rotateY(0)';
                } else {
                    cardFront.style.transform = 'rotateY(0)';
                    cardBack.style.transform = 'rotateY(180deg)';
                }
            });
        });
    }
    
    // AOS initialization for animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});

// Service Areas Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Map pin interaction
    const mapPins = document.querySelectorAll('.map-pin');
    const areaRegions = document.querySelectorAll('.area-region');
    
    mapPins.forEach(pin => {
        pin.addEventListener('click', function() {
            const areaId = this.getAttribute('data-area').toLowerCase().replace(' ', '-');
            
            // Hide all regions
            areaRegions.forEach(region => {
                region.classList.remove('active');
            });
            
            // Show selected region
            const selectedRegion = document.getElementById(areaId);
            if (selectedRegion) {
                selectedRegion.classList.add('active');
            } else {
                // If region not found, show all areas
                document.getElementById('all-areas').classList.add('active');
            }
            
            // Highlight active pin
            mapPins.forEach(p => p.classList.remove('active-pin'));
            this.classList.add('active-pin');
            
            // Add animation to the pin
            this.classList.add('pin-pulse');
            setTimeout(() => {
                this.classList.remove('pin-pulse');
            }, 1000);
        });
    });
    
    // Add hover effect for map pins
    mapPins.forEach(pin => {
        pin.addEventListener('mouseenter', function() {
            const label = this.querySelector('.pin-label');
            if (label) {
                label.style.opacity = '1';
            }
        });
        
        pin.addEventListener('mouseleave', function() {
            const label = this.querySelector('.pin-label');
            if (label) {
                label.style.opacity = '0';
            }
        });
    });
    
    // Add smooth scrolling for area links
    const areaLinks = document.querySelectorAll('.area-column ul li a');
    
    areaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // You can add custom behavior here, like scrolling to a specific section
            // or showing more details about the area
            
            // For now, just add a visual feedback
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
    
    // Add search functionality (optional)
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search for an area...';
    searchInput.className = 'area-search';
    
    const areasList = document.querySelector('.areas-list');
    if (areasList) {
        areasList.insertBefore(searchInput, areasList.firstChild);
    }
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const allLinks = document.querySelectorAll('.area-column ul li a');
        
        allLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            const listItem = link.parentElement;
            
            if (text.includes(searchTerm)) {
                listItem.style.display = 'block';
            } else {
                listItem.style.display = 'none';
            }
        });
    });
    
    // Add CSS for the search input and animations
    const style = document.createElement('style');
    style.textContent = `
        .area-search {
            width: 100%;
            padding: 10px 15px;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            margin-bottom: 20px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s ease;
        }
        
        .area-search:focus {
            border-color: #ff6600;
        }
        
        .active-pin i {
            color: #0d2240;
        }
        
        .pin-pulse {
            animation: pulse 1s;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.3);
            }
            100% {
                transform: scale(1);
            }
        }
        
        .clicked {
            background-color: rgba(255, 102, 0, 0.1);
            color: #ff6600 !important;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize with all areas visible
    document.getElementById('all-areas').classList.add('active');
});


// FAQ Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = '0';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
    
    // FAQ Search Functionality
    const searchInput = document.getElementById('faqSearch');
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.innerHTML = '<i class="fas fa-search"></i><p>No matching questions found. Please try a different search term.</p>';
    
    const faqContainer = document.querySelector('.faq-container');
    faqContainer.parentNode.insertBefore(noResults, faqContainer.nextSibling);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let matchFound = false;
        
        faqItems.forEach(item => {
            const questionText = item.querySelector('.faq-question h3').textContent.toLowerCase();
            const answerText = item.querySelector('.faq-answer p').textContent.toLowerCase();
            
            // Reset highlights
            item.querySelector('.faq-question h3').innerHTML = item.querySelector('.faq-question h3').textContent;
            item.querySelector('.faq-answer p').innerHTML = item.querySelector('.faq-answer p').textContent;
            
            if (searchTerm.length > 2 && (questionText.includes(searchTerm) || answerText.includes(searchTerm))) {
                item.style.display = 'block';
                matchFound = true;
                
                // Highlight matching text
                if (questionText.includes(searchTerm)) {
                    const highlightedQuestion = item.querySelector('.faq-question h3').textContent.replace(
                        new RegExp(searchTerm, 'gi'),
                        match => `<span class="highlight">${match}</span>`
                    );
                    item.querySelector('.faq-question h3').innerHTML = highlightedQuestion;
                }
                
                if (answerText.includes(searchTerm)) {
                    const highlightedAnswer = item.querySelector('.faq-answer p').textContent.replace(
                        new RegExp(searchTerm, 'gi'),
                        match => `<span class="highlight">${match}</span>`
                    );
                    item.querySelector('.faq-answer p').innerHTML = highlightedAnswer;
                    
                    // Open the item to show the highlighted answer
                    item.classList.add('active');
                    item.querySelector('.faq-answer').style.maxHeight = item.querySelector('.faq-answer').scrollHeight + 'px';
                }
            } else if (searchTerm.length > 2) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
                matchFound = true;
            }
        });
        
        // Show/hide no results message
        if (!matchFound && searchTerm.length > 2) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    });
    
    // Open first FAQ by default
    if (faqItems.length > 0) {
        setTimeout(() => {
            faqItems[0].classList.add('active');
            const firstAnswer = faqItems[0].querySelector('.faq-answer');
            firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
        }, 500);
    }
    
    // Add animation for new FAQs
    faqItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Service URLs mapping
    const serviceUrls = {
      "Sports Car Transport Service in Delhi": "https://4wheelermover.com/sports-car-transportation/",
      "Luxury Car Transport Service in Delhi": "https://4wheelermover.com/luxury-car-transportation/",
      "Sedan Car Transport Service in Delhi": "https://4wheelermover.com/packers-and-movers/",
      "SUVs Car Transport Service in Delhi": "https://4wheelermover.com/suv-car-transportation/",
      "Damaged Car Transport Service in Delhi": "https://4wheelermover.com/damaged-car-transportation/",
      "Old Car Transport Service in Delhi": "https://4wheelermover.com/old-car-transportation/",
      "New Car Transport Service in Delhi": "https://4wheelermover.com/new-car-transportation/",
      "Bike Transport Service in Delhi": "https://4wheelermover.com/bike-transportation/",
      "Interstate Car Transport Services": "https://4wheelermover.com/packers-and-movers/",
    }
  
    // Services Data with URLs
    const services = [
      {
        title: "Sports Car Transport Service in Delhi",
        description:
          "Transporting high-end sports cars requires special attention, secure carriers, and expert handling. Our specialized car carrier in Delhi ensures that your sports car is transported safely without any damage. We use enclosed car carriers to provide added protection against external elements and road debris. Additionally, our trained professionals ensure secure strapping and handling techniques to prevent any movement during transit.",
        url: "https://4wheelermover.com/sports-car-transportation/",
      },
      {
        title: "Luxury Car Transport Service in Delhi",
        description:
          "Owning a luxury car means you need a trusted car movers in Delhi who can handle it with the care it deserves. Our enclosed carriers and expert logistics ensure that your luxury vehicle reaches its destination in perfect condition. Luxury vehicles require specialized handling, and our team is equipped with the latest technology to ensure smooth transportation, including hydraulic lifts, soft straps, and temperature-controlled carriers when needed.",
        url: "https://4wheelermover.com/luxury-car-transportation/",
      },
      {
        title: "Sedan Car Transport Service in Delhi",
        description:
          "Our sedan car transport service in Delhi provides a secure and economical way to transport your sedan to any location in India. Whether it's a compact sedan or a full-sized vehicle, we use advanced loading techniques and premium packing materials to prevent any damage.",
        url: "https://4wheelermover.com/packers-and-movers/",
      },
      {
        title: "SUVs Car Transport Service in Delhi",
        description:
          "We offer car shifting services in Delhi for SUVs of all sizes. Our specialized carriers ensure that large vehicles are securely transported without any risk of damage. SUVs have a higher weight and size, which require heavy-duty carriers equipped with robust securing mechanisms to avoid any displacement during transit.",
        url: "https://4wheelermover.com/suv-car-transportation/",
      },
      {
        title: "Damaged Car Transport Service in Delhi",
        description:
          "If your car has been involved in an accident and requires transport, we offer safe and affordable damaged car transport services in Delhi. We use flatbed trucks and tow trucks to safely transport damaged vehicles to repair centers, scrap yards, or any location of your choice.",
        url: "https://4wheelermover.com/damaged-car-transportation/",
      },
      {
        title: "Old Car Transport Service in Delhi",
        description:
          "Planning to move your old car? Our vehicle shifting company in Delhi provides reliable solutions for transporting used cars securely. Whether you are selling your old car to a buyer in another city or relocating it to a new destination, we ensure safe handling and timely delivery.",
        url: "https://4wheelermover.com/old-car-transportation/",
      },
      {
        title: "New Car Transport Service in Delhi",
        description:
          "We specialize in transporting brand-new vehicles for individuals and dealerships, ensuring timely and safe deliveries. Our auto shifting services in Delhi cater to automobile manufacturers, showrooms, and private owners looking to move their brand-new cars securely.",
        url: "https://4wheelermover.com/new-car-transportation/",
      },
      {
        title: "Bike Transport Service in Delhi",
        description:
          "Apart from cars, we also provide bike transport service in Delhi, ensuring secure and timely delivery of motorcycles. Our two-wheeler transport services include specialized bike carriers, padded restraints, and protective covers to prevent any scratches or damage.",
        url: "https://4wheelermover.com/bike-transportation/",
      },
      {
        title: "Interstate Car Transport Services",
        description:
          "We offer interstate car transport services for those looking to move their vehicles from Delhi to any other state in India. Our team ensures compliance with inter-state transport regulations and provides insurance coverage for added protection.",
        url: "https://4wheelermover.com/packers-and-movers/",
      },
    ]
  
    // Clear existing service cards
    const servicesGrid = document.querySelector(".services-grid")
    if (servicesGrid) {
      servicesGrid.innerHTML = ""
  
      // Dynamically populate services with clickable links
      services.forEach((service) => {
        const serviceCard = document.createElement("div")
        serviceCard.className = "service-card"
        serviceCard.setAttribute("data-aos", "fade-up")
        serviceCard.style.cursor = "pointer" // Add pointer cursor to indicate clickable
  
        // Add click event to the entire card
        serviceCard.addEventListener("click", () => {
          window.location.href = service.url
        })
  
        serviceCard.innerHTML = `
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="service-link">Read More <i class="fas fa-arrow-right"></i></div>
        `
  
        servicesGrid.appendChild(serviceCard)
      })
    }
  
    // Add CSS for the service cards
    const style = document.createElement("style")
    style.textContent = `
      .service-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
      
      .service-link {
        color: #ff6600;
        font-weight: 600;
        margin-top: 15px;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      
      .service-card:hover .service-link {
        opacity: 1;
        transform: translateY(0);
      }
    `
    document.head.appendChild(style)
  
    // Fix for FAQ functionality
    const faqItems = document.querySelectorAll(".faq-item")
  
    faqItems.forEach((item) => {
      const questionDiv = item.querySelector(".faq-question")
      const answerDiv = item.querySelector(".faq-answer")
      const toggleIcon = item.querySelector(".faq-toggle i")
  
      // Initialize all answers to be closed
      answerDiv.style.maxHeight = "0"
  
      questionDiv.addEventListener("click", () => {
        // Toggle active class
        const isActive = item.classList.toggle("active")
  
        // Update icon
        if (toggleIcon) {
          toggleIcon.className = isActive ? "fas fa-minus" : "fas fa-plus"
        }
  
        // Set max height based on active state
        if (isActive) {
          answerDiv.style.maxHeight = answerDiv.scrollHeight + "px"
        } else {
          answerDiv.style.maxHeight = "0"
        }
      })
    })
  })
  
  
