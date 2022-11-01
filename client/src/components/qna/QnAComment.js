import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 64px;
`;

const CommentContent = styled.div`
  color: #232629;
  font-size: 13px;
  /* border-top: 1px solid #e3e6e8; */
  padding: 10px 10px 10px 30px;
  line-height: 1.5;
  border-bottom: 1px solid #e3e6e8;
  display: flex;
  flex-direction: column;
  /* display: flex; */
  /* align-items: center; */
`;

const Info = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Icon = styled.svg`
  fill: gray;
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

const CommentForm = styled.form`
  width: 100%;
`;

const CommentInput = styled.textarea`
  width: 100%;
  text-decoration: none;
  border: none;
  resize: none;
  margin: 10px 2px;
  &:focus {
    outline: none;
    height: 50px;
    border: 0.5px solid rgb(190, 192, 195);
  }
  &::placeholder {
    color: rgb(190, 192, 195);
  }
`;

function QnAComment() {
  return (
    <Container>
      <CommentContent>
        <p>
          I don&apos;t think example.com is your real site. Whatever the real site is is probably
          detecting you as a bot and not sending certain requests, which is a normal occurrence.
          I&apos;d try all of the usual anti-bot tricks, like running headfully, adding a
          user-agent, stealth plugin, etc. –
          <Info>
            <User href="https://stackoverflow.com/users/20315421/seyeon-kim">uxolrv</User>
            <Time>9 hours ago</Time>
            <Icon aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
              <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z" />
            </Icon>
          </Info>
        </p>
      </CommentContent>
      <CommentForm>
        <CommentInput placeholder="Add a comment" />
      </CommentForm>
    </Container>
  );
}

export default QnAComment;
