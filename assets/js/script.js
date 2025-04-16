// ==============================
// Theme Toggle
// ==============================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  const isDark = body.getAttribute("data-theme") === "dark";

  if (isDark) {
    body.removeAttribute("data-theme");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// ==============================
// Active Link Highlight on Scroll
// ==============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ==============================
// Form Validation (Optional)
// ==============================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // You can replace this with actual email sending logic later
    alert("Message sent successfully!");
    contactForm.reset();
  });
}

// ==============================
// Navbar Toggle for Mobile (Optional Feature)
// ==============================

// This is just a placeholder if you add a hamburger menu in the future
// You can implement a `.toggle-menu` button and show/hide nav ul
