import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import React from 'react';
import Footer from './components/Footer';
import Main from './Main';
import HeaderBefore from './components/HeaderBefore';

const GlobalStyles = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <HeaderBefore />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
