import React from 'react';
import VegaLite from 'react-vega-lite';
import { Handler } from 'vega-tooltip';

const spec = {
    "description": "A simple bar chart with embedded data.",
    "mark": "bar",
    "encoding": {
      "x": {"field": "meses", "type": "ordinal", },
      "y": {"field": "casos", "type": "quantitative", "axis": {"grid": false}},
      "color": {
        "field": "gender",
        "scale": {"range": ["#FBBC56", "#071242"]}
      }
    }
  };
  
  const barData = {
    "values": [
      {"meses": "Jun","casos": 20}, {"meses": "Fev","casos": 34}, {"meses": "Mar","casos": 55},
      {"meses": "Abr","casos": 19}, {"meses": "Mai","casos": 40}, {"meses": "Jun","casos": 34},
      {"meses": "Jun","casos": 20}, {"meses": "Fev","casos": 34}, {"meses": "Mar","casos": 55},
      {"meses": "Abr","casos": 19}, {"meses": "Mai","casos": 40}, {"meses": "Jun","casos": 34},
    ]
  };

function BarChart() {
  return <>
  <VegaLite spec={spec} data={barData} tooltip={new Handler().call} />
  </>;
}

export default BarChart;