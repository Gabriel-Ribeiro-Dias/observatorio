import React from 'react';
import { Container, Content } from './styles';
import { NavbarComponent } from '../../components/widgets';

export default function ContatoPage() {
  return (
    <>
      <Container>
        <NavbarComponent />
        <Content>
          <h1>Contato</h1>
        </Content>
      </Container>
    </>
  );
}
