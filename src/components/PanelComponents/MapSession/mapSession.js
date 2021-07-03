import React from 'react';
import { MapLf } from '../../widgets';
import { processCovidData } from './tasks';
import api from '../../../services/api';
import { onEachState, style } from './utils';
import { MapLegend } from './entities';

import {
  MapSessionContainer,
  MapSessionCardContainer,
  MapSessionCard,
  MapSessionCardDescriptionText,
  MapSessionCardDescriptionContent,
  MapSessionCardDescriptionHeader,
  MapSessionCardDescriptionContainer,
} from './styles';

function PanelComponentsMapSession() {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState('pending');
  const [erro, setErro] = React.useState();
  const [statusMsg, setStatusMsg] = React.useState('');
  const width = window.innerWidth;

  React.useEffect(() => {
    api
      .get(`/get_porcentagem_casos_por_uf/2020`)
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
              <div>carregando dados do mapa...</div>
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
              <div>Mapa indisponível: {statusMsg}</div>
            )}
          </MapSessionCard>
        </MapSessionCardContainer>
      </MapSessionContainer>
    </>
  );
}

export default PanelComponentsMapSession;
