// 질문 상세 페이지의 질문 본문
import React from 'react';
import styled from 'styled-components';
import QnASideBar from './QnASideBar';
import ContentMenu from './ContentMenu';
import EditorViewr from '../EditorViewer';

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const QueContent = styled.div`
  color: #232629;
  font-size: 15px;
  border-bottom: 1px solid #e3e6e8;
`;

const TagsContainer = styled.div`
  display: flex;
  margin: 30px 0;
`;

// 태그
const Tag = styled.button`
  padding: 6px 6px;
  margin-right: 6px;
  background-color: #e1ecf4;
  font-size: 12px;
  color: #39739d;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #d0e3f1;
    color: #2c5877;
  }
`;

function QuestionContent() {
  return (
    <Container>
      <QnASideBar />
      <QueContent>
        <EditorViewr />
        <TagsContainer>
          <Tag>node.js</Tag>
          <Tag>puppeteer</Tag>
        </TagsContainer>
        <ContentMenu path="*/edit" />
      </QueContent>
    </Container>
  );
}

export default QuestionContent;
