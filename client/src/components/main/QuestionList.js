// import React, { useState, useCallback } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TimeDiff from './TimeDiff';

// 질문 li
const List = styled.li`
  display: flex;
  border-bottom: 1px solid rgb(216, 217, 220);
  box-sizing: border-box;
  padding: 16px;
  margin-right: 20px;
  width: 751px;
`;

// votes, answers, views 수
const Counts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #6a737c;
  margin-right: 16px;
  line-height: 1.9;

  div {
    min-width: 100px;
    text-align: right;
  }

  .vote {
    color: #232629;
  }

  .count {
    font-weight: bold;
  }
`;

// 질문
const Question = styled.article`
  color: #3b4045;
  line-height: 1.3;
  width: 100%;
`;

// 질문 제목
const QuestionTitle = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;
  font-size: 17px;
  vertical-align: top;
  &:hover {
    color: #0a95ff;
  }
  &:visited {
    text-decoration: none;
  }
`;

// 질문 내용
const Content = styled.div`
  display: inline-block;
  color: #3b4045;
  margin-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.4;
  height: 2.8em;
  text-align: left;
  word-wrap: break-word; // 단어 단위로 줄바꿈
  display: -webkit-box; // 유연하게 height를 증감시킬 수 있는 플렉스 박스형태로 변환
  -webkit-line-clamp: 2; // 보여줄 줄 수
  -webkit-box-orient: vertical; // 플렉스 박스의 방향 설정(가로)
`;

// 태그 + 유저 + 작성일을 담은 컨테이너
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 9px 0 14px 0;
`;

// 태그 컨테이너
const TagsContainer = styled.div`
  display: flex;
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

// 유저정보 + 작성일
const PostInfo = styled.div`
  display: flex;
`;

const User = styled.a`
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;
  margin-right: 4px;
  :visited {
    text-decoration: none;
  }
  &:hover {
    color: #0a95ff;
  }
`;

// 유저 프로필사진
const UserPic = styled.img`
  width: 16px;
  height: 16px;
  background-color: gray;
  border-radius: 4px;
  margin-right: 4px;
`;

function QuestionsList({
  id,
  answerCount,
  content,
  votes,
  questionTags,
  createdAt,
  title,
  user,
  viewCount,
}) {
  return (
    <List>
      <Counts>
        <div className="vote">
          <span className="count">{votes} </span>
          votes
        </div>
        <div>
          <span className="count">{answerCount} </span>
          answers
        </div>
        <div>
          <span className="count">{viewCount} </span>
          views
        </div>
      </Counts>
      <Question>
        <QuestionTitle to={`${id}`}>{title}</QuestionTitle>
        <Content>{content}</Content>
        <InfoContainer>
          <TagsContainer>{questionTags && questionTags.map(tag => <Tag>{tag}</Tag>)}</TagsContainer>
          <PostInfo>
            <UserPic />
            <User>{user}</User>
            <TimeDiff createAt={createdAt} />
          </PostInfo>
        </InfoContainer>
      </Question>
    </List>
  );
}

export default QuestionsList;
