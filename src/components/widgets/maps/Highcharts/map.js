import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMap from 'highcharts/modules/map';
import map from '@highcharts/map-collection/countries/br/br-all.geo.json';
import { loadData } from './tasks';

HighchartsMap(Highcharts);
function HighchartsMapComponent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    loadData(setData);
  }, []);

  const options = {
    chart: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      height: 500,
      width: 600,
      map: map,
    },

    title: {
      text: 'Highmaps basic demo',
    },
    colorAxis: {
      min: 0,
      max: 100,
      tickInterval: 5,
      stops: [
        [0, '#f9ffe6'],
        [0.1, '#ecffb3'],
        [0.2, '#FFEDA0'],
        [0.3, '#FED976'],
        [0.4, '#FEB24C'],
        [0.5, '#FD8D3C'],
        [0.6, '#fd6b3a'],
        [0.7, '#FC4E2A'],
        [0.8, '#E31A1C'],
        [0.9, '#BD0026'],
        [1, '#800026'],
      ],
      labels: {
        format: '{value}%',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      floating: true,
      backgroundColor:
        // theme
        (Highcharts.defaultOptions &&
          Highcharts.defaultOptions.legend &&
          Highcharts.defaultOptions.legend.backgroundColor) ||
        'rgba(255, 255, 255, 0.85)',
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },
    series: [
      {
        data: data,
        joinBy: ['hc-a2', 'code'],
        name: 'Testes positivos de trabalhadores da saúde',
        tooltip: {
          valueSuffix: '%',
        },
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: true,
          format: '<strong>{point.name}</strong>',
        },
      },
    ],
  };

  return (
    <>
      {data ? (
        <HighchartsReact
          constructorType={'mapChart'}
          highcharts={Highcharts}
          options={options}
        />
      ) : (
        <div>carregando...</div>
      )}
    </>
  );
}

export default HighchartsMapComponent;
