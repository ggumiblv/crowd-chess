export default function participants() {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  const track = slider.querySelector('.slider-track');

  const nextBtn = slider.querySelector('.next');
  const prevBtn = slider.querySelector('.prev');

  const cards = slider.querySelectorAll('.card');

  const cardsPerSlide = 3;
  const autoSlideDelay = 4000;

  let currentSlide = 0;

  // сколько всего "страниц"
  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  // ширина одной страницы
  function getSlideWidth() {
    return slider.querySelector('.slider-window').offsetWidth;
  }

  // обновление позиции
  function updateSlider() {
    const offset = currentSlide * getSlideWidth();

    track.style.transform = `translateX(-${offset}px)`;
  }

  // next
  function nextSlide() {
    currentSlide++;

    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }

    updateSlider();
  }

  // prev
  function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }

    updateSlider();
  }

  // кнопки
  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  // автопереключение
  setInterval(nextSlide, autoSlideDelay);

  // адаптивность
  window.addEventListener('resize', updateSlider);

  updateSlider();
}
