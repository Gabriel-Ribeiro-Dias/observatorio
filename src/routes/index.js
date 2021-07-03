import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import {HomePage, NoticiasPage, AnalisesPage, ContatoPage, ParceirosPage, PanelPage } from '../pages';

import HomePage from '../pages/HomePage/homePage';
import NoticiasPage from '../pages/NoticiasPage';
import AnalisesPage from '../pages/AnalisesPage';
import ContatoPage from '../pages/ContatoPage';
import ParceirosPage from '../pages/ParceirosPage';
import PanelPage from '../pages/PanelPage';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/Noticias' exact component={NoticiasPage} />
      <Route path='/Analises' exact component={AnalisesPage} />
      <Route path='/Contato' exact component={ContatoPage} />
      <Route path='/Parceiros' exact component={ParceirosPage} />
      <Route path='/Painel' exact component={PanelPage} />
    </Switch>
  );
}

export default Routes;
