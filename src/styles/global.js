import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root{
    justify-content: center;
    margin: 0 auto;
  }

  body{
    background:'#FFFFFF 0% 0% no-repeat padding-box';
    opacity: 1;
  }

  body,input,button{
    font: 16px Montserrat, sans-serif;
  }

  button{
    cursor: pointer;
  }

  
  
  `
