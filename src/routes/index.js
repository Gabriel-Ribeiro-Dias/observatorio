import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DadosPage from '../pages/DadosPage';
import MetodologiaPage from '../pages/MetodologiaPage';
import ContatoPage from '../pages/ContatoPage';

function Routes(){
  return(
    <Switch>
      <Route path='/' exact component={HomePage}/>
      <Route path='/Dados' exact component={DadosPage}/>
      <Route path='/Metodologia' exact component={MetodologiaPage}/>
      <Route path='/Contato' exact component={ContatoPage}/>
    </Switch>

  )

}

export default Routes;