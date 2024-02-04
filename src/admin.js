import { JobsService } from './modules/JobsService';
import { auth } from './modules/admin/auth';
import { UsersService } from './modules/admin/usersService';
import { ConfigService } from './modules/configService';

window.usersService = new UsersService();
window.jobsService = new JobsService();
window.config = new ConfigService();

auth();