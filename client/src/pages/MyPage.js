import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { faUser, faCake, faClock, faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import Acitivity from '../components/mypages/Acitivity';
import Settings from '../components/mypages/Settings';

const Main = styled.div`
  display: flex;
  margin: var(--margin-main-side);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 70%;
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Tabs = styled.div`
  display: flex;
`;
const Tab = styled.div`
  cursor: pointer;
  text-decoration: none;
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 0.8rem;
  color: #656b71;
  &:hover {
    background-color: #f1f2f3;
    border-radius: 30px;
  }
  &.clicked {
    background-color: #f1823b;
    border-radius: 30px;
    color: white;
  }
  &.clicked::after {
    background-color: #f1823b;
    border-radius: 30px;
    color: white;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
  justify-content: center;
`;
const H1 = styled.h1`
  font-size: 2rem;
  margin-left: 10px;
`;
const Detail = styled.div`
  display: flex;
  margin: 15px 5px;
  font-size: 0.7rem;
  color: #9ba2a9;
  cursor: pointer;
  white-space: nowrap;
`;
const FAI = styled.div`
  margin: 0 5px 0 10px;
`;
const FAI2 = styled.div`
  margin-right: 5px;
`;
const Buttons = styled.div`
  display: flex;
  height: 30px;
`;
const Button = styled.button`
  text-decoration: none;
  margin: 0 5px;
  color: #9ba2a9;
  background-color: white;
  border-color: #9ba2a9;
  border: 1px solid;
  cursor: pointer;
  font-size: 0.7rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 7px 10px;
  &:hover {
    background-color: #f8f9f9;
  }
`;
const Left = styled.div`
  display: flex;
`;

function Mypage() {
  const [clicked, setClicked] = useState();
  const initialToken = localStorage.getItem('accessToken');
  const [user, setUser] = useState({});
  const [answers, setAnswers] = useState([]);
  console.log(user);
  // const qId = answers.map(answer => answer.questionId);
  // console.log(qId);
  const onClick = useCallback(e => {
    const text = e.target.innerText;
    setClicked(text);
  }, []);
  const mypage = () => {
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: initialToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.data);
        setAnswers(data.data.answers);
      });
  };

  useEffect(() => {
    mypage();
  }, []);
  return (
    <Main>
      <Nav />
      <Content>
        <Head>
          <Left>
            <FontAwesomeIcon icon={faUser} size="6x" />
            <Details>
              <H1>{user.displayName}</H1>
              <Detail>
                <FAI>
                  <FontAwesomeIcon icon={faCake} />
                </FAI>
                Member for 3 days
                <FAI>
                  <FontAwesomeIcon icon={faClock} />
                </FAI>
                Last seen this week
                <FAI>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </FAI>
                Visited 3 days, 3 consecutive
              </Detail>
            </Details>
          </Left>
          <Buttons>
            <Link to="settings" style={{ textDecoration: 'none' }}>
              <Button>
                <FAI2>
                  <FontAwesomeIcon icon={faPencil} size="1x" />
                </FAI2>
                Edit profile
              </Button>
            </Link>
            <Button>
              <FAI2>
                <FontAwesomeIcon icon={faStackExchange} size="1x" color="#5a8dc5" />
              </FAI2>
              Network profile
            </Button>
          </Buttons>
        </Head>
        <Tabs>
          <Tab className={clicked === 'profile' ? 'clicked' : ''} onClick={onClick}>
            profile
          </Tab>
          <Link to="activity" style={{ textDecoration: 'none' }}>
            <Tab className={clicked === 'Activity' ? 'clicked' : ''} onClick={onClick}>
              Activity
            </Tab>
          </Link>
          <Tab className={clicked === 'saves' ? 'clicked' : ''} onClick={onClick}>
            saves
          </Tab>
          <Link to="settings" style={{ textDecoration: 'none' }}>
            <Tab className={clicked === 'Settings' ? 'clicked' : ''} onClick={onClick}>
              Settings
            </Tab>
          </Link>
        </Tabs>
        <Routes>
          <Route
            path="/*"
            element={
              <Acitivity
                questions={user.questions}
                tags={user.tags && user.tags.map(el => el.tagName)}
                questionList={user.questions && user.questions.map(el => el.title)}
                answerList={user.questions && user.questions.map(el => el.title)}
              />
            }
          />
          <Route
            path="/activity"
            element={
              <Acitivity
                user={user}
                tags={user.tags && user.tags.map(el => el.tagName)}
                questionList={user.questions && user.questions.map(el => el.title)}
              />
            }
          />
          <Route path="/settings/*" element={<Settings user={user} />} />
        </Routes>
      </Content>
    </Main>
  );
}

export default Mypage;
