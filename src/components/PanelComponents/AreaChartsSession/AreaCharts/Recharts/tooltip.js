import styled from 'styled-components';

export const CustomTooltip = styled.div`
  background-color: #fff;
  border: 2px solid #909090;
  border-radius: 5px;
  padding: 1rem;
  text-align: start;
`;

export const LabelTextContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
`;
export const DataContainer = styled.div`
  display: flex;
  align-items: baseline;
`;
export const Title = styled.h1`
  font-size: 1.6rem;
  color: #6a6a6a;
`;

export const Text = styled.p`
  color: #6a6a6a;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const LabelDot = styled.div`
  height: 1.6rem;
  width: 1.6rem;
  background-color: ${({ boxColor }) => boxColor};
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const LabelValue = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-left: 1rem;
  color: '#000';
`;
