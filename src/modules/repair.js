export const repair = () => {
  const popupRepairTypes = document.querySelector('.popup-repair-types');
  const repairLinks = document.querySelectorAll('.link-list > a');

  popupRepairTypes.addEventListener('click', (e) => {
    if (e.target.closest('.close')) {
      popupRepairTypes.classList.remove('visible');
    }
  });

  repairLinks.forEach(link => link.addEventListener('click', () => popupRepairTypes.classList.add('visible')));
};
