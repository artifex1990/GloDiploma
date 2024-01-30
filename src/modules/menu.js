export const menu = () => {
  const menu = document.querySelector('.menu');
  const dialogMain = document.querySelector('.popup-dialog-menu');
  const btnFooterUp = document.querySelector('.button-footer > a');

  const animationScroll = (a) => {
    const element = document.querySelector(a.getAttribute('href'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
    }
  };

  menu.addEventListener('click', () => {
    dialogMain.classList.toggle('showHide-menu');
  });

  btnFooterUp.addEventListener('click', (e) => {
    e.preventDefault();
    animationScroll(e.target);
  });

  dialogMain.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName.toLowerCase() === 'a' && !e.target.closest('.link-list')) {
      animationScroll(e.target);
    }

    if (e.target.closest('.close') || e.target.classList.contains('menu-link')) {
      dialogMain.classList.toggle('showHide-menu');
    }
  });
};
