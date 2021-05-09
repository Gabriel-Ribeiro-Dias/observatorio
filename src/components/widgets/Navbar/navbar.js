import React, { useState } from 'react';
import { Nav, NavContainer, MobileIcon, NavMenu } from './styles.js';
import logoImg from '../../../assets/images/saudedotrabalhador009.png';
import { AiOutlineMenu } from 'react-icons/ai';

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavContainer>
        <img src={logoImg} alt='Saúde do Trabalhador e a Covid-19' />
        <MobileIcon onClick={handleClick}>
          <AiOutlineMenu size={25} color={'#071242'} />
        </MobileIcon>
        <NavMenu status={isOpen}>
          <a onClick={handleClick} href='/'>
            Início
          </a>
          <a onClick={handleClick} href='/PainelTest'>
            Paineis
          </a>
          <a onClick={handleClick} href='/'>
            Análises
          </a>
          <a onClick={handleClick} href='/'>
            Notícias
          </a>
          <a onClick={handleClick} href='/Parceiros'>
            Parceiros
          </a>
          <a onClick={handleClick} href='/Contato'>
            Contato
          </a>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}
