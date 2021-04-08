import styled from 'styled-components';

export const Container = styled.div`
  align-items: stretch;
  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  padding: 0px 140px;
  width: 100%;
`

export const Sessao1 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 111px;
  margin-right: 12.7px;
  margin-bottom: 130px;
  
  div{
    align-items: center;
    width:  100%;
    max-width:  1639px;
    h1{
      text-align: left;
      font: normal normal 60px/60px;
      letter-spacing: 0px;
      color: #071242;
      opacity: 1;
    }
    p{
      text-align: left;
      font: normal normal 30px/38px;
      letter-spacing: 0px;
      color: #071242;
      opacity: 0.6;
      margin-top: 18px;
      margin-bottom: 29px;
    }

  }
`

export const Background1 = styled.div`
  width: 748px;
  height: 560px;
  background-color: black;
`

export const Sessao2 = styled.div`
  justify-content: center;
  align-items: center;
  width:  100%;
  padding: 109px 50px;
  background: #F2F2F299 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  > div{
    display: flex;
    div{
      margin-right: 42px;
      width:  100%;
      h1{
        text-align: left;
        font: normal normal 60px/60px;
        letter-spacing: 0px;
        color: #071242;
        opacity: 1;
      }

      p{
        text-align: left;
        font: normal normal 30px/38px;
        font-weight: 700;
        letter-spacing: 0px;
        color: #071242;
        opacity: 0.6;
      }
    }
  }
`

export const Background2 = styled.div`
  width: 748px;
  height: 550px;
  background: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foparana.com.br%2Fwp-content%2Fuploads%2F2019%2F03%2Feducacao-financeira.png&f=1&nofb=1');
  background-size: cover;
`