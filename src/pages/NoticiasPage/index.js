import React from 'react';
import { Container, Content } from './styles';
import { NavbarComponent } from '../../components/widgets';

export default function NoticiasPage() {
  return (
    <>
      <Container>
        <NavbarComponent />
        <Content>
          <h1>Noticias</h1>
        </Content>
      </Container>
    </>
  );
}
