import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './Main';
import HeaderBefore from './components/HeaderBefore';

import Signup from './pages/Signup';

const GlobalStyles = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <HeaderBefore />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
