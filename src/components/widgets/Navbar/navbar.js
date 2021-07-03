import React, { useState } from 'react';
import {
  Nav,
  NavContainer,
  MobileIcon,
  NavMenu,
  NavMenuLink,
} from './styles.js';
import logoImg from '../../../assets/images/saudedotrabalhador009.png';
import { AiOutlineMenu } from 'react-icons/ai';

export default function WidgetsNavbar({ pageName }) {
  const [isOpen, setIsOpen] = useState();
  const [isClicked, setIsClicked] = useState();
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavContainer>
        <img src={logoImg} alt='Saúde do Trabalhador e a Covid-19' />
        <MobileIcon onClick={handleClick}>
          <AiOutlineMenu size={25} color={'#071242'} />
        </MobileIcon>
        <NavMenu status={isOpen}>
          <NavMenuLink
            Clicked={pageName === 'home'}
            onClick={handleClick}
            href='/'
            active={true}
          >
            Início
          </NavMenuLink>
          <NavMenuLink
            Clicked={pageName === 'paineis'}
            onClick={handleClick}
            href='/Painel'
            active={true}
          >
            Painéis
          </NavMenuLink>
          <NavMenuLink Clicked={pageName === 'analises'} onClick={handleClick}>
            Análises
          </NavMenuLink>
          <NavMenuLink Clicked={pageName === 'noticias'} onClick={handleClick}>
            Notícias
          </NavMenuLink>
          <NavMenuLink Clicked={pageName === 'parceiros'} onClick={handleClick}>
            Parceiros
          </NavMenuLink>
          <NavMenuLink Clicked={pageName === 'contato'} onClick={handleClick}>
            Contato
          </NavMenuLink>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}
