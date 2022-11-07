import React from 'react';
import styled from 'styled-components';
import EditorViewer from '../EditorViewer';
import AnswerSideBar from './AnswerSideBar';
import ContentMenu from './ContentMenu';

const Container = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const AnsContent = styled.div`
  color: #232629;
  font-size: 15px;
  border-bottom: 1px solid #e3e6e8;
  width: 100%;
`;

function AnswerContent({ ansId, queId, content, user, createdAt }) {
  return (
    <Container>
      <AnswerSideBar id={ansId} />
      <AnsContent>
        <EditorViewer content={content} />
        <ContentMenu
          user={user}
          path={`answer/${ansId}`}
          createdAt={createdAt}
          ansId={ansId}
          queId={queId}
          target="answered"
        />
      </AnsContent>
    </Container>
  );
}

export default AnswerContent;
