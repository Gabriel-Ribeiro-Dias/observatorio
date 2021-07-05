import styled, { createGlobalStyle } from 'styled-components';
import imgHomePageBackground from '../assets/images/header.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    @media screen and (max-width: 768px) {
      font-size: 48%;
    };
    @media screen and (max-width: 414px) {
      font-size: 46%;
    };
    @media screen and (max-width: 375px) {
      font-size: 42%;
    };
    @media screen and (max-width: 360px) {
      font-size: 38%;
    };
    @media screen and (max-width: 320px) {
      font-size: 35%;
    };
  }

  #root{
    margin: 0 auto;
  }

  body{
    font-size: 1.6rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 100%;
    height: 100vh;
  }

  body,input,button{
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, a, Link{
    cursor: pointer;
  }
  
  `;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
`;

export const Background = styled.div`
  background: url(${imgHomePageBackground}) no-repeat center;
  background-size: 1750px;
  height: 750px;
  margin: 0 auto;
`;

export const Button = styled.button`
  border-radius: 1.2rem;
  min-width: 14rem;
  background: ${({ primary }) => (primary ? '#FBBC56' : '#071242')};
  white-space: nowrap;
  padding: 1rem 1rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  outline: none;
  border: none;

  &:hover {
    background: ${({ primary }) => (primary ? '#071242' : '#FBBC56')};
    transition: all 0.3s ease-out;
  }
`;
