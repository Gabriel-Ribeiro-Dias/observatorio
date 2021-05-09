import React, { useEffect } from 'react';
import axios from 'axios';
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
    const baseUrl = 'https://gorest.co.in/public-api/products';
    let dataLabels = [];
    let dataPrice = [];

    axios
      .get(baseUrl)
      .then((res) => {
        for (let k = 0; k < 7; k++) {
          dataLabels.push(res.data.data[k].name);
          dataPrice.push(parseInt(res.data.data[k].price / 10));
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
