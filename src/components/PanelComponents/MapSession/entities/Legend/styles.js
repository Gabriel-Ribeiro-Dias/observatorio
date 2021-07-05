import styled from 'styled-components';

export const LegendContainer = styled.div`
  display: none;
  align-items: stretch;
  width: 100%;
  border: solid #777 1px;
  border-bottom-left-radius: 2.3rem;
  border-bottom-right-radius: 2.3rem;
  @media screen and (max-width: 700px) {
    display: flex;
  }
`;
export const Legendblock = styled.span`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  background-color: ${(params) => {
    return params.color;
  }};
  border-bottom-left-radius: ${(params) => {
    return params.nth === 0 ? 2.3 + 'rem' : 0 + 'px';
  }};
  border-bottom-right-radius: ${(params) => {
    return params.nth === params.arrSize - 1 ? 2.3 + 'rem' : 0 + 'px';
  }};
`;
