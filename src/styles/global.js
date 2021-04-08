import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root{
    margin: 0 auto;
  }

  body{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 100%;
  }

  body,input,button{
    font: 16px Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: bold;
  }

  
  
  `
