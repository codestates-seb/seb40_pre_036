import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Allcontent = styled.div`
  display: flex;
  margin: 0 5rem 0 3rem;
  h1 {
    font-weight: bold;
    margin: 10px;
  }
`;

const Button = styled.button`
  font-size: 20px;
`;

const HomeContainer = styled.div`
  font-size: 30px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Team() {
  return (
    <Allcontent>
      <Nav />
      <h1>팀원 깃헙 임시페이지!</h1>
    </Allcontent>
  );
}

export default Team;
