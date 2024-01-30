import { phoneMask } from "./helper";

export const phones = () => {
  const phones = document.querySelectorAll('input[name=phone]');
  phones.forEach(phone => phone.addEventListener('input', (e) => e.target.value = phoneMask(e.target)));
};