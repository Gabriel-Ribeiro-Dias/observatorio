import React from 'react';
import Routes from './routes';
import { Footer } from './components/widgets/';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
//import ScrollToTop from './components/widgets/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
