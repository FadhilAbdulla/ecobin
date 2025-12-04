document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Animate hamburger icon
    const icon = hamburger.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Close mobile menu when a nav link is clicked (for better UX)
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  if (!nav || !hamburger) return;

  const isNavLink = e.target.closest(".nav-links a");
  if (isNavLink && nav.classList.contains("active")) {
    nav.classList.remove("active");
    const icon = hamburger.querySelector("i");
    if (icon) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  }
});

// Contact form submit: build a friendly sentence email body and subject and open mail client
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const service = form.querySelector("#service")?.value || "Service";
    const name = form.querySelector("#name")?.value || "";
    const email = form.querySelector("#email")?.value || "";
    const phone = form.querySelector("#phone")?.value || "";
    const notes = form.querySelector("#notes")?.value || "";

    const subject = `Quote Request from ${name || "a client"} - ${service}`;

    // Build a natural-sounding paragraph
    let body = `Hello Ecobin team,%0D%0A%0D%0A`;
    body += `My name is ${
      name || "N/A"
    }. I would like to request a quote for ${service}. `;
    body += `You can contact me at ${phone || "N/A"} or via email at ${
      email || "N/A"
    }.`;
    if (notes) {
      body += `%0D%0A%0D%0AAdditional details: ${notes}`;
    }
    body += `%0D%0A%0D%0AThank you,%0D%0A${name || ""}`;

    const mailto = `mailto:sales@ecobinuae.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    // Open user's mail client
    window.location.href = mailto;
  });
});
