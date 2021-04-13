import styled from 'styled-components';

export const Container = styled.div`
  align-items: stretch;
  justify-content: center;
  height: 100vh;
`

export const Content = styled.div`
  padding: 0px 8rem;
  width: 100%;
  @media(max-width: 910px){
      padding: 1rem 1.5rem;
    }
  @media(max-width: 718px){
    padding: 1rem 1.5rem;
  }
`

export const Sessao1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 130px;
  flex-wrap: wrap-reverse;
  
  @media(max-width: 414px){
    margin-top: 0.5rem;
  }

  div{
    align-items: center;
  
    h1{
      text-align: left;
      font-size: 1.9rem;
      letter-spacing: 0px;
      color: #071242;
      @media(max-width: 360px){
        font-size: 1.2rem;
      }
      @media(max-width: 375px){
        font-size: 1.4rem;
    }
      @media(max-width: 414px){
          font-size: 1.5rem;
      }
    }
    p{
      text-align: left;
      font-size: 1em;
      letter-spacing: 0px;
      color: #071242;
      margin-top: 18px;
      margin-bottom: 29px;
      @media(max-width: 360px){
        font-size: 0.8rem;
      }
      @media(max-width: 375px){
        font-size: 1rem;
      }
    }

  }
`

/**
export const Background1 = styled.div`
  width: 1px;
  height: 1px;
  background-color: black;
  @media(max-width: 360px){
    height:20rem;
  }
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
 */