import React from 'react';
import {
  Container, 
  Content, 
  Sessao1, 
  Background1, 
  Sessao2,
  Background2,} from './styles';
import NavbarComponent from '../../components/navbar';
import ButtonComponent from '../../components/button';

function HomePage(){
  return(
    <>
      <Container>
        <NavbarComponent/>
        <Content>
          <Sessao1>
            <div>
              <h1>Asadfsdf sdf sdf sdfdfsadfsad gemgemwqwqr repoger wogmpoqwkçl
                ,f gergweom jq  jmndksfndsafsdfsdfs asg g qw wqeglms wçeofdf sadg</h1>

              <p>Asadfsdf sdf sdf sdfdfsadfsad gemgemwqwqr repoger wogmpoqwkçl
                ,f gergweom jq  jmndksfndsafsdfsdfs asg g qw wqeglms wçeofdf sadgZ</p>
              
              <ButtonComponent url="/Dados">DADOS</ButtonComponent>
            </div>
            <Background1 />     

          </Sessao1>

          <Sessao2>
            <div>
              <div>
                <h1>Asadfsdf sdf sdf sdfdfsadfsad gemgemwqwqr repoger wogmpoqwkçl
                    ,f gergweom jq  jmndksfndsafsdfsdfs asg g qw wqeglms wçeofdf sadg
                </h1>
                <p>Asadfsdf sdf sdf sdfdfsadfsad gemgemwqwqr repoger wogmpoqwkçl
                ,f gergweom jq  jmndksfndsafsdfsdfs asg g qw wqeglms wçeofdf sadgZ</p>
              </div>
              <Background2/>
            </div>
            <ButtonComponent url='/Dados'>
              EXPLORE NOSSOS DADOS
            </ButtonComponent>
          </Sessao2>
        </Content>
      </Container>
    </>
  )

}

export default HomePage;