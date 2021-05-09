import React, { useEffect } from 'react';
import api from '../../services/api';
import { Background } from '../../styles/global';
import {
  InfoSession,
  SupporterSession,
  PanelSession,
} from '../../components/HomeComponents';

import { NavbarComponent } from '../../components/widgets';
import { HomePresentationSessionData } from './dados';
import { BarChart, LineChart, PieChart, LineChart2 } from './chartData';

function HomePage() {
  const [barChartConfig, setBarChartConfig] = React.useState(BarChart);
  const [LineChartConfig, setLineChartConfig] = React.useState(LineChart);
  const [PieChartConfig, setPieChartConfig] = React.useState(PieChart);
  const [LineChart2Config, setLineChart2Config] = React.useState(LineChart2);

  function chart() {
    let dataPrice = [];
    let dataPrice2 = [];
    let dataPrice3 = [];

    api
      .get('/products')
      .then((res) => {
        for (let k = 0; k < 7; k++) {
          dataPrice.push(parseInt(res.data.data[k].price / 10));
          dataPrice3.push(parseInt(res.data.data[k].price / 100));
        }
        for (let k = 0; k < 3; k++) {
          dataPrice2.push(parseInt(res.data.data[k].price / 10));
        }
        setLineChartConfig({
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
              {
                label: 'My First dataset',
                fill: true,
                tension: 0.4,
                backgroundColor: 'rgba(20,122,214,0.4)',
                borderColor: '#147AD6',
                data: dataPrice,
              },
            ],
          },
          ...LineChart,
        });
        setPieChartConfig({
          data: {
            labels: ['Dado1', 'Dado2', 'Dado3'],
            datasets: [
              {
                label: 'My First dataset',
                fill: true,
                tension: 0.4,
                backgroundColor: ['#147AD6', 'red', 'green'],
                borderColor: ['#147AD6', 'red', 'green'],
                data: dataPrice2,
              },
            ],
          },
          ...PieChart,
        });
        setLineChart2Config({
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                backgroundColor: '#147AD6',
                borderColor: '#147AD6',
                pointStyle: 'circle',
                data: dataPrice,
              },
              {
                label: 'My Second dataset',
                fill: false,
                backgroundColor: 'green',
                borderColor: 'green',
                data: dataPrice3,
              },
            ],
          },
          ...LineChart2,
        });
        setBarChartConfig({
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
              {
                label: 'Casos totais no Nordeste',
                backgroundColor: '#FBBC56',
                borderColor: '#FBBC56',
                data: dataPrice,
              },
              {
                label: 'Casos entre trabalhadores da saúde',
                backgroundColor: '#071242',
                borderColor: '#071242',
                data: dataPrice3,
              },
            ],
          },
          ...BarChart,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(dataPrice);
  }

  React.useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <Background>
        <NavbarComponent />
        <InfoSession {...HomePresentationSessionData} />
      </Background>
      <PanelSession
        BarChartProps={barChartConfig}
        LineChartProps={LineChartConfig}
        PieChartProps={PieChartConfig}
        LineChart2Props={LineChart2Config}
      />
      <SupporterSession />
    </>
  );
}

export default HomePage;
