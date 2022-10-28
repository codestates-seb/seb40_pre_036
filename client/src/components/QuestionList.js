// import React, { useState, useCallback } from 'react';
import React from 'react';
import styled from 'styled-components';
// import QuestionsHeader from './QuestionsHeader';

// 질문 li
const List = styled.li`
  display: flex;
  border-bottom: 1px solid rgb(216, 217, 220);
  box-sizing: border-box;
  padding: 16px;
  margin-right: 20px;
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
const QuestionTitle = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;
  :visited {
    text-decoration: none;
  }
  font-size: 17px;
  vertical-align: top;
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
  /* width: 38px;
  height: 24px; */
  padding: 6px 6px;
  background-color: #e1ecf4;
  font-size: 12px;
  color: #39739d;
  border: none;
  border-radius: 2px;
  &:hover {
    background-color: #d0e3f1;
    color: #2c5877;
  }
  margin-right: 6px;
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
  :visited {
    text-decoration: none;
  }
  margin-right: 4px;
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

function QuestionsList() {
  // const [clicked, setClicked] = useState('Newest');

  // const onBtnClick = useCallback(
  //   e => {
  //     // console.log(e);
  //     setClicked(e.target.innerText);
  //     console.log(e.target);
  //     console.log(clicked);
  //   },
  //   [clicked],
  // );

  // const onBtnClick = useCallback(e => {
  //   // console.log(e);
  //   setClicked(e.target.innerText);
  //   console.log(e.target);
  //   console.log(clicked);
  // }, []);

  // list 컴포넌트 따로 만들어야 하는 지? todolist에서 확인, 아니면 나만의 아고라스테이츠어쩌고에서 화긴

  return (
    <List>
      <Counts>
        <div className="vote">
          <span className="count">0 </span>
          votes
        </div>
        <div>
          <span className="count">0 </span>
          answers
        </div>
        <div>
          <span className="count">2 </span>
          views
        </div>
      </Counts>
      <Question>
        <QuestionTitle href="https://stackoverflow.com/questions/74203351/git-commiting-to-different-remote-repos">
          Capture all network requests and full response data when loading a page in Chrome - not
          working well
        </QuestionTitle>
        <Content>
          I&apos;m abling to fetch some data but not all with the function describe in similar
          question and copied to this question. The function does exactly what it is meant to do.
          do. But my problem is with this ...
        </Content>
        <InfoContainer>
          <TagsContainer>
            <Tag>html</Tag>
            <Tag>css</Tag>
            <Tag>javascript</Tag>
          </TagsContainer>
          <PostInfo>
            <UserPic />
            <User href="https://stackoverflow.com/users/20315421/seyeon-kim">uxolrv</User>
            <Time>asked 46 secs ago</Time>
          </PostInfo>
        </InfoContainer>
      </Question>
    </List>
  );
}

export default QuestionsList;
