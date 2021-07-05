import styled from 'styled-components';
import backgroundImage from '../../../assets/images/satelite.jpeg';
import { CircularProgress } from '@material-ui/core';

export const PresentationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.7rem 3rem;
  position: relative;
  background-color: #071242;
`;
export const Background = styled.div`
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
  background-blend-mode: luminosity;
  position: absolute;
  filter: blur(1.5px);
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const PresentationContent = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const PresentationDescription = styled.p`
  color: #fff;
  font-weight: 500;
  width: 70%;
  font-size: 1.8rem;
  @media screen and (max-width: 1039px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    text-align: justify;
    width: 100%;
  } ;
`;
export const PresentationHeader = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-right: 1.5rem;
`;
export const PresentationHeadling = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: start;
  @media screen and (max-width: 700px) {
    align-items: center;
    justify-content: center;
  }
  margin-bottom: 1.5rem;
`;
export const PresentationIcon = styled.img`
  height: 4.3rem;
  width: 4.3rem;
`;

export const ProgressCiculeLoading = styled(CircularProgress)`
  color: #fff;
  position: relative;
  margin-left: 10px;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  justify-content: start;
  align-items: baseline;
`;
