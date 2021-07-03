import React from 'react';
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Legend,
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

function StackedAreaChart({ data, windowWidth }) {
  return (
    <ResponsiveContainer width={'99%'} height={'99%'}>
      <AreaChart
        margin={{
          right: 15,
          bottom: 0,
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
          tickFormatter={(tick) => {
            const value = tick / 1000;

            if (value < 1) {
              return tick;
            }

            return value + 'mil';
          }}
          tick={{ fontSize: '1.2rem', fill: '#000' }}
          stroke={'transparent'}
        />
        <Tooltip content={<CustomToolTip />} />

        <Area
          type='monotone'
          dataKey='total_test_posi_nao_prof'
          name={'Total entre não profissionais da saúde'}
          stroke='#F3AB9A'
          fill='#F3AB9A'
          strokeWidth={0}
          activeDot={{
            fill: '#E28F7C',
            stroke: '#f7d1c8',
            r: 5,
            strokeWidth: 3,
          }}
        />
        <Area
          type='monotone'
          dataKey='total_test_posi_prof'
          name={'Total entre profissionais da saúde'}
          stroke='#ab4129'
          fill='#ab4129'
          strokeWidth={0}
          activeDot={{
            fill: '#ab4129',
            stroke: '#f7d1c8',
            r: 5,
            strokeWidth: 3,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default StackedAreaChart;

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
          <LabelDot boxColor={'#F3AB9A'} />
          <DataContainer>
            <Text>Não profissionais da saúde: </Text>
            <LabelValue> {payload[0].value}</LabelValue>
          </DataContainer>
        </LabelTextContainer>
        <LabelTextContainer>
          <LabelDot boxColor={'#ab4129'} />
          <DataContainer>
            <Text>Profissionais da saúde: </Text>
            <LabelValue>{payload[1].value}</LabelValue>
          </DataContainer>
        </LabelTextContainer>
      </CustomTooltip>
    );
  }
  return null;
}
