import states from '../../../utils/GeoJson/states.json';

export function processCovidData(covidStates) {
  const geojson = states;
  geojson.range = {
    ...covidStates.data.range,
  };
  for (let i = 0; i < states.features.length; i++) {
    const state = states.features[i];
    const covidState = covidStates.data.data.find(
      (covidState) => state.properties.sigla === covidState.uf
    );

    state.properties.confirmed = 0;

    if (covidState != null) {
      let confirmed = Number(covidState.percent_confirmed);
      state.properties.confirmed = confirmed;
    }
  }
  return states;
}
