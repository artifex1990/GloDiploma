export const faq = () => {
  const faq = document.getElementById('faq');

  faq.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest('.accordion')) {
      faq.querySelector('.msg-active').classList.remove('msg-active');
      e.target.classList.add('msg-active');
    }
  });
};
