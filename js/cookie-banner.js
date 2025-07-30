// Cookie Banner functionality
function initCookieBanner() {
  // Check if banner already exists
  if (document.getElementById("cookie-banner")) {
    return;
  }

  const cookieBanner = document.createElement("div");
  cookieBanner.className = "cookie-banner";
  cookieBanner.id = "cookie-banner";

  cookieBanner.innerHTML = `
    <div class="cookie-banner-content">
      <div class="cookie-text">
        <p>
          We use cookies to enhance your gaming experience. By continuing to use our site, you agree to our use of cookies.
          <a href="./tarcat-cookies.html" target="_blank">Learn more</a>
        </p>
      </div>
      <div class="cookie-buttons">
        <button class="cookie-btn accept" aria-label="Accept cookies">Accept</button>
        <a href="./tarcat-cookies.html" class="cookie-btn learn-more" aria-label="Learn more about cookies">Learn More</a>
      </div>
    </div>
  `;

  // Check if user has already accepted cookies
  if (!localStorage.getItem("cookiesAccepted")) {
    document.body.appendChild(cookieBanner);

    // Show the banner after a short delay
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 1000);

    // Add event listeners
    const acceptBtn = cookieBanner.querySelector(".accept");
    const learnMoreBtn = cookieBanner.querySelector(".learn-more");

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.classList.remove("show");
      setTimeout(() => {
        cookieBanner.remove();
      }, 500);
    });

    learnMoreBtn.addEventListener("click", function () {
      // Link will handle navigation
    });
  }
}

// Initialize cookie banner
document.addEventListener("DOMContentLoaded", function () {
  initCookieBanner();
});
