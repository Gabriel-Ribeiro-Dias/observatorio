import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

export const MapSessionContainer = styled.div`
  width: 100%;
  justify-content: center;
  padding: 2.5rem 3rem;
`;
export const MapSessionCardContainer = styled.div`
  max-width: 1210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
`;
export const MapSessionCard = styled.div`
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MapSessionCardDescriptionText = styled.p`
  color: #071242;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const MapSessionCardDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1040px;
  align-items: center;
  justify-content: center;
`;

export const MapSessionCardDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const MapSessionCardDescriptionHeader = styled.p`
  font-size: 2.2rem;
  color: #071242;
  font-weight: 500;
`;

export const MapContainerComponent = styled.div`
  height: 500px;
  width: 100%;
  border-radius: 2.3rem;
  background-color: grey;
  color: white;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;
export const ProgressCiculeLoading = styled(CircularProgress)`
  color: #fff;
  position: relative;
  margin-left: 10px;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: baseline;
  display: flex;
`;
