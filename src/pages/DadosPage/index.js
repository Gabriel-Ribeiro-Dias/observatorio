import React from 'react';
import NavbarComponent from '../../components/navbar'
import {Container, Content, MapContainer, DadosContainer} from './styles'
export default function DadosPage(){
  return(
    <>
    <Container>
      <NavbarComponent/>
      <Content>
        <h1>Dados</h1>
      </Content>
      
    </Container>
      
      
    </>
  );
}