export default function intro() {
  const infoButton = document.querySelector('[data-js-info-button]');
  const stagesButton = document.querySelector('[data-js-stages-button]');

  const informationSection = document.querySelector('[data-js-information-section]');
  const stagesSection = document.querySelector('[data-js-stages-section]');

  infoButton.addEventListener('click', () => {
    informationSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  });
  stagesButton.addEventListener('click', () => {
    stagesSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  });
}
