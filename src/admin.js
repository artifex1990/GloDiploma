import { JobsService } from './modules/JobsService';
import { auth } from './modules/admin/auth';
import { items } from './modules/admin/items';
import { UsersService } from './modules/admin/usersService';
import { ConfigService } from './modules/configService';

window.usersService = new UsersService();
window.jobsService = new JobsService();
window.config = new ConfigService();

auth();

if (window.location.href.includes('table.html')) {
  items();  
}
