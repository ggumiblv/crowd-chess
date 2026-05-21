export default function initStagesSlider() {
  const section = document.querySelector('[data-js-stages-section]');

  if (!section) return;

  const track = section.querySelector('[data-js-stages-track]');
  const cards = section.querySelectorAll('[data-js-stages-card]');
  const progressDots = section.querySelectorAll('[data-js-stages-counter-dot]');

  const nextBtn = section.querySelector('[data-js-stages-next-button]');
  const prevBtn = section.querySelector('[data-js-stages-prev-button]');

  if (!track || !cards.length) return;

  let currentIndex = 0;
  const PAGES_COUNT = 5;

  function getSlideWidth() {
    const gap = 20;
    return cards[0].offsetWidth + gap;
  }

  function updateButtons() {
    prevBtn.toggleAttribute('disabled', currentIndex === 0);
    nextBtn.toggleAttribute('disabled', currentIndex === PAGES_COUNT - 1);
  }

  function updateSlider() {
    const offset = currentIndex * getSlideWidth();

    track.style.transform = `translateX(-${offset}px)`;

    progressDots.forEach((dot) => dot.classList.remove('stages__counter-dot--active'));

    progressDots[currentIndex].classList.add('stages__counter-dot--active');

    updateButtons();
  }

  function nextSlide() {
    if (currentIndex >= PAGES_COUNT - 1) return;

    currentIndex++;
    updateSlider();
  }

  function prevSlide() {
    if (currentIndex <= 0) return;

    currentIndex--;
    updateSlider();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  window.addEventListener('resize', updateSlider);

  updateSlider();
}
