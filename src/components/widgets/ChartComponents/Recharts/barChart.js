import React from 'react';
import {
  BarChart,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Bar,
} from 'recharts';

function BarChartComponent({ data }) {
  return (
    <ResponsiveContainer width={'100%'} aspect={1.2}>
      <BarChart margin={{ left: -15, right: 5 }} barSize={10} data={data}>
        <XAxis
          dataKey={'name'}
          tick={{ fontSize: '1.2rem', fontWeight: 'bold', fill: '#000' }}
          stroke={'transparent'}
          tickCount={6}
        />
        <YAxis
          stroke={'transparent'}
          tick={{ fontSize: '1.2rem', fill: '#7C828A' }}
          tickFormatter={(tick) => {
            const value = tick / 1000;

            if (value < 1) {
              return tick;
            }

            return value + 'mil';
          }}
        />
        <Tooltip />
        <Bar radius={(3, 0, 0, 3)} fill={'#FBBC56'} dataKey={'uv'} />
        <Bar radius={(3, 0, 0, 3)} fill={'#071242'} dataKey={'uv'} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
