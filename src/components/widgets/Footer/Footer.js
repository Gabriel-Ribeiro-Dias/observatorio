import React from 'react';
import { FaWpforms, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/all';

import logoImg from '../../../assets/images/saudedotrabalhador009.png';
import {
  FooterContainer,
  FooterContactUs,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  ProjectLogo,
  SocialIcons,
  SocialIconLink,
  FooterLinkItems,
  FooterLink,
  ContactLink,
  WebSiteRights,
  WebSiteRightsText,
  FooterLinksTitle,
  ContactIcon,
} from './styles';

function Footer() {
  return (
    <FooterContainer>
      <FooterContactUs>
        <ContactIcon>
          <FaWpforms size={30} color={'#071242'} />
        </ContactIcon>
        <FooterSubHeading>
          Contate-nos, preencha o formulário{' '}
          <ContactLink to='/'>clicando aqui!</ContactLink>
        </FooterSubHeading>
      </FooterContactUs>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <SocialMedia>
            <ProjectLogo src={logoImg} />
            <SocialIcons>
              <SocialIconLink target='_blank' aria-label='Facebook'>
                <FiFacebook size={16} color={'#90cbf0'} />
              </SocialIconLink>
              <SocialIconLink target='_blank' aria-label='Twitter'>
                <FiTwitter size={16} color={'#90cbf0'} />
              </SocialIconLink>
              <SocialIconLink target='_blank' aria-label='Instagram'>
                <FiInstagram size={16} color={'#90cbf0'} />
              </SocialIconLink>
            </SocialIcons>
          </SocialMedia>
          <FooterLinkItems>
            <FooterLink active={true} to='/'>
              Início
            </FooterLink>
            <FooterLink active={true} to='/Painel'>
              Paineis
            </FooterLink>
            <FooterLink>Análises</FooterLink>
            <FooterLink>Notícias</FooterLink>
            <FooterLink>Parceiros</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinksTitle>Dados</FooterLinksTitle>
            <FooterLink>Casos</FooterLink>
            <FooterLink>Projeções</FooterLink>
            <FooterLink>Vacinação</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <WebSiteRights>
        <WebSiteRightsText>
          © 2021, Saúde do Trabalhador – Todos os direitos reservados a UFPB
        </WebSiteRightsText>
      </WebSiteRights>
    </FooterContainer>
  );
}

export default Footer;
