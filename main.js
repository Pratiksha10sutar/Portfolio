// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Scroll Animations =====
const elements = document.querySelectorAll(".reveal");

function checkReveal() {
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", checkReveal);

// Run once on load
checkReveal();

// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });
}
