import styled from 'styled-components';
import React, { useState } from 'react';

const LogoutBox = styled.div`
  padding: 15px;
  position: absolute;
  top: 50px;
  right: -50px;
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
    font-size: 14px;
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

function LogoutModal() {
  return (
    <LogoutBox>
      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800"
        className="user"
        alt="user"
      />
      <span>유저네임</span>
      <span>유저이메일</span>
      <LogoutBtn>Log out</LogoutBtn>
    </LogoutBox>
  );
}

export default LogoutModal;
