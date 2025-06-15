document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Scroll animation
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.classList.add("visible")
        }
      })
    }
  
    // Run on load
    animateOnScroll()
  
    // Run on scroll
    window.addEventListener("scroll", animateOnScroll)
  
    // Form submission
    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const name = document.getElementById("name").value
        const phone = document.getElementById("phone").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
  
        if (!name || !phone || !email || !message) {
          alert("Please fill in all fields")
          return
        }
  
        alert("Thank you for your message! We will contact you shortly.")
  
        contactForm.reset()
      })
    }
  
    // Button hover effects
    const buttons = document.querySelectorAll(".button")
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)"
      })
  
      button.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)"
      })
  
      button.addEventListener("mousedown", function () {
        this.style.transform = "scale(0.95)"
      })
  
      button.addEventListener("mouseup", function () {
        this.style.transform = "scale(1.05)"
      })
    })
  
    // Service card hover effects
    const serviceCards = document.querySelectorAll(".service-card")
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)"
        this.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
        this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)"
      })
    })
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          })
        }
      })
    })
  })
  

  async function sendQuickQuote(event) {
    event.preventDefault();

    const form = event.target.closest("form");
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const userMessage = formData.get("message");

    // Combine the fields into a message (excluding name & email)
    const message = `
Name : ${name}
Email : ${email}
Mobile No.: ${mobile}
Message : ${userMessage}
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
            alert("✅ We Will Contact You Soon!");
            form.reset();
        } else {
            alert("❌ Submission failed: " + result.message);
        }
    } catch (error) {
        console.error("Submission error:", error);
        alert("❌ Something went wrong while submitting the quote.");
    }
}
