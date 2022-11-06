import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h2`
  margin: 10px 0;
`;
const Questions = styled.div`
  width: 100%;
`;
const Question = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-light-gray);
`;
const Top = styled.div`
  display: flex;
`;
const SubTop = styled.div`
  margin: 0 5px;
  padding: 5px;
`;
const AnswerCount = styled.div`
  background-color: #2f6f44;
  color: white;
  padding: 5px;
`;
const View = styled.div`
  color: var(--color-light-gray);
`;
const Bottom = styled.div``;
function QuestionsTab({ questions, questionList, questionsLength }) {
  console.log(questions);
  console.log(questionList);
  return (
    <Container>
      <Title>{questionsLength} Questions</Title>
      <Questions>
        {questions &&
          questions.map(q => (
            <Question>
              <Top>
                <SubTop>{q.votes} votes</SubTop>
                <AnswerCount>{q.answerCount} answers</AnswerCount>
                <View> {q.view} views</View>
              </Top>
              <Bottom>{q.title}</Bottom>
            </Question>
          ))}
      </Questions>
    </Container>
  );
}

export default QuestionsTab;
