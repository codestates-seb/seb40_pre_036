import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import React from 'react';
import Footer from './components/Footer';
import Main from './Main';
import HeaderBefore from './components/HeaderBefore';
// import HeaderAfter from './components/HeaderAfter';

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
`;

const GlobalStyles = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <HeaderBefore />
      {/* <HeaderAfter /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
