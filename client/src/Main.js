import React from "react";
import Aside from "./components/Aside";
import Nav from "./components/Nav"
import Content from './components/Content';
import styled from 'styled-components';

const Allcontent = styled.div`
  display: flex;
`

const Main = ()=>{
  return (
    <Allcontent>
      <Nav />
      <Content />
      <Aside />
    </Allcontent>
  )
}

export default Main;