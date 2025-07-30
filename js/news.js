// News page functionality
function initNews() {
  console.log("News page initialized");
  
  // Toggle read more functionality
  window.toggleReadMore = function(id) {
    const card = document.querySelector(`[data-id="${id}"]`);
    const excerpt = card.querySelector('.news-card-excerpt');
    const fullText = card.querySelector('.news-card-full-text');
    const button = card.querySelector('.read-more-btn');
    
    if (fullText.style.display === 'block') {
      fullText.style.display = 'none';
      excerpt.style.display = 'block';
      button.textContent = 'Read more';
    } else {
      fullText.style.display = 'block';
      excerpt.style.display = 'none';
      button.textContent = 'Read less';
    }
  };
  
  // Add hover effects to news cards
  const newsCards = document.querySelectorAll('.news-card');
  newsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 25px rgba(255, 107, 53, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'var(--shadow-md)';
    });
  });
  
  // Add animation to news images
  const newsImages = document.querySelectorAll('.news-card-image img');
  newsImages.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
      this.style.transform = 'scale(1)';
    });
  });
}

// Initialize news functionality
document.addEventListener('DOMContentLoaded', function() {
  initNews();
}); 