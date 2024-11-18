// Theme toggle functionality with proper color scheme changes

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.classList.remove(currentTheme);
  html.classList.add(newTheme);

  // Save theme preference
  localStorage.setItem("theme", newTheme);

  // Force a repaint to ensure styles are applied
  document.body.style.display = "none";
  document.body.offsetHeight; // Trigger a reflow
  document.body.style.display = "";
}

// Load saved theme with proper initialization
function loadTheme() {
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  document.documentElement.classList.add(savedTheme);
}

// Initialize theme
loadTheme();

// Watch for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.toggle("dark", e.matches);
    }
  });

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// Form submission handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you would typically send this data to a server
    console.log("Form submitted:", { name, email, message });
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });
