import data from './data.json';

let setState;
export async function loadData(setStateProp) {
  setState = setStateProp;
  processData();
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function processData() {
  data.data.data_graphic.results.sort(sortByDate);
  for (let i = 1; i <= 12; i++) {
    for (let k = 1; k <= 30; k++) {
      const dataJson = data.data.data_graphic.results;
      dataJson.push({
        day: `${i}/${k}`,
        total_test_posi_prof: randomIntFromInterval(0, 300),
        total_test_posi_nao_prof: randomIntFromInterval(0, 400),
        percent_confirmed_prof: randomIntFromInterval(0, 100).toFixed(2),
      });
    }
  }
  setState(data);
}

function sortByDate(a, b) {
  const dateI = new Date(a.day);
  const dateII = new Date(b.day);
  return dateI > dateII ? 1 : -1;
}

/** **************** BACKUP ***************************
 * 
 * export async function loadData(url, setStateProp) {
  setState = setStateProp;
  getData(url, processData);
}

function processData(data) {
  data.data.data_graphic.results.sort(sortByDate);
  setState(data);
}
 */
