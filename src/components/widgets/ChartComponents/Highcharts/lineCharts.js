import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'areaspline',
    style: {
      fontFamily: 'Montserrat, sans-serif',
    },
    height: 85 + '%',
    width: 360,
    backgroundColor: 'transparent',
  },
  title: {
    text: '',
  },
  series: [
    {
      name: 'teste',
      data: [10, 20, 30, 40, 50, 100],
      color: '#147AD6',
    },
  ],
  xAxis: {
    title: {
      text: '',
    },
    lineColor: 'transparent',
    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  },
  yAxis: {
    title: {
      text: '',
    },
    labels: {
      format: '<h1>{text}</h1>',
      formatter: function (value) {
        const tick = parseInt(value.pos) / 1000;

        if (tick < 1) {
          return value.pos;
        }
        console.log(value);
        return tick + 'mil';
      },
    },
    gridLineColor: 'transparent',
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
};

function LineCharts() {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default LineCharts;
