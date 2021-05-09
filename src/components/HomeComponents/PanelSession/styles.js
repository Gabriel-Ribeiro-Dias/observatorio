import styled from 'styled-components';
import { Container } from '../../../styles/global';

export const PainelSec = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-top: 5rem;
  @media screen and (max-width: 414px) {
    padding: 0 3rem;
  }
  @media (max-width: 360px) {
    padding: 0 3rem;
  }
  ${Container}
`;

export const PainelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8rem;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PainelCard = styled.div`
  background: #f2f2f2;
  width: 45rem;
  height: 50rem;
  border-radius: 12px;
  margin: 0.5rem;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 40rem;
    height: 45rem;
    &:hover {
      transform: none;
    }
  }
`;

export const PainelCardGraph = styled.div`
  width: 90%;
  display: flex;
  flex-direction: ${({ legendTop }) =>
    legendTop ? 'column' : 'column-reverse'};
  align-items: center;
`;

export const PainelCardHeading = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #071242;
  margin-bottom: 2rem;
`;

export const PainelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PainelHeading = styled.h2``;

export const PainelCardContent = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  height: 50rem;
  padding: 2.5rem;
  align-items: center;
  color: #071242;
`;

export const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ top }) => (top ? '2rem' : 0)};
  margin-top: ${({ top }) => (top ? 0 : '2rem')};
`;
export const GraphLegendWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 370px;
`;
export const GraphTitle = styled.p`
  font-size: 1.5rem;
  color: #7c828a;
  font-weight: 500;
`;
export const LabelBox = styled.div`
  min-height: 1rem;
  min-width: 1rem;
  background-color: ${({ boxColor }) => boxColor};
  border-radius: 50%;
  margin-right: 1rem;
`;
export const LegendLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;
export const LabelText = styled.p`
  font-size: 1.2rem;
  color: #071242;
  font-weight: 500;
`;

export const GraphContainer = styled.div`
  width: 100%;
`;
