import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background:'#FFFFFF 0% 0% no-repeat padding-box';
    opacity: 1;
  }

  button{
    cursor: pointer;
  }
`