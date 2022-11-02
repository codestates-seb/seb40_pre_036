import React from 'react';
import styled from 'styled-components';
import EditorViewr from '../EditorViewer';
import QnASideBar from './QnASideBar';
import ContentMenu from './ContentMenu';

const Title = styled.h2`
  color: #232629;
  font-size: 20px;
  margin: 25px 0;
`;

const Container = styled.div`
  display: flex;
`;

const AnsContent = styled.div`
  color: #232629;
  font-size: 15px;
  border-bottom: 1px solid #e3e6e8;
`;

function AnswerContent() {
  return (
    <>
      <Title>1 Answer</Title>
      <Container>
        <QnASideBar />
        <AnsContent>
          <EditorViewr />
          <ContentMenu path="/answer/*/edit" />
        </AnsContent>
      </Container>
    </>
  );
}

export default AnswerContent;
