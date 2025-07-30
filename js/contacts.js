// Contact page functionality
function initContacts() {
  console.log("Contact page initialized");

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    // Form validation
    const validateField = (field, errorId) => {
      const value = field.value.trim();
      const errorElement = document.getElementById(errorId);

      if (!value) {
        errorElement.textContent = "This field is required";
        field.classList.add("error");
        return false;
      }

      if (field.type === "email" && !isValidEmail(value)) {
        errorElement.textContent = "Please enter a valid email address";
        field.classList.add("error");
        return false;
      }

      errorElement.textContent = "";
      field.classList.remove("error");
      return true;
    };

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Form submission
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      let isValid = true;

      // Validate all fields
      isValid = validateField(name, "name-error") && isValid;
      isValid = validateField(email, "email-error") && isValid;
      isValid = validateField(subject, "subject-error") && isValid;
      isValid = validateField(message, "message-error") && isValid;

      if (isValid) {
        // Show success message
        showMessage(
          "Thank you for your message! We will get back to you soon.",
          "success"
        );
        contactForm.reset();
      }
    });

    // Real-time validation
    const fields = ["name", "email", "subject", "message"];
    fields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      const errorId = `${fieldId}-error`;

      field.addEventListener("blur", () => {
        validateField(field, errorId);
      });

      field.addEventListener("input", () => {
        if (field.classList.contains("error")) {
          validateField(field, errorId);
        }
      });
    });
  }

  // Show message function
  function showMessage(text, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll(".message");
    existingMessages.forEach((msg) => msg.remove());

    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;

    // Add to the form container for better positioning
    const formSection = document.querySelector(".contact-form-section");
    if (formSection) {
      formSection.insertBefore(messageDiv, formSection.firstChild);
    } else {
      document.body.appendChild(messageDiv);
    }

    // Add animation
    messageDiv.style.opacity = "0";
    messageDiv.style.transform = "translateY(-20px)";

    setTimeout(() => {
      messageDiv.style.transition = "all 0.3s ease";
      messageDiv.style.opacity = "1";
      messageDiv.style.transform = "translateY(0)";
    }, 100);

    setTimeout(() => {
      messageDiv.style.opacity = "0";
      messageDiv.style.transform = "translateY(-20px)";
      setTimeout(() => {
        messageDiv.remove();
      }, 300);
    }, 5000);
  }

  // Add hover effects to contact items
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
      const icon = this.querySelector(".contact-icon");
      if (icon) {
        icon.style.transform = "scale(1.1)";
      }
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
      const icon = this.querySelector(".contact-icon");
      if (icon) {
        icon.style.transform = "scale(1)";
      }
    });
  });
}

// Initialize contact functionality
document.addEventListener("DOMContentLoaded", function () {
  initContacts();
});
