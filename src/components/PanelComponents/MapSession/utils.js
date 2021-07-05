export const getColor = (value) => {
  const arr = [
    '#800026',
    '#99192a',
    '#b0312f',
    '#c44938',
    '#d66143',
    '#e57a51',
    '#f19363',
    '#fbae78',
    '#ffc992',
    '#ffe5b2',
    '#ffffe0',
    '#f2f2f2',
  ];
  return value === 100
    ? arr[0]
    : 90 <= value
    ? arr[1]
    : 80 <= value
    ? arr[2]
    : 70 <= value
    ? arr[3]
    : 60 <= value
    ? arr[4]
    : 50 <= value
    ? arr[5]
    : 40 <= value
    ? arr[6]
    : 30 <= value
    ? arr[7]
    : 20 <= value
    ? arr[8]
    : 10 <= value
    ? arr[9]
    : 1 <= value
    ? arr[10]
    : arr[11];
};

/**
 * 
export const getColor = (value) => {
  const arr = [
    '#800026',
    '#99192a',
    '#b0312f',
    '#c44938',
    '#d66143',
    '#e57a51',
    '#f19363',
    '#fbae78',
    '#ffc992',
    '#ffe5b2',
    '#ffffe0',
    '#f2f2f2',
  ];
  return value === 100
    ? '#800026'
    : 90 <= value
    ? '#BD0026'
    : 80 <= value
    ? '#E31A1C'
    : 70 <= value
    ? '#FC4E2A'
    : 60 <= value
    ? '#fd6b3a'
    : 50 <= value
    ? '#FD8D3C'
    : 40 <= value
    ? '#FEB24C'
    : 30 <= value
    ? '#FED976'
    : 20 <= value
    ? '#FFEDA0'
    : 10 <= value
    ? '#fff6cc'
    : 1 <= value
    ? '#fffae6'
    : '#f2f2f2';
};
 */

export const style = (feature) => {
  return {
    fillColor: getColor(feature.properties.confirmed),
    weight: 2,
    opacity: 0.4,
    color: 'grey',
    dashArray: '3',
    fillOpacity: 1,
  };
};

export const onEachState = (state, layer) => {
  const stateName = state.properties.name;
  const stateConfirmed = state.properties.confirmed;
  //layer.bindTooltip(stateName + ' : ' + stateConfirmed + '%').openTooltip();
  layer
    .bindTooltip(stateName, {
      permanent: true,
      direction: 'center',
      className: 'no-background',
    })
    .openTooltip();
};
