import { getData } from '../../../../services/tasks';

let setState = null;
export const loadData = (setStateProp) => {
  const baseQuery = '/porcentagem_casos_por_uf/2020/';
  setState = setStateProp;
  getData(baseQuery, processCovidData);
};

function processCovidData(covidStates) {
  let data = [];
  for (let i = 0; i < covidStates.data.data.length; i++) {
    data.push({
      code: covidStates.data.data[i].uf,
      value: covidStates.data.data[i].percent_confirmed,
    });
  }
  setState(data);
}
