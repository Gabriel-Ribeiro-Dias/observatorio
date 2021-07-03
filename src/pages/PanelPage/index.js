import React from 'react';
import {
  PanelsSession,
  MapSession,
  PresentationSession,
} from '../../components/PanelComponents';
import { NavbarComponent } from '../../components/widgets';
import { getApiData } from './utils';

function PanelPage() {
  return (
    <>
      <NavbarComponent pageName={'paineis'} />
      <PresentationSession />
      <MapSession />
      <PanelsSession />
    </>
  );
}

export default PanelPage;
