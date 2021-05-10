import React from 'react';
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  XAxis,
} from 'recharts';

function LineChartComponent({ data }) {
  return (
    <ResponsiveContainer width={'100%'} aspect={1.2}>
      <AreaChart margin={{ left: -30, right: 6 }} width={'100%'} data={data}>
        <XAxis
          dataKey='name'
          tickMargin={10}
          tickCount={6}
          tick={{ fontSize: '1.2rem', fontWeight: 'bold', fill: '#000' }}
          stroke={'transparent'}
        />
        <YAxis
          tickCount={3}
          tickFormatter={(tick) => {
            const value = tick / 1000;

            if (value < 1) {
              return tick;
            }

            return value + 'mil';
          }}
          tick={{ fontSize: '1.2rem', fill: '#7C828A' }}
          stroke={'transparent'}
        />
        <Tooltip />

        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#147AD6' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#147AD6' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type='monotone'
          dataKey='pv'
          stroke='#147AD6'
          fill='url(#colorUv)'
          strokeWidth={3}
          dot={{ fill: '#147AD6', stroke: '#147AD6' }}
          activeDot={{ fill: '#147AD6', stroke: '#147AD6', r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;
