import React from 'react';
import api from '../../../services/api';

import { SimpleAreaChartPercent, StackedAreaChartPercent } from './AreaCharts';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  PainelSec,
  PainelHeading,
  PainelContainer,
  PainelCard,
  PainelCardGraph,
  CardHeading,
  PainelWrapper,
  PainelCardContent,
  CardHeader,
  Description,
  GraphLegend,
  GraphLegendWrapper,
  LabelBox,
  LegendLabel,
  LabelText,
  EmptyPanelCard,
  ExceptionText,
} from './styles';
import { processData } from './tasks';
function PanelComponentsAreaChartSession({
  LineRechartData,
  LineRechartDataII,
}) {
  const [data, setData] = React.useState(null); //Dados da api
  const [status, setStatus] = React.useState('pending');
  const [erro, setErro] = React.useState();
  const [queryYear, setQueryYear] = React.useState('2020');
  const [queryState, setQueryState] = React.useState('PE');
  const [statusMsg, setStatusMsg] = React.useState('');
  const windowWidth = window.innerWidth;
  React.useEffect(() => {
    api
      .get(`/get_total_casos_positivos/${queryYear}/${queryState}`)
      .then((result) => {
        setData(processData(result));
        setStatus('resolved');
      })
      .catch((err) => {
        setStatus('rejected');
        if (err.response) {
          console.error('HTTP:', err.response.status);
          setErro(err.response.status);
          setStatusMsg(err.response.data.status_mensage);
        } else {
          console.log(err);
        }
      });
  }, []);
  return (
    <PainelSec>
      <PainelWrapper>
        <PainelContainer>
          {status === 'pending' ? (
            <>
              <PainelCard>
                <PainelCardGraph>
                  <CircularProgress color={'primary'} />
                </PainelCardGraph>
              </PainelCard>
              <PainelCard>
                <PainelCardGraph>
                  <CircularProgress color={'primary'} />
                </PainelCardGraph>
              </PainelCard>
            </>
          ) : status === 'resolved' ? (
            <>
              <PainelCard>
                <PainelCardContent>
                  <CardHeader>
                    <CardHeading>
                      Nº DE TESTES POSITIVOS DE COVID-19 (
                      {data.data.data.text_description.last_data_year})
                    </CardHeading>
                    <Description>
                      No ano de{' '}
                      <strong>
                        {data.data.data.text_description.last_data_year}
                      </strong>
                      , foram registrados{' '}
                      <strong>
                        {' '}
                        {
                          data.data.data.text_description.total_geral_posi_test
                        }{' '}
                        testes positivos para COVID-19 entre não profissionais
                        da saúde{' '}
                      </strong>
                      e
                      <strong>
                        {' '}
                        {data.data.data.text_description.total_posi_prof_test} (
                        {data.data.data.text_description
                          .total_percent_posi_prof_test + '%'}
                        ) entre profissionais da saúde{' '}
                      </strong>{' '}
                      na região do <strong> {queryState}</strong>. Ao todo,
                      foram registrados{' '}
                      <strong>
                        {' '}
                        {data.data.data.text_description.total_posi_prof_test +
                          data.data.data.text_description
                            .total_geral_posi_test}{' '}
                        testes positivos para COVID-19
                      </strong>
                      .
                    </Description>
                  </CardHeader>
                  <PainelCardGraph>
                    <StackedAreaChartPercent
                      data={data.data.data_graphic.results}
                      windowWidth={windowWidth}
                    />
                  </PainelCardGraph>
                  <GraphLegend>
                    <GraphLegendWrapper>
                      <LegendLabel>
                        <LabelBox boxColor={'#ab4129'} />
                        <LabelText>
                          Total entre profissionais da saúde
                        </LabelText>
                      </LegendLabel>
                      <LegendLabel>
                        <LabelBox boxColor={'#F3AB9A'} />
                        <LabelText>
                          Total entre não profissionais da saúde
                        </LabelText>
                      </LegendLabel>
                    </GraphLegendWrapper>
                  </GraphLegend>
                </PainelCardContent>
              </PainelCard>
              <PainelCard>
                <PainelCardContent>
                  <CardHeader>
                    <CardHeading>
                      PORCENTAFEM DE CASOS DE COVID-19 ENTRE PROFISSIONAIS DA
                      SAÚDE ({data.data.data.text_description.last_data_year})
                    </CardHeading>
                    <Description>
                      No ano de{' '}
                      <strong>
                        {' '}
                        {data.data.data.text_description.last_data_year}
                      </strong>
                      , do número de testes positivos para COVID-19 foi
                      registrada uma{' '}
                      <strong>
                        {' '}
                        média percentual diária de{' '}
                        {
                          data.data.data.text_description
                            .average_percent_posi_test
                        }
                        %{' '}
                      </strong>{' '}
                      de{' '}
                      <strong>
                        testes positivos entre profissionais de saúde
                      </strong>{' '}
                      (média de{' '}
                      {parseInt(
                        data.data.data.text_description
                          .average_posi_test_prof_per_day
                      )}{' '}
                      testes positivos por dia) na região do{' '}
                      <strong>{queryState}</strong>.{' '}
                    </Description>
                  </CardHeader>
                  <PainelCardGraph>
                    <SimpleAreaChartPercent
                      data={data.data.data_graphic.results}
                      windowWidth={windowWidth}
                    />
                  </PainelCardGraph>
                </PainelCardContent>
              </PainelCard>
            </>
          ) : (
            <>
              {' '}
              <PainelCard>
                <PainelCardGraph>
                  <ExceptionText>Aconteceu um erro: {statusMsg}</ExceptionText>
                </PainelCardGraph>
              </PainelCard>
              <PainelCard>
                <PainelCardGraph>
                  <ExceptionText>Aconteceu um erro: {statusMsg}</ExceptionText>
                </PainelCardGraph>
              </PainelCard>
            </>
          )}
        </PainelContainer>
      </PainelWrapper>
    </PainelSec>
  );
}
export default PanelComponentsAreaChartSession;

/**
 * ******************* BACKUP *******************
 * 
 * CASO TENHA PROBLEMA NA API
 *  <>
              {' '}
              <EmptyPanelCard>
                <ExceptionText>
                  {LineRechartData.data.status_mensage}
                </ExceptionText>
              </EmptyPanelCard>
            </>
 * 
 * CASO TENHA PROBLEMA DE CONEXÃO
 * <>
              <EmptyPanelCard>
                <ExceptionText>
                  Parece que tivemos um problema, tente novamente mais tarde :(
                </ExceptionText>
                <ExceptionText>
                  Verifique sua conexão com a internet.
                </ExceptionText>
                <Button
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Recarregar página
                </Button>
              </EmptyPanelCard>
            </>
 */
