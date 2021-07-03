import React from 'react';
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  XAxis,
} from 'recharts';
import {
  CustomTooltip,
  LabelTextContainer,
  Title,
  Text,
  LabelDot,
  LabelValue,
  DataContainer,
} from './tooltip';

function SimpleAreaChartPercent({ data, windowWidth }) {
  return (
    <ResponsiveContainer width={'99%'} height={'99%'}>
      <AreaChart
        margin={{
          bottom: 11,
          right: 15,
          top: 10,
        }}
        data={data}
      >
        <XAxis
          height={20}
          dataKey='day'
          tick={{ fontSize: '1.2rem', fill: '#000' }}
          stroke={'transparent'}
          tickFormatter={(value) => {
            const meses = [
              0,
              'Jan',
              'Fev',
              'Mar',
              'Abr',
              'Mai',
              'Jun',
              'Jul',
              'Ago',
              'Set',
              'Out',
              'Nov',
              'Dez',
            ];
            const data = value.split('/');
            return data[1] + ' - ' + meses[parseInt(data[0])];
          }}
        />
        <YAxis
          width={40}
          domain={[0, 100]}
          tickCount={11}
          tickFormatter={(tick) => {
            return tick + '%';
          }}
          tick={{ fontSize: '1.2rem', fill: '#000' }}
          stroke={'transparent'}
        />
        <Tooltip content={<CustomToolTip />} />

        <Area
          type='monotone'
          dataKey='percent_confirmed_prof'
          stroke='#8DCBF2'
          fill='#8DCBF2'
          strokeWidth={0}
          activeDot={{
            fill: '#BBE0F7',
            stroke: '#509ADE',
            r: 5,
            strokeWidth: 3,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function CustomToolTip({ active, payload, label }) {
  const meses = [
    0,
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  if (active && payload && label) {
    const data = label.split('/');
    return (
      <CustomTooltip>
        <Title>{data[1] + ' - ' + meses[parseInt(data[0])]}</Title>
        <LabelTextContainer>
          <LabelDot boxColor={'#8DCBF2'} />
          <DataContainer>
            <Text>Profissionais da saúde: </Text>
            <LabelValue>{payload[0].value}%</LabelValue>
          </DataContainer>
        </LabelTextContainer>
      </CustomTooltip>
    );
  }
  return null;
}

export default SimpleAreaChartPercent;
