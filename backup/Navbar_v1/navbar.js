import React, { useState } from 'react';
import { Container, HamburguerMenu, Menu } from './styles.js';
import logoImg from '../../assets/images/saudedotrabalhador009.png';

export default function NavbarComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <img src={logoImg} alt='Saúde do Trabalhador e a Covid-19' />
            <HamburguerMenu onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </HamburguerMenu>
            <Menu status={isOpen}>
                <a href='/'>Início</a>
                <a href='/Dados'>Dados</a>
                <a href='/Metodologia'>Metodologia</a>
                <a href='/Parceiros'>Parceiros</a>
                <a href='/Contato'>Contato</a>
            </Menu>
        </Container>
    );
}
