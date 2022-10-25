import React from 'react';
import styled from 'styled-components';
import Aside from './components/Aside';
import Nav from './components/Nav';
import Content from './components/Content';

const Allcontent = styled.div``;

function Main() {
  return (
    <Allcontent>
      <Nav />
      <Content />
      <Aside />
    </Allcontent>
  );
}

export default Main;
