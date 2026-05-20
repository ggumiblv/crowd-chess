export default function initStagesSlider() {
  const slider = document.querySelector('[data-js-stages-section]');

  if (!slider) return;

  const track = slider.querySelector('[data-js-stages-track]');
  const cards = slider.querySelectorAll('[data-js-stages-card]');
  const progressDots = slider.querySelectorAll('[data-js-stages-counter-dot]');

  const nextBtn = slider.querySelector('[data-js-stages-next-button]');
  const prevBtn = slider.querySelector('[data-js-stages-prev-button]');

  const currentEl = slider.querySelector('[data-js-stages-counter-current]');
  const totalEl = slider.querySelector('[data-js-stages-counter-total]');

  if (!track || !cards.length) return;

  let currentIndex = 0;
  const PAGES_COUNT = 5;

  function getSlideWidth() {
    return cards[0].offsetWidth;
  }

  function updateButtons() {
    prevBtn.toggleAttribute('disabled', currentIndex === 0);
    nextBtn.toggleAttribute('disabled', currentIndex === PAGES_COUNT - 1);
  }

  function updateSlider() {
    console.log(progressDots[0]);
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
