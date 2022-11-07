import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 64px;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 30px;
  line-height: 1.5;
  border-bottom: 1px solid #e3e6e8;
  color: #232629;
  font-size: 13px;
`;

const Info = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Icon = styled.svg`
  fill: gray;
`;

const User = styled.a`
  margin: 0 6px;
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;

  &:visited {
    text-decoration: none;
  }
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
          <Info>
            <User>coding lee</User>
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
