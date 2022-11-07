import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DayDiff from './DayDiff';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 5px 0 16px 0;
  border-bottom: 1px solid #e3e6e8;
  font-size: 13px;
  color: #232639;
  line-height: 1.4;
`;

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  word-break: break-all;
  font-size: 26px;
  color: #3b4045;
`;

const AskBtn = styled.button`
  min-width: 103px;
  height: 38px;
  margin-left: 10px;
  border: 1px solid transparent;
  border-radius: 3px;
  white-space: nowrap;
  color: white;
  background-color: rgb(0, 137, 254);
  box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.5);

  &:hover {
    background-color: #0074cc;
  }
`;

const PostInfo = styled.div`
  display: flex;
  padding-top: 5px;
  color: #6a737c;
`;

const Time = styled.time`
  margin: 0 15px 0 6px;
  color: #232639;
`;

const PageMove = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function QnAHeader({ title, view, createdAt, updatedAt }) {
  return (
    <Header>
      <Title>
        {title}
        <PageMove to="/questions/ask">
          <AskBtn>Ask Question</AskBtn>
        </PageMove>
      </Title>
      <PostInfo>
        <div>
          Asked
          <Time>
            <DayDiff createdAt={createdAt} />
          </Time>
        </div>
        <div>
          Modified
          <Time>
            <DayDiff createdAt={updatedAt} />
          </Time>
        </div>
        <div>
          Viewed
          <Time>{view} times</Time>
        </div>
      </PostInfo>
    </Header>
  );
}

export default QnAHeader;
