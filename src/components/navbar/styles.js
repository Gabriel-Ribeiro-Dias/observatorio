import styled from 'styled-components';

export const Container = styled.nav`
    padding: 39px 140px;
    width: 100%;
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
`