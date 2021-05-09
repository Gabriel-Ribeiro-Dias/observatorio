import React from 'react';
import { Line } from 'react-chartjs-2';

// import { Container } from './styles';

function LineChart({ data, options, height }) {
  return (
    <>
      <Line data={data} options={options} height={height} />
    </>
  );
}

export default LineChart;
