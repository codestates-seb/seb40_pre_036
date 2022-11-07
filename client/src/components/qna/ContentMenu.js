import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import TimeDiff from '../main/TimeDiff';

const User = styled.a`
  margin: 0 6px;
  text-decoration: none;
  color: #0074cc;

  :visited {
    text-decoration: none;
  }
  &.post-owner {
    margin: 0;
  }
`;

const Time = styled.div`
  margin-right: 5px;
  margin-bottom: 4px;
  font-size: 12px;
  color: #6a737c;
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

  &.delete {
    cursor: pointer;
  }
`;

const PageMove = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PostInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 67px;
  border-radius: 4px;
  padding: 8px 8px;
  font-size: 13px;
  background-color: rgb(220, 233, 246);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1px;
`;

const UserPic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border-radius: 4px;
  margin-right: 4px;
  color: rgb(250, 250, 250, 0.95);
  background-color: #0074cc;
`;

const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 25px 20px 20px 20px;
  border: 1px solid #f4b4b6;
  border-radius: 5px;
  background-color: #fdf2f2;
  color: #3b4045;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);

  div {
    span {
      color: #de4f54;
      font-weight: bold;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  button {
    font-weight: bold;
    margin: 10px 60px 0;
    border: none;
    background: none;
    &:hover {
      color: #d0393e;
    }
  }
`;

function ContentMenu({ path, user, createdAt, target, ansId, queId }) {
  const [userName, setUserName] = useState('');
  const [delClicked, setDelClicked] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);
  const token = localStorage.getItem('accessToken');
  const loginUserEmail = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.displayName !== 'undefined' && user.displayName !== null) {
        setUserName(user.displayName);
      }
      if (user.email !== undefined && user.email !== null) {
        setIsAuthor(user.email === loginUserEmail);
      }
    }
  }, [user, ansId, queId]);

  const handleDelete = () => {
    setDelClicked(true);
  };

  const handleChoice = e => {
    // 유저가 삭제를 원치 않을 때
    if (e.target.innerText === 'No') {
      setDelClicked(false);

      // 삭제 target이 question일 때
    } else if (target === 'asked') {
      fetch(
        `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${queId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: token,
          },
        },
      )
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          navigate(`/`);
        })
        .catch(error => {
          throw new Error(error);
        });

      // 삭제 target이 answer일 때
    } else if (target === 'answered') {
      fetch(
        `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${queId}/answer/${ansId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: token,
          },
        },
      )
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          window.location.reload();
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };

  return (
    <MenuUserContainer>
      <MenuContainer>
        <Menu>Share</Menu>
        {isAuthor ? (
          <>
            <Menu>
              <PageMove to={`/${path}/edit`}>Edit</PageMove>
            </Menu>
            <Menu className="delete" onClick={handleDelete}>
              Delete
            </Menu>
          </>
        ) : null}
        {delClicked ? (
          <DeleteModal>
            <div>
              Are you sure you want to <span>delete</span> this post?
            </div>
            <BtnContainer>
              <button className="yes" type="button" onClick={handleChoice}>
                Yes
              </button>
              <button className="no" type="button" onClick={handleChoice}>
                No
              </button>
            </BtnContainer>
          </DeleteModal>
        ) : null}
      </MenuContainer>
      <PostInfoBox>
        <Time>
          <TimeDiff createAt={createdAt} target={target} />
        </Time>
        <UserInfo>
          <UserPic>
            <FontAwesomeIcon icon={faUser} />
          </UserPic>
          <User className="post-owner">{userName}</User>
        </UserInfo>
      </PostInfoBox>
    </MenuUserContainer>
  );
}

export default ContentMenu;
