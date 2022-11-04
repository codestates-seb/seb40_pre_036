import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import HeaderBefore from './components/HeaderBefore';
import HeaderAfter from './components/HeaderAfter';
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
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const isLogin = useSelector(state => state.isLogin);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        {isLogin ? <HeaderAfter /> : <HeaderBefore />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/users/logout" element={<Logout />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/questions" element={<Main />} />
          <Route path="/questions/*" element={<QnA />} />
          <Route path="/tags" element={<SearchTag />} />
          <Route path="/users/:id" element={<MyPage />} />
          <Route path="/questions/:id/edit" element={<UpdateQ />} />
          <Route path="/answer/:id/edit" element={<UpdateA />} />
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
