export const headerContactPhone = () => {
  const arrow = document.querySelector('.header-contacts__arrow');
  const accord = document.querySelector('.header-contacts__phone-number-accord');

  arrow.addEventListener('click', () => {
    arrow.classList.toggle('header-accord-arrow-active');
    accord.classList.toggle('header-accord-active');
  })
};
