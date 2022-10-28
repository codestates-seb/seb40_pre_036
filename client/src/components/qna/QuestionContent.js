// 질문 상세 페이지의 질문 본문
import React from 'react';
import styled from 'styled-components';

const QueContent = styled.div`
  color: #232629;
  font-size: 15px;
  border-bottom: 1px solid #e3e6e8;
`;

const Paragraph = styled.p`
  /* max-width: 730px; */
  margin-bottom: 10px;
  line-height: 1.6;
  /* word-wrap: break-word; */
`;

const User = styled.a`
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;
  :visited {
    text-decoration: none;
  }
  margin: 0 6px;
  &.post-owner {
    margin: 0;
  }
`;

const Time = styled.time`
  color: #9199a1;
  margin-right: 5px;
  &.post-time {
    color: #6a737c;
    margin-bottom: 3px;
  }
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

const MenuUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 35px;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const Menu = styled.span`
  color: #6a737c;
  font-size: 13px;
  margin-right: 10px;
  cursor: pointer;
`;

const PostInfoBox = styled.div`
  width: 200px;
  height: 67px;
  background-color: rgb(220, 233, 246);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  padding: 8px 8px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1px;
`;

const UserPic = styled.img`
  width: 32px;
  height: 32px;
  background-color: gray;
  border-radius: 4px;
  margin-right: 4px;
`;

function QuestionContent() {
  return (
    <>
      {/* <QnAContainer> */}
      <QueContent>
        <Paragraph>
          I&apos;m abling to fetch some data but not all with the function describe in similar
          question and copied to this question.
        </Paragraph>
        <Paragraph>
          The function does exactly what it is meant to do. But my problem is with this method the
          desired request not appear on to screen.
        </Paragraph>
        <Paragraph>
          The desired request should respond with products JSON information. and it didn&apos;t.
          when I surf to the same URL without coding I can see that request with full responed and I
          can see in UI all products arrived from this request. But when doing it in this method and
          (```headless: false&apos; &apos;) the UI shows all excluding the products data. What am I
          missing here?
        </Paragraph>
        <Paragraph>
          I understand that I can select the remote I wish to &quot;push&quot; to:
        </Paragraph>
        <Paragraph>git push origin main</Paragraph>
        <Paragraph>
          But taking a step back from the push, when I add and commit, these aren&apos;t tied back
          to a repo. So is there a way I can group commit changes for specific repos?
        </Paragraph>
        <Paragraph>For example,</Paragraph>
        <Paragraph>git add README.md git commit -am &quot;FIRST COMMIT&quot;</Paragraph>
        <Paragraph>
          git add test1234.html git add test5678.html git commit -am &quot;SECOND COMMIT&quot;
        </Paragraph>
        <Paragraph>
          Can I push both of these commits to the &quot;origin&quot; repo and just the first commit
          to the &quot;prod&quot; repo?
        </Paragraph>
        <TagsContainer>
          <Tag>node.js</Tag>
          <Tag>puppeteer</Tag>
        </TagsContainer>
        <MenuUserContainer>
          <MenuContainer>
            <Menu>Share</Menu>
            <Menu>Edit</Menu>
            <Menu>Follow</Menu>
          </MenuContainer>
          <PostInfoBox>
            <Time className="post-time">asked 16 hours ago</Time>
            <UserInfo>
              <UserPic />
              <User className="post-owner">uxolrv</User>
            </UserInfo>
          </PostInfoBox>
        </MenuUserContainer>
      </QueContent>
      {/* </QnAContainer> */}
    </>
  );
}

export default QuestionContent;
