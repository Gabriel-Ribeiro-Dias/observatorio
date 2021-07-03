import L from 'leaflet';
import { useEffect } from 'react';
import './styles.css';

const Legend = ({ map, data }) => {
  const getColor = (value) => {
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
  function getMinRange(value) {
    const minValue = parseInt(value);
    const minRange = Math.floor(minValue - (minValue % 10));
    if (minRange < 10 && value >= 1) return 1;
    return minRange;
  }
  function getMaxRange(value) {
    const maxValue = parseInt(value) + 10;
    const maxRange = Math.floor(maxValue - (maxValue % 10));
    return maxRange;
  }
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: 'bottomright' });
      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend');
        const min = getMinRange(data.range.min);
        const max = getMaxRange(data.range.max);
        let grades = [];
        let labels = [];
        let from;
        let to;
        for (let k = min; k <= max; k = k + 10) {
          grades.push(k);
          if (k === 0) grades.push(1);
          if (k === 1) --k;
        }
        for (let i = 0; i < grades.length; i++) {
          from = grades[i];
          if (from !== 0) to = grades[i + 1];
          labels.push(
            '<i style="background-color:' +
              getColor(from) +
              '"></i> ' +
              from +
              (to ? '&ndash;' + to : '') +
              '%'
          );
        }
        div.innerHTML = labels.join('<br>');
        return div;
      };
      legend.addTo(map);
    }
  }, [map]);
  return null;
};
export default Legend;
