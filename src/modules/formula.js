export const formula = () => {
  const formulaItems = document.querySelectorAll('.formula-item__icon');

  formulaItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => e.target.classList.add('active-item'));
    item.addEventListener('mouseleave', (e) => e.target.classList.remove('active-item'));
  })
};
