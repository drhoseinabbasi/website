// =========================================================
// Hero slider (simple crossfade autoplay carousel)
// =========================================================
(function initSlider() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.slide'));
  const dots = Array.from(slider.querySelectorAll('.dot'));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY_MS = 5000;

  function goToSlide(index) {
    slides[currentIndex].classList.remove('is-active');
    slides[currentIndex].setAttribute('aria-hidden', 'true');
    dots[currentIndex].classList.remove('is-active');
    dots[currentIndex].setAttribute('aria-selected', 'false');

    currentIndex = index;

    slides[currentIndex].classList.add('is-active');
    slides[currentIndex].setAttribute('aria-hidden', 'false');
    dots[currentIndex].classList.add('is-active');
    dots[currentIndex].setAttribute('aria-selected', 'true');
  }

  function goToNextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  }

  function startAutoplay() {
    if (prefersReducedMotion) return; // don't auto-animate for users who asked for less motion
    stopAutoplay();
    autoplayTimer = window.setInterval(goToNextSlide, AUTOPLAY_DELAY_MS);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      startAutoplay(); // reset the timer after a manual interaction
    });
  });

  // Pause autoplay while the user's pointer is over the slider
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
})();

// =========================================================
// Back-to-top button visibility + click handler
// =========================================================
(function initBackToTop() {
  const button = document.getElementById('back-to-top');
  if (!button) return;

  const SHOW_AFTER_PX = 400;

  function updateVisibility() {
    if (window.scrollY > SHOW_AFTER_PX) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// =========================================================
// Footer copyright year
// =========================================================
(function setFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
