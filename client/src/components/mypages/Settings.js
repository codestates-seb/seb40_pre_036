import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import Editprofile from './Editprofile';
import Deleteprofile from './Deleteprofile';

const Body = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Subnav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  color: #656b71;
`;
const Sub = styled.h5`
  padding: 5px 30px 5px 10px;
  font-weight: 700;
  margin-bottom: 10px;
  white-space: nowrap;
`;
const Subbody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const InSub = styled.h6`
  cursor: pointer;
  padding: 5px 30px 5px 10px;
  color: #656b71;
  &:hover {
    background-color: #f1f2f3;
    border-radius: 30px;
  }
  &.clicked {
    background-color: #f1823b;
    border-radius: 30px;
    color: white;
  }
`;

function Settings() {
  const [clicked, setClicked] = useState();

  const onClick = useCallback(e => {
    const text = e.target.innerText;
    setClicked(text);
  }, []);
  return (
    <Body>
      <Subnav>
        <Sub>PERSONAL INFORMATION</Sub>
        <Link to="edit" style={{ textDecoration: 'none' }}>
          <InSub className={clicked === 'Edit profile' ? 'clicked' : ''} onClick={onClick}>
            Edit profile
          </InSub>
        </Link>
        <Link to="delete" style={{ textDecoration: 'none' }}>
          <InSub className={clicked === 'Delete profile' ? 'clicked' : ''} onClick={onClick}>
            Delete profile
          </InSub>
        </Link>
      </Subnav>
      <Subbody>
        <Routes>
          <Route path="/*" element={<Editprofile />} />
          <Route path="/edit" element={<Editprofile />} />
          <Route path="/delete" element={<Deleteprofile />} />
        </Routes>
      </Subbody>
    </Body>
  );
}

export default Settings;
