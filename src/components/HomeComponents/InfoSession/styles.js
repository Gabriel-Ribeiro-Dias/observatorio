import styled from 'styled-components';
import { Container } from '../../../styles/global';

export const InfoSec = styled.div`
  padding: 10rem 0;
  z-index: 999;
`;
export const InfoContainer = styled(Container)`
  @media screen and (max-width: 414px) {
    padding: 0 3rem;
  }
  @media (max-width: 360px) {
    padding: 0 3rem;
  }
  ${Container}
`;
export const InfoRow = styled.div`
  display: flex;
  margin: 0 -1.5rem -1.5rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 6rem;
  @media screen and (max-width: 768px) {
    padding-bottom: 6.5rem;
  }
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 380px;
`;
export const Heading = styled.h1`
  margin-bottom: 3rem;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 700;
  color: #071242;
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 3.5rem;
  color: #071242;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.4rem;
`;
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
