export const main = () => {
    const main = document.getElementById('main');  
    const arrow = document.querySelector('.header-contacts__arrow');
    const accord = document.querySelector('.header-contacts__phone-number-accord');
  
    main.addEventListener('click', (e) => {
      e.preventDefault();  

      if (e.target.closest('.header-contacts__arrow')) {
        arrow.classList.toggle('header-accord-arrow-active');
        accord.classList.toggle('header-accord-active');
      }
    });
}