import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './Main';
import HeaderBefore from './components/HeaderBefore';
// import HeaderAfter from './components/HeaderAfter';
import Signup from './pages/Signup';

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
  font-family: Helvetica!important;
}
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
        {/* <HeaderAfter />  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
