import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../../styles/global';

export const AnalysisSec = styled.div`
  padding: 8rem 3rem;
  width: 100%;
  background-color: #90cbf026;
  margin: 0 auto;
  display: none;
`;
export const AnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AnalisysHeader = styled.h1`
  align-items: center;
  font-size: 2.5rem;
  color: #071242;
  margin-bottom: 5rem;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  color: #071242;
  margin-bottom: 3rem;
`;
export const AnalysisCard = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  background-color: #fff;
  padding: 3rem 3rem;
  width: 30rem;
  box-shadow: 0px 1px 8px #00000029;
  border-radius: 0.8rem;
  margin: 1rem 1rem;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 767px) {
    margin: 1rem 1rem;
  }
`;
export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #071242;
`;
export const AnalysisWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1110px;
  margin-bottom: 5rem;
  flex-wrap: wrap;
`;
