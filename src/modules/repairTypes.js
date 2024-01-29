export const repairTypes = () => {
  const popupRepairTypes = document.querySelector('.popup-repair-types');

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.link-list')) {
      popupRepairTypes.style.visibility = 'visible';
    }

    if (e.target.closest('.close')) {
      popupRepairTypes.style.visibility = 'hidden';
    }
  });
};
