import styled from 'styled-components';

export const PainelSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 5rem 0;
  background: #eef7fd;
  @media screen and (max-width: 414px) {
    padding: 3rem 0;
  }
  @media (max-width: 360px) {
    padding: 3rem 0;
  }
`;

export const PainelContainer = styled.div`
  display: flex;
  max-width: 1210px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PainelCard = styled.div`
  background: #ffff;
  width: 59rem;
  height: 45rem;
  border-radius: 2.3rem;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;

  @media screen and (max-width: 1199px) {
    width: 55rem;
  }
  @media screen and (max-width: 1139px) {
    width: 50rem;
  }
  @media screen and (max-width: 1039px) {
    width: 48rem;
  }
  @media screen and (max-width: 999px) {
    width: 43rem;
  }
  //899
  @media screen and (max-width: 899px) {
    width: 90%;
  }
`;

export const PainelCardGraph = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardHeading = styled.h1`
  font-size: 1.5rem;
  text-align: start;
  color: #071242;
  margin-bottom: 1.2rem;
`;

export const CardHeader = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
`;
export const Description = styled.div`
  font-size: 1.5rem;
`;

export const PainelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PainelHeading = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
  color: #071242;
`;

export const PainelCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
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
  min-height: 1.5rem;
  min-width: 1.5rem;
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
  font-size: 1rem;
  color: #071242;
  font-weight: 600;
`;

export const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: '#000';
`;

export const EmptyPanelCard = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50rem;
  border-radius: 2.3rem;
  border: 2px solid #fbbc56;
`;

export const ExceptionText = styled.p`
  font-weight: 500;
  color: #909090;
  margin-bottom: 1rem;
`;
