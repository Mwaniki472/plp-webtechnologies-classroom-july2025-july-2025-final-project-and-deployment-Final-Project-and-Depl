// Navbar highlight active page
const links = document.querySelectorAll(".navbar a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
// Smooth form submission (demo only)
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for contacting Muwa Blooms! We'll get back to you soon.");
    form.reset();
  });
}