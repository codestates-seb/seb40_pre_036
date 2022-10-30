import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HeaderBefore from './components/HeaderBefore';
// import HeaderAfter from './components/HeaderAfter';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Main from './pages/Main';
import QnA from './pages/QnA';
import SearchTag from './pages/SearchTag';
import MyPage from './pages/MyPage';
import UpdateQ from './pages/UpdateQ';
import UpdateA from './pages/UpdateA';
import Search from './pages/Search';
import CreateQ from './pages/CreateQ';
import SearchUser from './pages/SearchUser';
import Home from './pages/Home';

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
  font-family: Helvetica!important;
  letter-spacing: 0.2px;
}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <HeaderBefore />
        {/* <HeaderAfter /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/users/logout" element={<Logout />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/questions" element={<Main />} />
          <Route path="/questions/*" element={<QnA />} />
          <Route path="/tags" element={<SearchTag />} />
          <Route path="/users/*" element={<MyPage />} />
          <Route path="/questions/*/edit" element={<UpdateQ />} />
          <Route path="/answer/*/edit" element={<UpdateA />} />
          <Route path="/search" element={<Search />} />
          <Route path="/questions/ask" element={<CreateQ />} />
          <Route path="/users" element={<SearchUser />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
