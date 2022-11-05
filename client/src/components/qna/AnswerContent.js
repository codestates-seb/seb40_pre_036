import React from 'react';
import styled from 'styled-components';
import EditorViewr from '../EditorViewer';
import QnASideBar from './QnASideBar';
import ContentMenu from './ContentMenu';

// const Title = styled.h2`
//   color: #232629;
//   font-size: 20px;
//   margin: 25px 0;
// `;

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

function AnswerContent({ id, content, user }) {
  return (
    <Container>
      <QnASideBar />
      <AnsContent>
        <EditorViewr content={content} />
        <ContentMenu user={user} path={`answer/${id}`} />
      </AnsContent>
    </Container>
  );
}

export default AnswerContent;
