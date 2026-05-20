export default function participants() {
  const slider = document.querySelector('[data-js-participants-section]');

  if (!slider) return;

  const track = slider.querySelector('[data-js-slider-track]');

  const cards = slider.querySelectorAll('[data-js-slider-card]');

  const nextBtn = slider.querySelector('[data-js-participants-next-button]');
  const prevBtn = slider.querySelector('[data-js-participants-prev-button]');

  const currentEl = slider.querySelector('[data-js-participants-counter-current]');
  const totalEl = slider.querySelector('[data-js-participants-counter-total]');

  const AUTO_DELAY = 4000;

  let currentIndex = 0;
  let autoSlide;

  function getCardsPerView() {
    if (window.innerWidth <= 845) {
      return 1;
    } else if (window.innerWidth <= 1330) {
      return 2;
    } else return 3;
  }

  function getCardWidth() {
    const card = cards[0];
    const gap = 20;

    return card.offsetWidth + gap;
  }

  function updateSlider() {
    const cardsPerView = getCardsPerView();

    const offset = currentIndex * getCardWidth();

    track.style.transform = `translateX(-${offset}px)`;

    if (cardsPerView === 1) {
      currentEl.textContent = currentIndex + 1;
    } else {
      currentEl.textContent = Math.min(currentIndex + cardsPerView, cards.length);
    }

    totalEl.textContent = cards.length;
  }

  function nextSlide() {
    const cardsPerView = getCardsPerView();

    currentIndex++;

    if (currentIndex > cards.length - cardsPerView) {
      currentIndex = 0;
    }

    updateSlider();
  }

  function prevSlide() {
    const cardsPerView = getCardsPerView();

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = cards.length - cardsPerView;
    }

    updateSlider();
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, AUTO_DELAY);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();

    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();

    stopAutoSlide();
    startAutoSlide();
  });

  window.addEventListener('resize', () => {
    currentIndex = 0;

    updateSlider();
  });

  updateSlider();

  startAutoSlide();
}
