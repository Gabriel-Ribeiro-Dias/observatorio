import styled from 'styled-components';

export const Header = styled.div`
  padding: 39px 140px;
  max-width: 100%;
  align-items: center;
  display: flex;

  form{
    margin-left: auto;
  }

  button{
    text-align: left;
    font: normal normal 24px/30px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #FFFFFF;
    padding: 19.25px 28.5px;

    align-items: center;
    width: 304px;
    height: 60px;
    background: #FBBC56 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 10px #00000029;
    border-radius: 12px;
    border: 0;
    opacity: 1;
  };

  nav{
    ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    };

    a{
      text-align: left;
      font: normal normal medium 30px/38px;
      font-weight: 600;
      letter-spacing: 0px;
      color: #071242;
      opacity: 1;
      text-decoration: none;
      & + a{
        margin-left: 33px;
      };
    };

  
}`