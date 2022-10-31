import React from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
`;

const Icon = styled.svg`
  width: 36px;
  height: 36px;
  fill: rgb(187, 191, 195);
  cursor: pointer;
  &.small-icon {
    width: 18px;
    height: 18px;
    margin: 6px 0;
  }
`;

const VoteBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Count = styled.div`
  color: #6a737c;
  font-size: 21px;
  margin: 6px 0;
  cursor: text;
`;

function QnASideBar() {
  return (
    <SideBar>
      <VoteBtn type="button">
        <Icon aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
          <path d="M2 25h32L18 9 2 25Z" />
        </Icon>
        <Count>0</Count>
        <Icon aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
          <path d="M2 11h32L18 27 2 11Z" />
        </Icon>
        <Icon className="small-icon" aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
          <path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z" />
        </Icon>
        <Icon className="small-icon" aria-hidden="true" width="19" height="18" viewBox="0 0 19 18">
          <path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z" />
        </Icon>
      </VoteBtn>
    </SideBar>
  );
}

export default QnASideBar;
