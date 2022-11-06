import React, { useState, useCallback } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SummaryTab from './Summary';
import QuestionsTab from './Questions';
import AnswerTab from './AnswerTab';

const Body = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Subnav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  color: #656b71;
`;
const Sub = styled.h5`
  cursor: pointer;
  padding: 5px 30px 5px 10px;
  color: #656b71;
  &:hover {
    background-color: #f1f2f3;
    border-radius: 30px;
  }
  &.clicked {
    background-color: #f1823b;
    border-radius: 30px;
    color: white;
    text-decoration: none;
  }
`;
const Subbody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;
function Acitivity({
  answers,
  answersLength,
  questions,
  questionList,
  tags,
  tagsLength,
  questionsLength,
}) {
  const [clicked, setClicked] = useState();
  const onClick = useCallback(e => {
    const text = e.target.innerText;
    setClicked(text);
  }, []);
  return (
    <Body>
      <Subnav>
        <Link to="summary" style={{ textDecoration: 'none' }}>
          <Sub className={clicked === 'Summary' ? 'clicked' : ''} onClick={onClick}>
            Summary
          </Sub>
        </Link>
        <Link to="answers" style={{ textDecoration: 'none' }}>
          <Sub className={clicked === 'Answer' ? 'clicked' : ''} onClick={onClick}>
            Answer
          </Sub>
        </Link>
        <Link to="questions" style={{ textDecoration: 'none' }}>
          <Sub className={clicked === 'Questions' ? 'clicked' : ''} onClick={onClick}>
            Questions
          </Sub>
        </Link>
        <Sub>Tags</Sub>
        <Sub>Articles</Sub>
        <Sub>Badges</Sub>
        <Sub>Following</Sub>
        <Sub>Bounties</Sub>
        <Sub>Reputation</Sub>
        <Sub>All actions</Sub>
        <Sub>Responses</Sub>
        <Sub>Votes</Sub>
      </Subnav>
      <Subbody>
        <Routes>
          <Route
            path="/*"
            element={
              <SummaryTab
                key={`1-${tagsLength}`}
                questions={questions}
                questionList={questionList}
                tags={tags}
                answers={answers}
                tagsLength={tagsLength}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <SummaryTab
                key={`1-${tagsLength}`}
                questions={questions}
                questionList={questionList}
                tags={tags}
                answers={answers}
                tagsLength={tagsLength}
              />
            }
          />
          <Route
            path="/answers"
            element={
              <AnswerTab
                key={`2-${answersLength}`}
                answers={answers}
                answersLength={answersLength}
              />
            }
          />
          <Route
            path="/questions"
            element={
              <QuestionsTab
                key={`2-${questionsLength}`}
                questionList={questionList}
                questions={questions}
                tags={tags}
                questionsLength={questionsLength}
              />
            }
          />
        </Routes>
      </Subbody>
    </Body>
  );
}

export default Acitivity;
