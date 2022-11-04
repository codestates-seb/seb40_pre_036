import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signupActions } from '../store/signreducer';
// icon
import bookmark from '../img/bookmark.png';
import msg from '../img/msg.png';
import trophy from '../img/trophy.png';
import vote from '../img/vote.png';
import google from '../img/google.png';
import github from '../img/github.png';
import facebook from '../img/facebook.png';

function onChange(value) {
  console.log('Captcha value:', value);
}
const Container = styled.div`
  width: 100%;
  background-color: #f1f2f3;
  min-height: 1000px;
`;

const Content = styled.div`
  width: 80%;
  margin: 0 10%;
  display: flex;
`;

const LeftBox = styled.div`
  min-width: 600px;
  width: 50%;
  height: 500px;
  position: relative;
`;

const LeftContent = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 60%;
  height: 300px;
  h1 {
    font-size: 1.5rem;
  }
  p {
    margin: 30px 0;
  }
  img {
    width: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }
`;
const Introduce = styled.div`
  span {
    font-size: 0.8rem;
    color: #6a737c;
  }
  a {
    font-size: 0.8rem;
    color: #0074cc;
  }
`;

const RightBox = styled.div`
  min-width: 600px;
  width: 45%;
  height: 500px;
  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  margin: 5px;
  width: 50%;
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
  width: 50%;
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
`;

const ReCaptchaBox = styled.div`
  margin: 20px 0;
  width: 100%;
  background: #f1f2f3;
  border: 1px solid gray;
  height: 150px;
`;

const ConcentBox = styled.div`
  display: flex;
  p {
    line-height: 16px;
    color: gray;
    font-size: 12px;
  }
  input {
    margin-bottom: 60px;
  }
`;

const SignUpButton = styled.button`
  background-color: #0a95ff;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 10px 0;
  color: white;
  cursor: pointer;
`;

const ConsentGuide = styled.div`
  font-size: 12px;
  margin-top: 20px;
  a {
    color: blue;
    text-decoration: none;
  }
`;

function Signup() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.isLogin);

  // const navigate = useNavigate();

  const [account, setAccount] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const onChangeAccount = e => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  async function getSignup() {
    try {
      await axios
        .post('http://ec2-52-79-243-235.ap-northeast-2.compute.amazonaws.com:8080/users/signup', {
          displayName: account.displayName,
          email: account.email,
          password: account.password,
        })
        .then(data => {
          dispatch(signupActions.register());
          localStorage.clear();
          localStorage.setItem('accessToken', data.headers.authorization);
          // navigate('/questions');
          alert('회원가입 성공');
          // console.log(data.headers.authorization);
        });
      // 일치하는 유저가 존재 X
    } catch (error) {
      if (error.response.status === 401) {
        alert('이메일 혹은 비밀번호가 일치하지 않습니다.');
        console.log(error);
      } else {
        alert(error.response.status);
        console.log(error);
      }
    }
  }
  console.log('회원 가입 여부', isLogin);
  return (
    <Container>
      <Content>
        <LeftBox>
          <LeftContent>
            <h1>Join the Stack Overflow community</h1>
            <p>
              <img src={msg} alt="msg" />
              Get unstuck — ask a question
            </p>
            <p>
              <img src={vote} alt="vote" />
              Unlock new privileges like voting and commenting
            </p>
            <p>
              <img src={bookmark} alt="bookmark" />
              Save your favorite tags, filters, and jobs
            </p>
            <p>
              <img src={trophy} alt="trophy" />
              Earn reputation and badges
            </p>
            <Introduce>
              <span>Collaborate and share knowledge with a private group for FREE.</span>
              <br />
              <a href="/">Get Stack Overflow for Teams free for up to 50 users.</a>
            </Introduce>
          </LeftContent>
        </LeftBox>
        <RightBox>
          <ButtonBox>
            <Button bgColor="white" color="black" borderColor="gray" hoverColor="#f1f1f1">
              <img src={google} alt="google" />
              Sign up with Google
            </Button>
            <Button
              color="white"
              bgColor="rgba(1,1,1)"
              borderColor="rgba(0,0,0)"
              hoverColor="black"
            >
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
              <p>Display name</p>
              <input
                name="displayName"
                type="text"
                value={account.displayName}
                onChange={onChangeAccount}
              />
            </InputLable>
            <InputLable>
              <p>email</p>
              <input name="email" type="email" value={account.email} onChange={onChangeAccount} />
            </InputLable>
            <InputLable>
              <p>password</p>
              <input
                name="password"
                type="password"
                value={account.password}
                onChange={onChangeAccount}
              />
              <span>
                Passwords must contain at least eight characters, including at least 1 letter and 1
                number.
              </span>
            </InputLable>
            <ReCaptchaBox>
              <ReCAPTCHA sitekey="6LcOeLIiAAAAABmA33CeBxPdph5w2tSBxlDbRUvL" onChange={onChange} />
            </ReCaptchaBox>
            <ConcentBox>
              <input type="checkbox" name="concent" value="false" />
              <p>
                Opt-in to receive occasional product updates, user research invitations, company
                announcements, and digests.
              </p>
            </ConcentBox>
            <SignUpButton type="submit" onClick={() => getSignup()}>
              Sign in
            </SignUpButton>
            <ConsentGuide>
              <p>
                By clicking “Sign up”, you agree to our
                <a href="/"> terms of service, privacy policy and cookie policy</a>
              </p>
            </ConsentGuide>
          </InputForm>
        </RightBox>
      </Content>
    </Container>
  );
}

export default Signup;
