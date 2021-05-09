import React from 'react';

import { BackgroundImg, Background, BackgroundImgContainer } from './styles';

function Backgroung({ imgSrc }) {
  return (
    <Background>
      <BackgroundImgContainer>
        <BackgroundImg src={imgSrc} />
      </BackgroundImgContainer>
    </Background>
  );
}

export default Backgroung;
