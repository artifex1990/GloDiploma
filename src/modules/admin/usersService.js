import { getData } from './../helper';

export class UsersService {
  checkUser(login, password) {
    return getData(`http://localhost:4545/users?login=${login}&password=${password}`);
  }
}