import React from 'react';
import styled from 'styled-components';
import EditorViewr from '../EditorViewer';
import AnswerSideBar from './AnswerSideBar';
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

function AnswerContent({ ansId, queId, content, user, setAnswerVotes, answerVotes, createdAt }) {
  console.log(`${ansId}번째 답변의 ${answerVotes}`);
  return (
    <Container>
      <AnswerSideBar
        id={ansId}
        // beforeVotes={votes}
        setAnswerVotes={setAnswerVotes}
        answerVotes={answerVotes}
      />
      <AnsContent>
        <EditorViewr content={content} />
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
