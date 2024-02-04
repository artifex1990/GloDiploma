import { JobsService } from './modules/JobsService';
import { ConfigService } from './modules/configService';
import { faq } from './modules/faq';
import { formula } from './modules/formula';
import { main } from './modules/main';
import { menu } from './modules/menu';
import { phones } from './modules/phones';
import { privacy } from './modules/privacy';
import { repair } from './modules/repair';

window.jobsService = new JobsService();
window.config = new ConfigService();

main();
menu();
phones();
repair();
privacy();
formula();
faq();
