import React from 'react';
import { Pie } from 'react-chartjs-2';
// import { Container } from './styles';

function ChartJSComponents({ data, options }) {
  return <Pie data={data} options={options} />;
}

export default ChartJSComponents;
