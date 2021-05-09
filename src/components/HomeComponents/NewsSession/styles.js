import styled from 'styled-components';

export const NewsSec = styled.div`
  padding: 8rem 3rem;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
`;
export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NewsHeader = styled.h1`
  align-items: center;
  font-size: 2.5rem;
  color: #071242;
  margin-bottom: 5rem;
`;
export const NewsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1110px;
  margin-bottom: 5rem;
  flex-wrap: wrap;
`;
export const NewsCard = styled.a`
  cursor: pointer;
  text-decoration: none;
  width: 30rem;
  height: 34rem;
  margin: 1rem 1rem;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 16rem;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  color: #071242;
  margin-bottom: 1rem;
`;
export const Date = styled.p`
  font-size: 1.4rem;
  color: #071242;
  margin-bottom: 1rem;
`;
export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #071242;
`;
