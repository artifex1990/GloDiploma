import { unique } from "./helper";

export const filter = async (type = 'type') => {
  let filterType = [];
  const prepareFilter = async () => {
    await jobsService.getJobs().then(data => {
      data.forEach(job => filterType.push(job[type]));
      filterType = unique(filterType);
    });
  }; 

  await prepareFilter();

  return filterType;
};
