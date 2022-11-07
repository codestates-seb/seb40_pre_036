import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import footerLogo from '../img/footerLogo.png';
import google from '../img/google.png';
import github from '../img/github.png';
import facebook from '../img/facebook.png';
import { loginActions } from '../store/reducer';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import Alert from '../components/Alert';

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

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const onChangeAccount = e => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  async function getLogin() {
    if (!emailRegex.test(account.email)) {
      Alert('error', 'The email is not a valid email address.');
    } else if (account.password.length < 4) {
      Alert('error', 'Please enter at least 4 characters for the password.');
    } else {
      try {
        await axios
          .post('http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/login', {
            email: account.email,
            password: account.password,
          })
          .then(data => {
            dispatch(loginActions.login());
            localStorage.clear();
            localStorage.setItem('accessToken', data.headers.authorization);
            localStorage.setItem('userEmail', data.data.email);
            navigate('/');
            Alert('success', 'Login Complete !');
          });
        // 일치하는 유저가 존재 X
      } catch (error) {
        throw new Error(error);
      }
    }
  }

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
          </InputLable>
          <InputLable>
            <div>
              <p>Password</p>
              <a href="/signup">Forgot password?</a>
            </div>
            <input
              name="password"
              type="password"
              value={account.password}
              onChange={onChangeAccount}
            />
          </InputLable>
          <LoginButton value="Login" onClick={() => getLogin()}>
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
