import React from 'react';
import { Container, Content, MapContainer, DadosContainer } from './styles';
import { NavbarComponent } from '../../components/widgets';

export default function DadosPage() {
  return (
    <>
      <Container>
        <NavbarComponent />
        <Content>
          <h1>Dados</h1>
        </Content>
      </Container>
    </>
  );
}
