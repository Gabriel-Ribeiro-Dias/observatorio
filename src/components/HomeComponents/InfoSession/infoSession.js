import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../styles/global';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Img,
  Heading,
  Subtitle,
  ImgWrapper,
  InfoContainer,
} from './styles';

function InfoSession({
  headline,
  description,
  buttonLabel,
  img,
  imgStart,
  start,
  alt,
}) {
  return (
    <InfoSec>
      <InfoContainer>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <Heading>{headline}</Heading>
              <Subtitle>{description}</Subtitle>
              <Link>
                <Button primary>{buttonLabel}</Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoContainer>
    </InfoSec>
  );
}

export default InfoSession;
