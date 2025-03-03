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
        {
            title: "Domestic Car Transport Services",
            description: "Our domestic car transport services cover both local and long-distance moves, ensuring secure transportation anywhere in the country. Whether it’s a short-distance relocation within Delhi or a cross-country move, we provide tailored solutions to suit your needs."
        },
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
