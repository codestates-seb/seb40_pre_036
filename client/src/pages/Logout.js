import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ask from '../img/logout/ask.png';
import math from '../img/logout/math.png';
import server from '../img/logout/server.png';
import stackapp from '../img/logout/stackapp.jfif';
import stackchange from '../img/logout/stackchange.png';
import superuser from '../img/logout/superuser.png';
import stackover from '../img/logout/stackover.png';
import { loginActions } from '../store/reducer';
import Alert from '../components/Alert';

const Container = styled.div`
  background-color: #f1f2f3;
  width: 100%;
  min-height: 800px;
  box-sizing: border-box;
`;

const LogoutTitle = styled.h1`
  padding-top: 100px;
  font-size: 1.3rem;
  line-height: 30px;
  color: #232629;
  text-align: center;
`;

const Content = styled.div`
  min-width: 300px;
  width: 18%;
  margin: 40px auto;
`;

const LogoutBox = styled.div`
  background-color: white;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 5px;
  width: 100%;
  padding: 20px;
`;

const LinkBox = styled.ul`
  border-bottom: 1px solid #d6d6d6;
  padding: 10px 0;
  img {
    width: 30px;
    vertical-align: middle;
  }
  a {
    font-size: 1rem;
    color: #0074cc;
    text-decoration: none;
  }
`;

const DeviceLogoutBox = styled.div`
  margin: 20px 0;
  font-size: 0.8rem;
  color: #0c0d0e;
`;

const LoginChoiceBox = styled.div`
  display: flex;
  width: 60%;
`;

const LogoutButton = styled.button`
  background-color: #0a95ff;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 10px 10px;
  margin: 10px 0;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: #0084cc;
  }
`;

const CancelButton = styled.button`
  background-color: white;
  color: #0074cc;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(187, 244, 253, 0.3);
  }
`;

const Explanation = styled.h2`
  margin: 20px 0;
  color: #6a737c;
  font-size: 0.8rem;
`;

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(loginActions.logout());
    localStorage.clear();
    Alert('success', 'Logout Complete !');
    navigate('/');
  }
  return (
    <Container>
      <LogoutTitle>
        Clicking “Log out” will log you out of the following
        <br /> domains on this device:
      </LogoutTitle>
      <Content>
        <LogoutBox>
          <LinkBox>
            <li>
              <img src={ask} alt="askubuntu.com" />
              <a href="askubuntu.com">askubuntu.com</a>
            </li>
            <li>
              <img src={math} alt="mathoverflow.net" />
              <a href="mathoverflow.net">mathoverflow.net</a>
            </li>
            <li>
              <img src={server} alt="serverfault.com" />
              <a href="serverfault.com">serverfault.com</a>
            </li>
            <li>
              <img src={stackapp} alt="stackapps.com" />
              <a href="stackapps.com">stackapps.com</a>
            </li>
            <li>
              <img src={stackchange} alt="stackexchange.com" />
              <a href="stackexchange.com">stackexchange.com</a>
            </li>
            <li>
              <img src={stackover} alt="stackoverflow.com" />
              <a href="stackoverflow.com">stackoverflow.com</a>
            </li>
            <li>
              <img src={superuser} alt="superuser.com" />
              <a href="superuser.com">superuser.com</a>
            </li>
          </LinkBox>
          <DeviceLogoutBox>
            <input type="checkbox" />
            <span>Log out on all devices</span>
          </DeviceLogoutBox>
          <LoginChoiceBox>
            <LogoutButton onClick={() => logoutHandler()}>Log out</LogoutButton>
            <CancelButton>Cancel</CancelButton>
          </LoginChoiceBox>
          <Explanation>
            If you’re on a shared computer, remember to log out of your Open ID provider (Facebook,
            Google, Stack Exchange, etc.) as well.
          </Explanation>
        </LogoutBox>
      </Content>
    </Container>
  );
}

export default Logout;
