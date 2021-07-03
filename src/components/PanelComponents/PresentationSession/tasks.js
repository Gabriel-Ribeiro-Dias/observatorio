export function processData(data) {
  console.log(data);
  const day = data.data.data.day.split('-');
  const json = data;
  json.data.day = `${day[2]}/${day[1]}`;
  return data;
}
