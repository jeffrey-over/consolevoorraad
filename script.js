document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let isAnimating = false;
  
    const updateSlider = (index) => {
      if (isAnimating) return;
      isAnimating = true;
  
      // Update slides
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('hidden');
          slide.classList.add('animate-slideIn');
        } else {
          slide.classList.add('hidden');
          slide.classList.remove('animate-slideIn');
        }
      });
  
      // Update dots
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active', 'bg-indigo-500');
          dot.classList.remove('bg-gray-700');
        } else {
          dot.classList.remove('active', 'bg-indigo-500');
          dot.classList.add('bg-gray-700');
        }
      });
  
      currentSlide = index;
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    };
  
    // Auto advance
    const autoAdvance = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      updateSlider(nextSlide);
    }, 5000);
  
    // Navigation buttons
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
  
    prevButton.addEventListener('click', () => {
      clearInterval(autoAdvance);
      const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider(prevSlide);
    });
  
    nextButton.addEventListener('click', () => {
      clearInterval(autoAdvance);
      const nextSlide = (currentSlide + 1) % slides.length;
      updateSlider(nextSlide);
    });
  
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(autoAdvance);
        updateSlider(index);
      });
    });
  });