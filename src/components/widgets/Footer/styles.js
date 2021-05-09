import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterContactUs = styled.section`
  display: flex;
  width: 100%;
  background-color: #90cbf07a;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.6rem;
  color: #071242;
  @media screen and (max-width: 498px) {
    align-items: flex-start;
  }
`;
export const ContactIcon = styled.div`
  @media screen and (max-width: 441px) {
    display: none;
  }
`;
export const FooterSubHeading = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-left: 5px;
`;
export const ContactLink = styled(Link)`
  color: #071242;
  &:hover {
    color: #df8c07;
    transition: all 0.3s ease-out;
  }
`;
export const FooterLinksContainer = styled.div`
  width: 100%;
  background-color: #90cbf0;
  display: flex;
  justify-content: center;
  padding: 1.9rem;
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
export const SocialMedia = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  @media screen and (max-width: 820px) {
    margin-right: 4rem;
    margin-bottom: 4rem;
  }
`;
export const ProjectLogo = styled.img`
  max-width: 190px;
  margin-bottom: 1.5rem;
`;
export const SocialIcons = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const SocialIconLink = styled.a`
  margin-right: 10px;
  background-color: #071242;
  border-radius: 50%;
  box-shadow: 0px 5px 10px #00000029;
  height: 25px;
  width: 25px;
  padding: 4px 4px;
`;
export const FooterLinksTitle = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 10px;
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #071242;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLink = styled(Link)`
  color: #071242;
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768) {
    font-weight: 400;
  }
  &:hover {
    color: #df8c07;
    transform: scale(1.2);
    transition: 0.3s ease-out;
  }
`;
export const WebSiteRights = styled.div`
  justify-content: center;
  align-items: center;
  background-color: #07124230;
  width: 100%;
  padding: 2.5rem 0;
`;
export const WebSiteRightsText = styled.p`
  color: #071242;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;
