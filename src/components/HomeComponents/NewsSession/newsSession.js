import React from 'react';
import { Button } from '../../../styles/global';

import {
  NewsSec,
  NewsContainer,
  NewsHeader,
  NewsWrapper,
  NewsCard,
  Image,
  Title,
  Date,
  Description,
} from './styles';

function NewsSession({ newsProps }) {
  const newsDataProps = [...newsProps];

  return (
    <NewsSec>
      <NewsContainer>
        <NewsHeader>Notícias</NewsHeader>
        <NewsWrapper>
          {newsDataProps.map((prop) => (
            <>
              <NewsCard>
                <Image src={prop.image} />
                <Title>{prop.title}</Title>
                <Date>{prop.date}</Date>
                <Description>
                  {prop.description.length > 182
                    ? prop.description.substr(0, 182) + '...'
                    : prop.description}
                </Description>
              </NewsCard>
            </>
          ))}
        </NewsWrapper>
        <Button primary>Ler mais notícias</Button>
      </NewsContainer>
    </NewsSec>
  );
}

export default NewsSession;
