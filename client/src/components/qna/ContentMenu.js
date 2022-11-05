import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const PageMove = styled(Link)`
  text-decoration: none;
  color: inherit;
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

function ContentMenu({ path, user }) {
  // const [questionUserName, setQuestionUserName] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (user) {
      if (user.displayName !== 'undefined' && user.displayName !== null) {
        setUserName(user.displayName);
      }
    }
  }, [user]);

  return (
    <MenuUserContainer>
      <MenuContainer>
        <Menu>Share</Menu>
        <Menu>
          <PageMove to={`/${path}/edit`}>Edit</PageMove>
        </Menu>
        <Menu>Follow</Menu>
      </MenuContainer>
      <PostInfoBox>
        <Time className="post-time">asked 16 hours ago</Time>
        <UserInfo>
          <UserPic />
          <User className="post-owner">{userName}</User>
        </UserInfo>
      </PostInfoBox>
    </MenuUserContainer>
  );
}

export default ContentMenu;
