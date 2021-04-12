import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DadosPage from '../pages/DadosPage';
import MetodologiaPage from '../pages/MetodologiaPage';
import ContatoPage from '../pages/ContatoPage';
import ParceirosPage from '../pages/ParceirosPage';

function Routes(){
  return(
    <Switch>
      <Route path='/' exact component={HomePage}/>
      <Route path='/Dados' exact component={DadosPage}/>
      <Route path='/Metodologia' exact component={MetodologiaPage}/>
      <Route path='/Contato' exact component={ContatoPage}/>
      <Route path='/Parceiros' exact component={ParceirosPage}/>
    </Switch>

  )

}

export default Routes;