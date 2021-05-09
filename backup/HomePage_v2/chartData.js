import fetchDataAPI from '../../services/api';

export const BarChart = {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Casos totais no Nordeste',
        backgroundColor: '#FBBC56',
        borderColor: '#FBBC56',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: 'Casos entre trabalhadores da saúde',
        backgroundColor: '#071242',
        borderColor: '#071242',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
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
          },
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: true,
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
  data: {
    labels: ['Dado1', 'Dado2', 'Dado3'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        tension: 0.4,
        backgroundColor: ['#147AD6', 'red', 'green'],
        borderColor: ['#147AD6', 'red', 'green'],
        data: [20, 30, 45],
      },
    ],
  },

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
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        backgroundColor: '#147AD6',
        borderColor: '#147AD6',
        pointStyle: 'circle',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: 'My Second dataset',
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
        data: [10, 20, 45, 55, 63, 15],
      },
    ],
  },

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
