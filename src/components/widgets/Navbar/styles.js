import styled from 'styled-components';
import { Container } from '../../../styles/global';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  top: 0;
  padding: 0 5rem;
  z-index: 999;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  ${Container};

  img {
    width: 15rem;
    margin-right: 48px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 635px) {
    margin-left: auto;
    cursor: pointer;
    display: flex;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 635px) {
    position: absolute;
    display: flex;
    top: 80px;
    right: 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: rgba(255, 255, 255, 0.97);
    overflow: hidden;
    box-shadow: 0px 10px 10px #00000029;
    flex-direction: column;
    width: 70%;
    max-width: 35rem;
    max-height: ${(props) => (props.status ? '300px' : 0)};
    transition: max-height 0.3s ease-in;
  }
`;
export const NavMenuLink = styled.a`
  padding: 16px 0;
  margin-right: 2rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => (props.Clicked ? '#071242' : 'grey')};
  text-decoration: none;
  cursor: ${(props) => (props.active ? 'pointer' : 'default')};
  @media (max-width: 768px) {
    font-size: 14px;
  }

  ${(props) =>
    props.active
      ? `&:hover {
    color: #df8c07;
    transform: scale(1.2);
    transition: all 0.3s ease-out;
  }`
      : ``}
`;
