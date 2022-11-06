import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import TimeDiff from '../main/TimeDiff';

const User = styled.a`
  text-decoration: none;
  color: #0074cc;

  :visited {
    text-decoration: none;
  }
  margin: 0 6px;
  &.post-owner {
    margin: 0;
  }
`;

const Time = styled.div`
  color: #6a737c;
  margin-right: 5px;
  margin-bottom: 4px;
  font-size: 12px;
  /* &.post-time {
    margin-bottom: 3px;
  } */
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

const DeleteModal = styled.div`
  padding: 25px 20px 20px 20px;
  position: absolute;
  color: #3b4045;
  border: 1px solid hsl(210deg 8% 85%);
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* top: 40px; */
  div {
    span {
      color: #f48123;
      font-weight: bold;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  margin-top: 5px;
  /* align-items: flex-end; */
  button {
    font-weight: bold;
    margin: 10px 60px 0;
    border: none;
    background: none;
    /* padding: 0px 10px; */
    &:hover {
      color: #f48123;
    }
  }
`;

function ContentMenu({ path, user, createdAt, target, ansId, queId }) {
  // const [questionUserName, setQuestionUserName] = useState('');
  const [userName, setUserName] = useState('');
  const token = localStorage.getItem('accessToken');
  const loginUserEmail = localStorage.getItem('userEmail');
  const [delClicked, setDelClicked] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);
  const navigate = useNavigate();
  // console.log('당신누 구세요', user.email === loginUserEmail);
  console.log(`${queId}번째 질문과, ${ansId}번째 답변`);

  useEffect(() => {
    if (user) {
      if (user.displayName !== 'undefined' && user.displayName !== null) {
        setUserName(user.displayName);
      }
      if (user.email !== undefined && user.email !== null) {
        setIsAuthor(user.email === loginUserEmail);
      }
    }
    console.log(ansId);
    console.log(queId);
  }, [user, ansId, queId]);

  const handleDelete = () => {
    setDelClicked(true);
    console.log(`${queId} 삭제하려구요`);
  };

  const handleChoice = e => {
    if (e.target.innerText === 'No') {
      setDelClicked(false);
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
          navigate(`/questions`);
        })
        .catch(error => {
          console.log(error);
        });
    } else if (target === 'answered') {
      console.log(`${ansId}번째 답변 삭제할거야?`);
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

          // navigate(`/questions/${queId}`);
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
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
              <button type="button" onClick={handleChoice}>
                Yes
              </button>
              <button type="button" onClick={handleChoice}>
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
          <UserPic />
          <User className="post-owner">{userName}</User>
        </UserInfo>
      </PostInfoBox>
    </MenuUserContainer>
  );
}

export default ContentMenu;
