export function DataBarChart(barChartjsDataPrice, lineChartjsDataPrice3) {
  const barChart = {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [
        {
          label: 'Casos totais no Nordeste',
          backgroundColor: '#FBBC56',
          borderColor: '#FBBC56',
          data: barChartjsDataPrice,
        },
        {
          label: 'Casos entre trabalhadores da saúde',
          backgroundColor: '#071242',
          borderColor: '#071242',
          data: lineChartjsDataPrice3,
        },
      ],
    },
    options: {
      maintainAspectRatio: true,
      aspectRatio: 1.2,
      responsive: true,
      scales: {
        xAxes: {
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: true,
          },
          ticks: {
            color: '#000000',
            font: {
              weight: 'bold',
              family: 'Montserrat, sans-serif',
            },
          },
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: true,
          },
          ticks: {
            font: {
              family: 'Montserrat, sans-serif',
            },
            callback: function (value) {
              let tickValue = value / 1000;
              let tickValueKK = value / 1000000;
              if (tickValue < 1) {
                return value;
              }
              if (tickValueKK >= 1) {
                return tickValueKK + 'milhão(ões)';
              }
              return tickValue + 'mil';
            },
          },
        },
      },
      elements: {
        bar: {
          borderRadius: 7,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: 'index',
          backgroundColor: 'white',
          titleColor: 'black',
          titleFont: {
            size: 15,
            family: 'Montserrat, sans-serif',
          },
          titleAlign: 'center',
          padding: 10,
          bodyColor: 'black',
          bodyFont: {
            size: 10,
            weight: 'bold',
            family: 'Montserrat, sans-serif',
          },
          rtl: false,
          displayColors: false,
          callbacks: {
            label: function (tooltipItem) {
              console.log(tooltipItem);
              let value = tooltipItem.raw;
              let tickValue = value / 1000;
              let tickValueKK = value / 1000000;
              if (tickValue < 1) {
                return '' + tooltipItem.dataset.label + ': ' + value;
              }
              if (tickValueKK >= 1) {
                return (
                  '' +
                  tooltipItem.dataset.label +
                  ': ' +
                  tickValueKK +
                  'milhão(ões)'
                );
              }
              return (
                '' +
                tooltipItem.dataset.label +
                ': ' +
                parseInt(tickValue) +
                'mil'
              );
            },
          },
        },
      },
    },
  };
  return barChart;
}

export function DataLineChart(barChartjsDataPrice) {
  const lineChart = {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [
        {
          label: 'My First dataset',
          fill: true,
          tension: 0.4,
          backgroundColor: 'rgba(20,122,214,0.4)',
          borderColor: '#147AD6',
          data: barChartjsDataPrice,
        },
      ],
    },
    options: {
      maintainAspectRatio: true,
      aspectRatio: 1.2,
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: true,
          },
          ticks: {
            color: '#000000',
            font: {
              weight: 'bold',
              family: 'Montserrat, sans-serif',
            },
          },
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: true,
          },
          ticks: {
            font: {
              family: 'Montserrat, sans-serif',
            },
            callback: function (value) {
              let tickValue = value / 1000;
              let tickValueKK = value / 1000000;
              if (tickValue < 1) {
                return value;
              }
              if (tickValueKK >= 1) {
                return tickValueKK + 'milhão(ões)';
              }
              return tickValue + 'mil';
            },
          },
        },
      },
      elements: {
        bar: {
          borderRadius: 7,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: 'index',
          backgroundColor: 'white',
          titleColor: 'black',
          titleFont: {
            size: 15,
            family: 'Montserrat, sans-serif',
          },
          titleAlign: 'center',
          padding: 10,
          bodyColor: 'black',
          bodyFont: {
            size: 10,
            weight: 'bold',
            family: 'Montserrat, sans-serif',
          },
          rtl: false,
          displayColors: false,
          callbacks: {
            label: () => {
              return 'Óbitos por COVID-19';
            },

            title: (tooltipItem) => {
              console.log(tooltipItem[0]);
              return '' + tooltipItem[0].raw;
            },
          },
        },
      },
    },
  };

  return lineChart;
}

export const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fev',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Abr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Mai',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
