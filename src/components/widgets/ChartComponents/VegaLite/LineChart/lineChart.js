import React from 'react';
import vega, { Handler } from 'vega';
import vegaLite from 'vega-lite';
import vl from 'vega-lite-api';

vl.register(vega, vegaLite, {
  view: {
    renderer: 'svg',
  },
  init: (view) => {
    view.tooltip(new Handler().call);
  },
});

function LineChart() {
  return <div />;
}

export default LineChart;
