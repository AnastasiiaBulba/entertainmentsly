// Header component
function createHeader() {
  const header = document.createElement("header");
  header.className = "header fade-in";

  header.innerHTML = `
    <div class="header-container">
      <div class="header-content">
        <nav class="nav-menu">
          <ul class="nav-list">
            <li><a href="./" class="nav-link">Home</a></li>
            <li><a href="./tarcat-news.html" class="nav-link">News</a></li>
            <li><a href="./tarcat-contacts.html" class="nav-link">Support</a></li>
          </ul>
        </nav>
        
        <div class="logo">
          <a href="./" class="logo-link">
            <span>Entertainmentsly.com</span>
          </a>
        </div>
        
        <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
    
    <div class="mobile-menu">
      <div class="mobile-menu-content">
        <ul class="mobile-menu-list">
          <li><a href="./" class="mobile-menu-link">Home</a></li>
          <li><a href="./tarcat-news.html" class="mobile-menu-link">News</a></li>
          <li><a href="./tarcat-contacts.html" class="mobile-menu-link">Support</a></li>
        </ul>
      </div>
    </div>
  `;

  return header;
}

// Initialize header
document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    headerContainer.appendChild(createHeader());

    // Mobile menu toggle
    const mobileToggle = headerContainer.querySelector(".mobile-menu-toggle");
    const mobileMenu = headerContainer.querySelector(".mobile-menu");

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        mobileToggle.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll(".mobile-menu-link");
      mobileLinks.forEach((link) => {
        link.addEventListener("click", function () {
          mobileMenu.classList.remove("active");
          mobileToggle.classList.remove("active");
        });
      });
    }
  }
});
