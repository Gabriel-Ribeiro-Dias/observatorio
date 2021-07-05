const sortByDate = (a, b) => {
  const dateA = a.day.split('/');
  const dateB = b.day.split('/');
  const dateI = new Date('0', dateA[0], dateA[1]);
  const dateII = new Date('0', dateB[0], dateB[1]);
  return dateI > dateII ? 1 : -1;
};
export function processData(json) {
  console.log(json.data.data_graphic.results[0]);
  json.data.data_graphic.results.sort(sortByDate);
  console.log(json.data.data_graphic.results[0]);
  return json;
}
