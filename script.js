// Contact form submission (fake for now)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
  this.reset();
});

// Scroll animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    if (scrollY + window.innerHeight > section.offsetTop + 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Set initial styles for animation
sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "0.6s ease-in-out";
});
