export const BarChart = {
  options: {
    maintainAspectRatio: false,
    aspectRatio: 2,
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
          major: {
            enabled: true,
          },
          callback: function (value) {
            let tickValue = value / 1000;
            if (tickValue < 1) {
              return value;
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
          /**label: function (tooltipItem, data) {
            return data.datasets[tooltipItem.datasetIndex].label;
          },*/
          /**
          title: function (value) {
            return value[1];
          },
           */
        },
      },
    },
  },
};

export const LineChart = {
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: true,
        },
        ticks: {
          font: {
            weight: 'bold',
            family: 'Montserrat, sans-serif',
          },
          color: '#000000',
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
            if (tickValue < 1) {
              return value;
            }
            return tickValue + 'mil';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
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
      },
    },
  },
};

export const PieChart = {
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
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
      },
    },
  },
};

export const LineChart2 = {
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: true,
        },
        ticks: {
          font: {
            weight: 'bold',
            family: 'Montserrat, sans-serif',
          },
          color: '#000000',
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
            if (tickValue < 1) {
              return value;
            }
            return tickValue + 'mil';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
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
      },
    },
  },
};
