import { getData } from './helper';

export class JobsService {
  getJobs() {
    return getData('http://localhost:4545/jobs');
  }

  getFilterTypes(value = '', type = 'type') {
    return getData(`http://localhost:4545/jobs?${type}=${value}`);
  }

  getDateModify() {
    return getData(`http://localhost:4545/dateModify`);
  }

  getSortJobs(sortOption) {
    return getData(`http://localhost:4545/jobs?_sort=${sortOption.name}&_order=${sortOption.value}`);
  }
};
