import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const LogoutBox = styled.div`
  padding: 15px;
  position: absolute;
  top: 50px;
  right: 40px;
  border: 1px solid hsl(210deg 8% 85%);
  width: 150px;
  height: 200px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .user {
    width: 80px;
    height: 80px;
    border-radius: 20px;
  }

  span {
    font-size: 12px;
    color: #525960;
  }
`;

const LogoutBtn = styled.button`
  display: flex;
  margin-left: 5px;
  padding: 10px;
  height: 2rem;
  justify-content: center;
  align-items: center;
  background-color: #e1ecf4;
  border: 1px solid #79a7c7;
  border-radius: 3px;
  color: #3a779e;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: hsl(205deg 57% 81%);
  }
`;

const Background = styled.div`
  position: fixed;
  z-index: -100;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: transparent;
`;

const PageMove = styled(Link)`
  text-decoration: none;
`;

function LogoutModal({ handlerLogoutModal }) {
  const userEmail = localStorage.getItem('userEmail');

  const offLogoutModal = () => {
    handlerLogoutModal();
  };

  return (
    <LogoutBox>
      <Background onClick={handlerLogoutModal} />
      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800"
        className="user"
        alt="user"
      />
      <span>{userEmail}</span>
      <PageMove to="/users/logout">
        <LogoutBtn onClick={offLogoutModal}>Log out</LogoutBtn>
      </PageMove>
    </LogoutBox>
  );
}

export default LogoutModal;
