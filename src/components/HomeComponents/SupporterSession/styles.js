import styled from 'styled-components';

export const SupportersSessionContainer = styled.div`
  width: 100%;
  justify-content: center;
  padding: 10rem 2rem;
`;

export const SupportersSessionImgsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 584px) {
    flex-direction: column;
  }
`;

export const SupporterSessionHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #071242;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const SupporterImgUfpb = styled.img`
  height: 15rem;
  margin: 1.6rem;
`;
export const SupporterImgCNPQ = styled.img`
  width: 17rem;
  margin: 1.6rem;
`;

export const SupporterImgMinis = styled.img`
  width: 30rem;
  margin: 1.6rem;
`;

export const SupporterSessionLink = styled.a`
  place-items: center;
`;
