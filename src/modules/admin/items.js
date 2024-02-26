import { filter } from "../filter";

export const items = () => {
  const table = document.getElementById('table');
  const filterItems = document.getElementById('typeItem');

  const filterView = async () => {
    const textFilters = await filter();

    filterItems.innerHTML = '<option value="">Все услуги</option>';

    textFilters.forEach(text => {
      const option = document.createElement('option');

      option.value = text;
      option.textContent = text;

      filterItems.appendChild(option);
    });
  };

  const printTableJobs = (data) => {
    const itemsTable = document.getElementById('tbody');
    itemsTable.innerHTML = '';

    data.forEach(job => {
      const tr = document.createElement('tr');
      const tdId = document.createElement('td');
      const tdName = document.createElement('td');
      const tdType = document.createElement('td');
      const tdUnits = document.createElement('td');
      const tdCost = document.createElement('td');
      const tdActions = document.createElement('td');
      const divActions = document.createElement('div');
      const btnChange = document.createElement('button');
      const btnRemove = document.createElement('button');

      tr.classList.add('table__row');
      tdId.classList.add('table__id', 'table__cell');
      tdName.classList.add('table-name', 'table__cell');
      tdType.classList.add('table-type', 'table__cell');
      tdUnits.classList.add('table-units', 'table__cell');
      tdCost.classList.add('table-cost', 'table__cell');
      divActions.classList.add('table__actions', 'table__cell');
      btnChange.classList.add('button', 'action-change');
      btnRemove.classList.add('button', 'action-remove');

      tdId.textContent = job.id;
      tdType.textContent = job.type;
      tdName.textContent = job.name;
      tdUnits.textContent = job.units;
      tdCost.textContent = `${job.cost} руб`;

      btnChange.innerHTML = '<span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>';
      btnRemove.innerHTML = '<span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>';

      divActions.appendChild(btnChange);
      divActions.appendChild(btnRemove);
      tdActions.appendChild(divActions);

      tr.appendChild(tdId);
      tr.appendChild(tdType);
      tr.appendChild(tdName);
      tr.appendChild(tdUnits);
      tr.appendChild(tdCost);
      tr.appendChild(tdActions);

      itemsTable.appendChild(tr);
    });
  };

  const render = () => {
    filterView();
    jobsService.getJobs().then(data => printTableJobs(data));
  };

  filterItems.addEventListener('change', (e) => {
    if (!e.target.value) {
      jobsService.getJobs().then(data => printTableJobs(data));
    } else {
      jobsService.getFilterTypes(e.target.value).then(data => printTableJobs(data));
    } 
  });

  table.addEventListener('click', (e) => {
    const th = e.target.closest('th');
    
    if (th) {
      const svg = e.target.closest('.icon-sort') ?? e.target.querySelector('.icon-sort');
      let type = '';
      let order = 'desc';

      if (svg) {
        th.classList.forEach(className => {
          if (className.includes('th-')) {
            type = className.split('-')[1];
          }
        });

        if (svg.classList.contains('sorting')) {
          svg.classList.remove('sorting');
          order = 'asc';
        } else {
          svg.classList.add('sorting');
          order = 'desc';
        }

        jobsService.getSortJobs({
          name: type,
          value: order
        }).then(data => printTableJobs(data));
      }
    }
  });

  render();
};
