import React from 'react';
import { LegendContainer, Legendblock } from './styles';
import { getColor } from '../../utils';
function MapSessionLegend({ data }) {
  const [ranges, setRanges] = React.useState([]);
  const min = getMinRange(data.range.min);
  const max = getMaxRange(data.range.max);
  function getMinRange(value) {
    const minValue = Number(value);
    const minRange = Math.floor(minValue - (minValue % 10));
    if (minRange < 10 && value >= 1) return 1;
    return minRange;
  }
  function getMaxRange(value) {
    const maxValue = Number(value) + 10;
    const maxRange = Math.floor(maxValue - (maxValue % 10));
    return maxRange;
  }
  React.useEffect(() => {
    let from;
    let to;
    let grades = [];
    let labels = [];
    for (let k = min; k <= max; k = k + 10) {
      grades.push(k);
      if (k === 0) grades.push(1);
      if (k === 1) --k;
    }
    for (let i = 0; i < grades.length; i++) {
      from = grades[i];
      if (from !== 0) {
        to = grades[i + 1];
      }
      labels.push({
        key: i,
        size: grades.length,
        color: getColor(from),
        range: `${from}${to ? '-' + to : ''}%`,
      });
    }
    setRanges(labels);
  }, []);
  return (
    <LegendContainer>
      {ranges.map((prop) => (
        <>
          <Legendblock
            arrSize={prop.size}
            nth={prop.key}
            key={prop.key}
            color={prop.color}
          >
            {prop.range}
          </Legendblock>
        </>
      ))}
    </LegendContainer>
  );
}

export default MapSessionLegend;
