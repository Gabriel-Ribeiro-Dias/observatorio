import api from '../../services/api';

export async function getApiData(url, func) {
  await api
    .get(url)
    .then((res) => {
      res.data.data_graphic.results.sort(sortByDate);
      func(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function sortByDate(a, b) {
  const dateI = new Date(a.day);
  const dateII = new Date(b.day);
  return dateI > dateII ? 1 : -1;
}
