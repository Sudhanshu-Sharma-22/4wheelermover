// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
    })

    // Services Data
    const services = [{
            title: "Sports Car Transport Service in Delhi",
            description: "Transporting high-end sports cars requires special attention, secure carriers, and expert handling. Our specialized car carrier in Delhi ensures that your sports car is transported safely without any damage. We use enclosed car carriers to provide added protection against external elements and road debris.",
            url: "https://4wheelermover.com/sports-car-transportation/",
        },
        {
            title: "Luxury Car Transport Service in Delhi",
            description: "Trust our expert car movers in Delhi to handle your luxury vehicle with the utmost care. Using enclosed carriers, hydraulic lifts, and soft straps, we ensure secure and smooth transportation, delivering your car safely to its destination.",
            url: "https://4wheelermover.com/luxury-car-transportation/",
        },
        {
            title: "Sedan Car Transport Service in Delhi",
            description: "Our sedan car transport service in Delhi provides a secure and economical way to transport your sedan to any location in India. Whether it's a compact sedan or a full-sized vehicle, we use advanced loading techniques and premium packing materials to prevent any damage.",
            url: "https://4wheelermover.com/packers-and-movers/",
        },
        {
            title: "SUVs Car Transport Service in Delhi",
            description: "We offer car shifting services in Delhi for SUVs of all sizes. Our specialized carriers ensure that large vehicles are securely transported without any risk of damage. SUVs have a higher weight and size, which require heavy-duty carriers equipped with robust securing mechanisms to avoid any displacement during transit.",
            url: "https://4wheelermover.com/suv-car-transportation/",
        },
        {
            title: "Damaged Car Transport Service in Delhi",
            description: "If your car has been involved in an accident and requires transport, we offer safe and affordable damaged car transport services in Delhi. We use flatbed trucks and tow trucks to safely transport damaged vehicles to repair centers, scrap yards, or any location of your choice.",
            url: "https://4wheelermover.com/damaged-car-transportation/",
        },
        {
            title: "Old Car Transport Service in Delhi",
            description: "Planning to move your old car? Our vehicle shifting company in Delhi provides reliable solutions for transporting used cars securely. Whether you are selling your old car to a buyer in another city or relocating it to a new destination, we ensure safe handling and timely delivery.",
            url: "https://4wheelermover.com/old-car-transportation/",
        },
        {
            title: "New Car Transport Service in Delhi",
            description: "We specialize in transporting brand-new vehicles for individuals and dealerships, ensuring timely and safe deliveries. Our auto shifting services in Delhi cater to automobile manufacturers, showrooms, and private owners looking to move their brand-new cars securely.",
            url: "https://4wheelermover.com/new-car-transportation/",
        },
        {
            title: "Bike Transport Service in Delhi",
            description: "Apart from cars, we also provide bike transport service in Delhi, ensuring secure and timely delivery of motorcycles. Our two-wheeler transport services include specialized bike carriers, padded restraints, and protective covers to prevent any scratches or damage.",
            url: "https://4wheelermover.com/bike-transportation/",
        },
        {
            title: "Interstate Car Transport Services",
            description: "We offer interstate car transport services for those looking to move their vehicles from Delhi to any other state in India. Our team ensures compliance with inter-state transport regulations and provides insurance coverage for added protection.",
            url: "https://4wheelermover.com/packers-and-movers/",
        },
    ]

    // Dynamically populate services
    const servicesGrid = document.querySelector(".services-grid")
    if (servicesGrid) {
        services.forEach((service) => {
            const serviceCard = document.createElement("div")
            serviceCard.className = "service-card"
            serviceCard.setAttribute("data-aos", "fade-up")
            serviceCard.style.cursor = "pointer"

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

    // Form submission handling
    //   const contactForm = document.querySelector(".contact-form")
    //   if (contactForm) {
    //     contactForm.addEventListener("submit", (e) => {
    //       e.preventDefault()

    //       // Show success message
    //       alert("Thank you for your inquiry. We will contact you shortly!")

    //       // Reset form
    //       contactForm.reset()
    //     })
    //   }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })

    // Add scroll-based animations for the header
    const header = document.querySelector("header")
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                header.classList.add("scrolled")
            } else {
                header.classList.remove("scrolled")
            }
        })
    }

    // FAQ Functionality
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



    // Parallax effect for about header background
    const parallaxBg = document.querySelector(".parallax-bg")
    if (parallaxBg) {
        window.addEventListener("scroll", () => {
            const scrollPosition = window.pageYOffset
            parallaxBg.style.transform = `scale(1.1) translateY(${scrollPosition * 0.05}px)`
        })
    }

    // Back to top button
    const backToTopButton = document.createElement("button")
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
    backToTopButton.className = "back-to-top"
    document.body.appendChild(backToTopButton)

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })

    // Show/hide back to top button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add("show")
        } else {
            backToTopButton.classList.remove("show")
        }
    })

    //CSS for the back to top button
    const style = document.createElement("style")
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
    `
    document.head.appendChild(style)
})




//connectiong front end to backend

// document.querySelector('.quick-quote-form').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const formData = {
//       name: e.target.querySelector('input[type="text"]').value,
//       phone: e.target.querySelector('input[type="tel"]').value,
//       email: e.target.querySelector('input[type="email"]').value,
//       fromLocation: e.target.querySelectorAll('input[type="text"]')[3].value,
//       toLocation: e.target.querySelectorAll('input[type="text"]')[4].value,
//       serviceType: e.target.querySelector('select').value
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/inquiry', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert('Thank you for your inquiry! We will contact you shortly.');
//         e.target.reset();
//       } else {
//         alert('There was an error submitting your form. Please try again.');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       alert('There was an error submitting your form. Please try again.');
//     }
//   });

//   document.querySelector('.contact-form').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const formData = {
//       name: `${e.target.querySelectorAll('input[type="text"]')[0].value} ${e.target.querySelectorAll('input[type="text"]')[1].value}`,
//       phone: e.target.querySelector('input[type="tel"]').value,
//       email: e.target.querySelector('input[type="email"]').value,
//       vehicleType: e.target.querySelector('select').value,
//       vehicleModel: e.target.querySelectorAll('input[type="text"]')[2].value,
//       message: e.target.querySelector('textarea').value
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/inquiry', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert('Thank you for contacting us! We will get back to you soon.');
//         e.target.reset();
//       } else {
//         alert('There was an error submitting your form. Please try again.');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       alert('There was an error submitting your form. Please try again.');
//     }
//   });

// Hamburger
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-nav');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('testimonialsSlider');
    const items = slider.querySelectorAll('.testimonial-item');
    function cloneItems() {
        const cloneCount = Math.min(3, items.length);

        for (let i = 0; i < cloneCount; i++) {
            const clone = items[i].cloneNode(true);
            slider.appendChild(clone);
        }
    }

    cloneItems();
    function calculateWidth() {
        const originalItemsCount = items.length;
        const itemWidth = items[0].offsetWidth;
        return itemWidth * originalItemsCount;
    }
    function startAnimation() {
        const totalWidth = calculateWidth();
        slider.style.transition = 'transform 0s';
        slider.style.transform = 'translateX(0)';

        setTimeout(() => {
            slider.style.transition = `transform ${totalWidth / 50}s linear`;
            slider.style.transform = `translateX(-${totalWidth}px)`;
        }, 100);
    }
    function handleTransitionEnd() {
        slider.style.transition = 'transform 0s';
        slider.style.transform = 'translateX(0)';
        setTimeout(startAnimation, 100);
    }

    slider.addEventListener('transitionend', handleTransitionEnd);
    startAnimation();
    const viewAllButton = document.querySelector('.view-all-button');
    viewAllButton.addEventListener('click', function () {
        alert('Viewing all reviews');
    });
});



//getting email response

// (function () {
//     emailjs.init("S2C9mPvHb9G6XkauZ");
// })();


// For the inquiry form (inquiry form function)
// function sendEmail(e) {
//     e.preventDefault();
//     const form = e.target;
//     emailjs.sendForm('service_y24j8ac', 'template_vllr36q', form)
//         .then(function (response) {
//             alert('Your inquiry has been submitted successfully!');
//             form.reset();
//         }, function (error) {
//             alert('Submission failed. Please try again or contact us directly.');
//         });
// }

// For the quick quote form (hero section form function)
// function sendQuickQuote(e) {
//     e.preventDefault();
//     const form = e.target;
//     emailjs.sendForm('service_y24j8ac', 'template_xz6oxpw', form)
//         .then(function (response) {
//             alert('Your quote request has been submitted! We\'ll contact you shortly.');
//             form.reset();
//         }, function (error) {
//             alert('Request failed. Please try again or call us directly.');
//         });
// }



// using resend 

// async function sendEmail(to, subject, html) {
//     try {
//       const { data, error } = await resend.emails.send({
//         from: 'sudhanshu.sharma.work.22@gmail.com',
//         to: to,
//         subject: subject,
//         html: html,
//       });

//       if (error) {
//         console.error('Error sending email:', error);
//         return { success: false, error: error };
//       }

//       console.log('Email sent successfully:', data);
//       return { success: true, data: data };
//     } catch (error) {
//       console.error('Error during email send:', error);
//       return { success: false, error: error };
//     }
//   }

//backend
//   async function sendEmail(event) {
//     event.preventDefault();

//     const form = event.target.closest("form");
//     const formData = new FormData(form);

//     const payload = {
//         first_name: formData.get("first_name"),
//         last_name: formData.get("last_name"),
//         phone: formData.get("phone"),
//         email: formData.get("email"),
//         vehicle_type: formData.get("vehicle_type"),
//         vehicle_model: formData.get("vehicle_model"),
//         message: formData.get("message"),
//     };

//     try {
//         const response = await fetch("", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(payload),
//         });

//         const data = await response.json();
//         alert("✅ Form submitted successfully!");
//         form.reset();
//     } catch (error) {
//         alert("❌ Failed to send email.");
//         console.error("Error:", error);
//     }
// }


// async function sendEmail(event) {
//     event.preventDefault();

//     const form = event.target.closest("form");
//     const formData = new FormData(form);

//     try {
//         const response = await fetch("https://infotomail.onrender.com/submit", {
//             method: "POST",
//             body: formData, // important: no headers needed for FormData
//         });

//         const result = await response.json();

//         if (response.ok) {
//             alert("✅ Form submitted successfully!");
//             form.reset();
//         } else {
//             alert("❌ Submission failed: " + result.message);
//         }
//     } catch (error) {
//         console.error("Submission error:", error);
//         alert("❌ Something went wrong while submitting the form.");
//     }
// }


// async function sendEmail(event) {
//     event.preventDefault();

//     const form = event.target.closest("form");
//     const formData = new FormData(form);

//     // Combine first + last name
//     const fullName = formData.get("first_name") + " " + formData.get("last_name");
//     formData.set("name", fullName); // required by FastAPI
//     formData.delete("first_name");
//     formData.delete("last_name");

//     try {
//         const response = await fetch("https://infotomail.onrender.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const result = await response.json();

//         if (response.ok) {
//             alert(":white_check_mark: Form submitted successfully!");
//             form.reset();
//         } else {
//             alert(":x: Submission failed: " + result.message);
//         }
//     } catch (error) {
//         console.error("Submission error:", error);
//         alert(":x: Something went wrong while submitting the form.");
//     }
// }


async function sendEmail(event) {
    event.preventDefault();

    const form = event.target.closest("form");
    const formData = new FormData(form);

    // Extract fields
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const vehicleType = formData.get("vehicle_type");
    const vehicleModel = formData.get("vehicle_model");
    const userMessage = formData.get("message");

    const fullName = `${firstName} ${lastName}`;

    // Create a formatted message body
    const combinedMessage = `
