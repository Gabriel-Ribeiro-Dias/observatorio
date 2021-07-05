import React from 'react';
import { MapLf } from '../../widgets';
import { processCovidData } from './tasks';
import api from '../../../services/api';
import { onEachState, style } from './utils';
import { MapLegend } from './Entities';

import {
  MapSessionContainer,
  MapSessionCardContainer,
  MapSessionCard,
  MapSessionCardDescriptionText,
  MapSessionCardDescriptionContent,
  MapSessionCardDescriptionHeader,
  MapSessionCardDescriptionContainer,
  MapContainerComponent,
  LoadingContainer,
  ProgressCiculeLoading,
} from './styles';

function PanelComponentsMapSession() {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState('pending');
  const [erro, setErro] = React.useState();
  const [statusMsg, setStatusMsg] = React.useState('');
  const [queryYear, setQueryYear] = React.useState('2020');
  const width = window.innerWidth;

  React.useEffect(() => {
    api
      .get(`/get_porcentagem_casos_por_uf/${queryYear}`)
      .then((result) => {
        setData(processCovidData(result));
        setStatus('resolved');
      })
      .catch((err) => {
        setStatus('rejected');
        alert('Infelizmente não foi possível carregar os dados do mapa');
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
    <>
      <MapSessionContainer>
        <MapSessionCardContainer>
          <MapSessionCardDescriptionContainer>
            <MapSessionCardDescriptionContent>
              <MapSessionCardDescriptionHeader>
                Mapa de percentual de casos de COVID-19 entre profissionais da
                saúde no <strong>Brasil</strong>{' '}
              </MapSessionCardDescriptionHeader>
            </MapSessionCardDescriptionContent>
          </MapSessionCardDescriptionContainer>
          <MapSessionCard>
            {status === 'pending' ? (
              <MapContainerComponent>
                <LoadingContainer>
                  carregando dados do mapa...
                  <ProgressCiculeLoading size={20} color={'inherit'} />
                </LoadingContainer>
              </MapContainerComponent>
            ) : status === 'resolved' ? (
              <>
                <MapLf
                  data={data}
                  onEachStateFunc={onEachState}
                  style={style}
                  screenW={width}
                />
                <MapLegend data={data} />
              </>
            ) : (
              <MapContainerComponent>
                Mapa indisponível: {statusMsg}
              </MapContainerComponent>
            )}
          </MapSessionCard>
        </MapSessionCardContainer>
      </MapSessionContainer>
    </>
  );
}

export default PanelComponentsMapSession;
