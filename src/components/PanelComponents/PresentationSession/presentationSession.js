import React from 'react';
import { processData } from './tasks';
import api from '../../../services/api';

import {
  PresentationContainer,
  PresentationContent,
  PresentationDescription,
  PresentationHeader,
  PresentationHeadling,
  ProgressCiculeLoading,
  LoadingContainer,
} from './styles';

function PresentationSession() {
  const [data, setData] = React.useState();
  const [status, setStatus] = React.useState('pending');
  const [erro, setErro] = React.useState();
  const [statusMsg, setStatusMsg] = React.useState('');

  React.useEffect(() => {
    api
      .get(`/get_informacoes_gerais`)
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
    <PresentationContainer>
      <PresentationContent>
        <PresentationHeadling>
          <PresentationHeader>
            Casos de covid-19 em profissionais de saúde
          </PresentationHeader>
        </PresentationHeadling>
        {status === 'pending' ? (
          <LoadingContainer>
            <PresentationDescription>
              Carregando dados...
              <ProgressCiculeLoading size={20} color={'inherit'} />
            </PresentationDescription>
          </LoadingContainer>
        ) : status === 'resolved' ? (
          <PresentationDescription>
            Até o dia <strong>{data.data.day}</strong> no Brasil, foram
            notificados{' '}
            <strong>
              {data.data.data.total_cases_professionals_of_health}
            </strong>{' '}
            casos de covid-19 em profissionais de saúde, que representa{' '}
            <strong>
              {data.data.data.percentage_cases_health_professionals}%
            </strong>{' '}
            do total de casos confirmados. Deste total,{' '}
            <strong>
              {data.data.data.total_cases_professionals_of_health_30_days}
            </strong>{' '}
            foram notificados nos último 30 dias, tendo uma diferença de{' '}
            <strong>
              {data.data.data.percentage_difference_professional_health_cases}%
            </strong>{' '}
            em relação ao mês anterior.
          </PresentationDescription>
        ) : (
          <PresentationDescription>Ocorreu um erro :(</PresentationDescription>
        )}
      </PresentationContent>
    </PresentationContainer>
  );
}

export default PresentationSession;
