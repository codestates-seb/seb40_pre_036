import React from 'react';
import styled from 'styled-components';
import Aside from '../components/Aside';
import Nav from '../components/Nav';
import QuestionsList from '../components/main/QuestionList';
import QuestionListHeader from '../components/main/QuestionListHeader';

const Allcontent = styled.div`
  display: flex;
`;

// li 태그를 담을 ul태그
const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  color: #232629;
  font-size: 13px;
`;

function Main() {
  return (
    <Allcontent>
      <Nav path="Questions" />
      <ListContainer>
        <QuestionListHeader />
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
