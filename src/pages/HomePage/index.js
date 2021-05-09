import React, { useEffect } from 'react';
import { Background } from '../../styles/global';
import {
  InfoSession,
  SupporterSession,
  PanelSession,
  AnalysisSession,
  NewsSession,
} from '../../components/HomeComponents';

import { NavbarComponent } from '../../components/widgets';
import {
  HomePresentationSessionData,
  AnalysisDataProps,
  AnalysisData,
  NewsDataProps,
} from './dados';
function HomePage() {
  return (
    <>
      <Background>
        <NavbarComponent />
        <InfoSession {...HomePresentationSessionData} />
      </Background>
      <AnalysisSession AnalysisProps={AnalysisDataProps} />
      <NewsSession newsProps={NewsDataProps} />
      <SupporterSession />
    </>
  );
}

export default HomePage;
