import React from 'react';
import styled from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.h2`
  margin: 10px 0;
`;
const Questions = styled.div``;
const QuestionContainer = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid var(--color-light-gray);
  justify-content: space-between;
`;
const Question = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
`;
const Votes = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 5px;
  font-size: var(--font-size-base);
`;
const AnswerCount = styled.div`
  display: flex;
  align-items: center;
  background-color: #2f6f44;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  font-size: var(--font-size-base);
`;
const View = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: var(--color-font-gray);
  font-size: var(--font-size-base);
`;
const QTitle = styled(Link)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  color: #0074cc;
  &:hover {
    color: #0a95ff;
  }
  &:visited {
    text-decoration: none;
  }
`;
const Tags = styled.div`
  display: flex;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  margin-right: 10px;
  /* padding: 0 8px; */
  padding-right: 5px;
  border-radius: 5px;
  background-color: #e1ecf4;
  white-space: nowrap;
  color: #4a80a7;
  font-size: 0.7rem;
  padding: 5px 10px;
`;
const CreateDate = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--color-font-gray);
  font-size: var(--font-size-base);
`;
function AnswerTab({ answers, answersLength }) {
  console.log(answers);
  return (
    <Container>
      <Title>{answersLength} Answers</Title>
      <Questions>
        {answers &&
          answers.map(a => (
            <QuestionContainer>
              <Question>
                <Top>
                  <Votes>{a.vote} votes</Votes>
                </Top>
                <QTitle
                  to={`/questions/${a.questionId}`}
                  key={`${a.questionId.toString()}-${a.answerId}`}
                >
                  {a.answerContent.slice(0, 35)}
                </QTitle>
              </Question>
              <CreateDate>
                answered {a.createdAt.slice(0, 10)} at {a.createdAt.slice(11, 16)}
              </CreateDate>
            </QuestionContainer>
          ))}
      </Questions>
    </Container>
  );
}

export default AnswerTab;
