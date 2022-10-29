// 질문 상세 페이지의 질문 헤더 (질문 제목, 작성일, 수정일, 조회수)
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  /* height: 114px; */
  /* padding: 20px 20px 10px 20px; */
  padding-bottom: 16px;
  border-bottom: 1px solid #e3e6e8;
  font-size: 13px;
  color: #232639;
  line-height: 1.4;
`;

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: #3b4045;
  max-width: 1080px;
`;

const AskBtn = styled.button`
  min-width: 103px;
  height: 38px;
  color: white;
  background-color: rgb(0, 137, 254);
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.5);
  border-radius: 3px;
  white-space: nowrap;
  margin-left: 10px;
  &:hover {
    background-color: #0074cc;
  }
`;

const PostInfo = styled.div`
  color: #6a737c;
  display: flex;
  padding-top: 8px;
`;

const Time = styled.time`
  margin: 0 15px 0 6px;
  color: #232639;
`;

function QnAHeader() {
  return (
    <Header>
      <Title>
        Capture all network requests and full response data when loading a page in Chrome - not
        working well
        {/* Capture all network requests and full response data when loading a page in Chrome - not
    working well */}
        <AskBtn>Ask Question</AskBtn>
      </Title>
      <PostInfo>
        <div>
          Asked
          <Time>today</Time>
        </div>
        <div>
          Modified
          <Time>today</Time>
        </div>
        <div>
          Viewed
          <Time>3 times</Time>
        </div>
      </PostInfo>
    </Header>
  );
}

export default QnAHeader;