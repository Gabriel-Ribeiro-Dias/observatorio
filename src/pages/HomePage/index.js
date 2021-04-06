import React from 'react';
import {Header} from './styles'

function HomePage(){
  return(
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <a href="#" >Início</a>
              <a href="#" >Dados</a>
              <a href="#" >Metodologia</a>
              <a href="#" >Contato</a>
            </li>
          </ul>
        </nav>
        <form action="#" method="get">
          <button type='submit' >Voltar para o site</button>
        </form>
        
      </Header>
    </>
  )

}

export default HomePage;