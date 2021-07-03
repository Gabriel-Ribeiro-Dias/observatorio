import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const MapContainerComponent = styled(MapContainer)`
  height: 500px;
  width: 100%;
  border-radius: 2.3rem;
  background-color: rgba(0, 0, 0, 1);
  @media screen and (max-width: 700px) {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;
