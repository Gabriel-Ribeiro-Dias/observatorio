import React from 'react';
import {Container} from './styles.js';

export default function NavbarComponent(){

  return(
    <Container>
          <ul>
            <li>
              <a href="/" >Início</a>
              <a href="/Dados" >Dados</a>
              <a href="/Metodologia" >Metodologia</a>
              <a href="/Contato" >Contato</a>
            </li>
          </ul>
    </Container>
  )
}
