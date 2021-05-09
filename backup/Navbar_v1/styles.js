import styled from 'styled-components';

export const Container = styled.nav`
    padding: 1rem 8rem;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    @media (max-width: 910px) {
        padding: 1rem 2rem;
    }

    img {
        width: 150px;
        margin-right: 2rem;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 717px) {
        position: absolute;
        top: 4rem;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.97);
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${(props) => (props.status ? '300px' : 0)};
        transition: max-height 0.3s ease-in;
    }
    a {
        padding: 1rem 0.8rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        color: #071242;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const HamburguerMenu = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-left: auto;
    span {
        height: 2px;
        width: 25px;
        background: #071242;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 717px) {
        display: flex;
    }
`;
