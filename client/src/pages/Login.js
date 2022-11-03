import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import footerLogo from '../footerLogo.png';
import google from '../img/google.png';
import github from '../img/github.png';
import facebook from '../img/facebook.png';

import { loginAction } from '../store/reducer';

const Container = styled.div`
  background-color: #f1f2f3;
  width: 100%;
  min-height: 800px;
  box-sizing: border-box;
`;

const Content = styled.div`
  min-width: 300px;
  width: 15%;
  margin: 0 auto;
  padding-top: 5%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: 50px;
  }
`;

const ButtonBox = styled.div`
  margin: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px 0;
  margin: 5px 0;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  border: 1px solid ${props => props.borderColor};
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  &:hover {
    background-color: ${props => props.hoverColor};
  }
  img {
    width: 20px;
    vertical-align: middle;
    margin: 0 3px;
  }
`;

const InputForm = styled.div`
  background-color: white;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 5px;
  width: 100%;
  padding: 20px;
`;

const InputLable = styled.div`
  padding: 5px;
  p {
    font-weight: bold;
    font-size: 1rem;
    padding: 10px 0;
  }
  input {
    width: 100%;
    padding: 10px 0;
    &:focus {
      box-shadow: 0 0 5px 5px rgba(28, 107, 138, 0.3);
    }
  }
  span {
    color: #999;
    font-size: 12px;
    margin-top: 10px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    a {
      margin-top: 10px;
      color: #0074cc;
      text-decoration: none;
      font-size: 12px;
    }
  }
`;

const LoginButton = styled.button`
  background-color: #0a95ff;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 10px 0;
  color: white;
  cursor: pointer;
`;

const SignupGuide = styled.div`
  text-align: center;
  font-size: 12px;
  margin: 40px 0;
  p {
    margin: 20px 0;
  }
  a {
    color: #0074cc;
    text-decoration: none;
  }
`;

function Login() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.isLogin);
  const navigate = useNavigate();

  const [isCorrect, setIsCorrect] = useState(false);
  console.log(isLogin, isCorrect);
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const onChangeAccount = e => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });

    console.log('account', account);
    console.log('account.email', account.email);
    console.log('account.password', account.password);
  };
  // useCallback(() => {
  //   // const text = e.target.innerText;
  //   setClicked(path);
  // }, [clicked]);

  const getLogin = useCallback(() => {
    // DB에 일치하는 유저가 있는 지 확인
    axios.get('http://localhost:3001/users').then(res => {
      console.log('res', res);
      const correctUser = res.data.filter(
        user => user.email === account.email && user.password === account.password,
      );
      console.log('correctUser', correctUser);
      // 일치하는 유저가 존재
      if (correctUser) {
        console.log('email은?', account.email);
        console.log('pw?', account.password);
        setIsCorrect(true);
        // 일치한다면, 로그인 요청
        axios.post('http://localhost:3001/login', account).then(data => {
          dispatch(loginAction.login());
          localStorage.clear();
          localStorage.setItem(data.accessToken);
          navigate('/questions');
          alert('성공!!');
        });
        // 일치하는 유저가 존재 X
      } else {
        setIsCorrect(false);
      }
    });
  }, []);

  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src={footerLogo} alt="로고" />
          </a>
        </Logo>
        <ButtonBox>
          <Button
            bgColor="white"
            color="black"
            borderColor="hsl(210deg 8% 85%)"
            hoverColor="#f1f1f1"
          >
            <img src={google} alt="google" />
            Sign up with Google
          </Button>
          <Button color="white" bgColor="rgba(1,1,1)" borderColor="rgba(0,0,0)" hoverColor="black">
            <img src={github} alt="github" />
            Sign up with Github
          </Button>
          <Button bgColor="#385499" color="white" borderColor="#385499" hoverColor="#00108A">
            <img src={facebook} alt="facebook" />
            Sign up with Facebook
          </Button>
        </ButtonBox>
        <InputForm>
          <InputLable>
            <p>Email</p>
            <input name="email" type="text" value={account.email} onChange={onChangeAccount} />
            {/* <input type="text" value={email} onChange={e => setEmail(e.target.value)} /> */}
          </InputLable>
          <InputLable>
            <div>
              <p>Password</p>
              <a href="/">Forgot password?</a>
            </div>
            <input
              name="password"
              type="password"
              value={account.password}
              onChange={onChangeAccount}
            />
            {/* <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> */}
          </InputLable>
          <LoginButton value="Login" onClick={getLogin}>
            Log in
          </LoginButton>
        </InputForm>
        <SignupGuide>
          <p>
            Don’t have an account?<a href="/"> Sign up</a>
          </p>
          <p>
            Are you an employer?<a href="/"> Sign up on Talen</a>
          </p>
        </SignupGuide>
      </Content>
    </Container>
  );
}

export default Login;
