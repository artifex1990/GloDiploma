import { filter } from "./filter";
import { dateLocal } from "./helper";

export const repair = () => {
  const filterRepairType = document.querySelector('.nav-list-popup-repair');
  const popupRepairTypes = document.querySelector('.popup-repair-types');
  const repairLinks = document.querySelectorAll('.link-list > a');
  const jobsTable = document.querySelector('.popup-repair-types-content-table__list');
  const titleRepair = document.getElementById('switch-inner');
  const dateModify = document.querySelector('.popup-repair-types-content__head-date');

  const filterView = async () => {
    const textFilters = await filter();

    filterRepairType.innerHTML = '';

    textFilters.forEach(text => {
      const button = document.createElement('button');

      button.classList.add('button_o', 'popup-repair-types-nav__item');
      button.textContent = text;
      button.addEventListener('click', (e) => {
        const buttonActive = filterRepairType.querySelector('active');

        if (buttonActive) {
          buttonActive.classList.toggle('active');
        }

        e.target.classList.toggle('active');

        titleRepair.innerText = e.target.textContent;
        jobsService.getFilterTypes(e.target.textContent).then(data => printTableJobs(data));
      });

      filterRepairType.appendChild(button);
    });
  };

  const printTableJobs = (data) => {
    jobsTable.innerHTML = '';

    data.forEach(job => {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdType = document.createElement('td');
      const tdValue = document.createElement('td');

      tr.classList.add('mobile-row');
      tdName.classList.add('repair-types-name');
      tdType.classList.add('repair-types-value');
      tdValue.classList.add('repair-types-value');

      tdName.textContent = job.name;
      tdType.textContent = job.units;
      tdValue.textContent = job.cost;

      tr.appendChild(tdName);
      tr.appendChild(tdType);
      tr.appendChild(tdValue);

      jobsTable.appendChild(tr);
    });
  };

  const render = () => {
    titleRepair.innerText = 'Все услуги!';

    filterView();
    config.getConfig().then(config => dateModify.innerHTML = `${dateLocal(config.date_modify)} <i><i></i></i>`);
    jobsService.getJobs().then(data => printTableJobs(data));
  };

  popupRepairTypes.addEventListener('click', (e) => {
    if (e.target.closest('.close')) {
      popupRepairTypes.classList.remove('visible');
    }
  });

  repairLinks.forEach(link => link.addEventListener('click', () => {
    popupRepairTypes.classList.add('visible');
    render();
  }));
};
