import { getData } from './helper';

export class ConfigService {
  getConfig() {
    return getData(`http://localhost:4545/config`);
  }
};
