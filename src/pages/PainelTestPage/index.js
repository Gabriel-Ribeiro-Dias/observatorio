import React from 'react';
import Highcharts from 'highcharts';
import api from '../../services/api';
import { PanelSession } from '../../components/HomeComponents';
import { DataBarChart, DataLineChart, data } from './chartConfig';
import { CgOpenCollective } from 'react-icons/cg';

// import { Container } from './styles';

function PainelTestPage() {
  const [barChartConfig, setBarChartConfig] = React.useState({});
  const [LineChartConfig, setLineChartConfig] = React.useState({});
  const [lineRechartConfig, setLineRechartConfig] = React.useState({});
  const [barRechartConfig, setBarRechartConfig] = React.useState({});

  async function chart() {
    let data = [];
    let death = [];
    let rechartLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'jun'];
    let rechartData = [];

    const baseURL =
      '/caso/data/?state=PB&state=MA&state=PI&state=CE&state=RN&state=PE&state=AL&state=SE&state=BA';

    await api
      .get(baseURL)
      .then((res) => {
        console.log(res.data.results);
        for (let k = 10; k < 16; k++) {
          data.push(res.data.results[k].confirmed);
          death.push(res.data.results[k].deaths);

          rechartData.push({
            name: rechartLabels[k - 10],
            uv: res.data.results[k].confirmed,
            pv: res.data.results[k].deaths,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
    setLineChartConfig(DataLineChart(death));
    setBarChartConfig(DataBarChart(data, data));
    setBarRechartConfig(rechartData);
    setLineRechartConfig(rechartData);
  }

  React.useEffect(() => {
    chart();
    console.log(Highcharts);
  }, []);

  return (
    <>
      <PanelSession
        BarChartJSProps={barChartConfig}
        LineChartJSProps={LineChartConfig}
        LineRechartData={barRechartConfig}
        BarRechartData={lineRechartConfig}
      />
    </>
  );
}

export default PainelTestPage;