Phone: ${phone}
Vehicle Type: ${vehicleType}
Vehicle Model: ${vehicleModel}

Message:
${userMessage}
`;

    // Prepare final data
    const finalData = new FormData();
    finalData.append("name", fullName);
    finalData.append("email", email);
    finalData.append("message", combinedMessage);

    try {
        const response = await fetch("https://infotomail.onrender.com/submit", {
            method: "POST",
            body: finalData
        });

        const result = await response.json();

        if (response.ok) {
            alert("✅ Form submitted successfully!");
            form.reset();
        } else {
            alert("❌ Submission failed: " + result.message);
        }
    } catch (error) {
        console.error("Submission error:", error);
        alert("❌ Something went wrong while submitting the form.");
    }
}

//hero form 

async function sendQuickQuote(event) {
    event.preventDefault();

    const form = event.target.closest("form");
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const shiftingFrom = formData.get("shifting_from");
    const shiftingTo = formData.get("shifting_to");
    const serviceType = formData.get("service_type");

    // Combine the fields into a message (excluding name & email)
    const message = `
Mobile No.: ${mobile}
Shifting From: ${shiftingFrom}
Shifting To: ${shiftingTo}
Service Type: ${serviceType}
    `;

    // Prepare payload for FastAPI
    const finalData = new FormData();
    finalData.append("name", name);
    finalData.append("email", email);
    finalData.append("message", message);

    try {
        const response = await fetch("https://infotomail.onrender.com/submit", {
            method: "POST",
            body: finalData
        });

        const result = await response.json();

        if (response.ok) {
            alert("✅ Quick quote submitted successfully!");
            form.reset();
        } else {
            alert("❌ Submission failed: " + result.message);
        }
    } catch (error) {
        console.error("Submission error:", error);
        alert("❌ Something went wrong while submitting the quick quote.");
    }
}
