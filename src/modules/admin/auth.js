import { getCookie, setCookie } from './../helper';

export const auth = () => {
  const cookieAuth = getCookie('auth');
  const login = document.getElementById('name');
  const loginError = document.querySelector('#name + span');
  const password = document.getElementById('type');
  const passwordError = document.querySelector('#type + span');
  const button = document.querySelector('.button-ui_firm');
  const hourSecond = 3600;
  const url = window.location.href;

  if (!cookieAuth) {
    if (url.includes('table.html')) {
       window.location.href = 'http://localhost:5500/dist/admin/index.html';
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
      
        usersService.checkUser(login.value, password.value).then(data => {
        if (data.length) {
          setCookie('auth', login.value, hourSecond);
          window.location.href = 'http://localhost:5500/dist/admin/table.html';
        } else {
          loginError.classList.add('error');
          passwordError.classList.add('error');
        }
      });
    });
  } else {
    if (url.includes('index.html')) {
      window.location.href = 'http://localhost:5500/dist/admin/table.html';
    }
  }
};
