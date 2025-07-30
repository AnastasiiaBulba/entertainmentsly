// Footer component
function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer fade-in';
  
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Legal</h3>
          <div class="footer-links">
            <a href="./tarcat-cookies.html" class="footer-link">Cookie Policy</a>
            <a href="./tarcat-privacy.html" class="footer-link">Privacy Policy</a>
            <a href="./tarcat-disclaimer.html" class="footer-link">Disclaimer</a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Contact Info</h3>
          <div class="footer-contact">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-text">contact@entertainmentsly.com</div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-text">+61 2 9282 2929</div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-text">
                5 Marine Parade<br />
                Byron Bay NSW 2481<br />
                Australia
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          © <span class="copyright-year">2025</span>
          Entertainmentsly.com. All rights reserved.
        </div>
      </div>
    </div>
  `;
  
  return footer;
}

// Initialize footer
document.addEventListener('DOMContentLoaded', function() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.appendChild(createFooter());
  }
});
