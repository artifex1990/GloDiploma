export const privacy = () => {
  const popupPrivacy = document.querySelector('.popup-privacy');
  const privacyLinks = document.querySelectorAll('.link-privacy');
  
  popupPrivacy.addEventListener('click', (e) => {
    if (e.target.closest('.close')) {
      popupPrivacy.classList.remove('visible');
    }
  });
  
  privacyLinks.forEach(link => link.addEventListener('click', () => popupPrivacy.classList.add('visible')));
};
