import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import NoticiasPage from '../pages/NoticiasPage';
import AnalisesPage from '../pages/AnalisesPage';
import ContatoPage from '../pages/ContatoPage';
import ParceirosPage from '../pages/ParceirosPage';

import PainelTestPage from '../pages/PainelTestPage';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/Noticias' exact component={NoticiasPage} />
      <Route path='/Analises' exact component={AnalisesPage} />
      <Route path='/Contato' exact component={ContatoPage} />
      <Route path='/Parceiros' exact component={ParceirosPage} />
      <Route path='/PainelTest' exact component={PainelTestPage} />
    </Switch>
  );
}

export default Routes;
