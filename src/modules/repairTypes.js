export const repairTypes = () => {
  const popupRepairTypes = document.querySelector('.popup-repair-types');

  popupRepairTypes.addEventListener('click', (e) => {
    if (e.target.closest('.close')) {
      popupRepairTypes.style.visibility = 'hidden';
    }
  });
};
