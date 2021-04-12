import React from 'react';
import NavbarComponent from '../../components/navbar'
import {Container, Content} from './styles'
export default function ContatoPage(){
  return(
    <>
      <Container>
        <NavbarComponent/>
        <Content>
          <h1>Contato</h1>
        </Content>
      </Container>
      
    </>
  );
}
