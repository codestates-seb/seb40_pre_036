import React from 'react';
import styled from 'styled-components';
import Aside from '../components/Aside';
import Nav from '../components/Nav';
// import Content from '../components/Content';
// import QuestionsHeader from '../components/QuestionsHeader';
import QuestionsList from '../components/QuestionList';
import QuestionsHeader from '../components/QuestionsHeader';

const Allcontent = styled.div`
  display: flex;
`;

// li 태그를 담을 ul태그
const ListContainer = styled.ul`
  /* width: 751px; */
  display: flex;
  flex-direction: column;
  color: #232629;
  font-size: 13px;
`;

function Main() {
  return (
    <Allcontent>
      <Nav />
      <ListContainer>
        <QuestionsHeader />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
        <QuestionsList />
      </ListContainer>
      <Aside />
    </Allcontent>
  );
}

export default Main;
