// import React, { useState, useCallback } from 'react';
import React from 'react';
import styled from 'styled-components';
// import QuestionsHeader from './QuestionsHeader';
import { Link } from 'react-router-dom';

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
  /* margin-top: 15px; */
  /* padding-right: 60px; */
  line-height: 1.3;
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
  color: #3b4045;
  margin-top: 7px;
`;

// 태그 + 유저 + 작성일을 담은 컨테이너
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 5px;
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
  justify-content: flex-end;
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

// 업로드 시간
const Time = styled.time`
  color: #6a737c;
`;

function QuestionsList({ answerCount, body, tags, score, time, title, user, viewCount }) {
  return (
    <List>
      <Counts>
        <div className="vote">
          <span className="count">{score} </span>
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
        <QuestionTitle to="*">{title}</QuestionTitle>
        <Content>{body}</Content>
        <InfoContainer>
          <TagsContainer>{tags && tags.map(tag => <Tag>{tag}</Tag>)}</TagsContainer>
          <PostInfo>
            <UserPic />
            <User href="https://stackoverflow.com/users/20315421/seyeon-kim">{user}</User>
            <Time>asked {time} secs ago</Time>
          </PostInfo>
        </InfoContainer>
      </Question>
    </List>
  );
}

export default QuestionsList;
