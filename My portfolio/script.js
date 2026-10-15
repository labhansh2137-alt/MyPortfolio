// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Automatically update the footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Demo contact form.
// This does not send email yet. It displays a success message.
// To receive real messages, connect the form to Formspree, Netlify Forms,
// EmailJS, or your own backend later.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent =
    "Thanks! Your message has been prepared. Connect this form to a form service to receive real submissions.";

  contactForm.reset();
});
