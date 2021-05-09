import styled from 'styled-components';
import { Container } from '../../../styles/global';

export const BackgroundImg = styled.img`
  position: absolute;
  top: -3rem;
  width: 100%;

  z-index: -999;
`;

export const BackgroundImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
`;

export const Background = styled.div`
  width: 100vw;
  margin: 0;
`;
