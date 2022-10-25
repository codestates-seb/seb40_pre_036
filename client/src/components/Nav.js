import styled from "styled-components";
import React from "react";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  border-right: 1px solid;
  margin-left: 15px;
`
const H1 = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  font-weight: 300;
  margin: 5px 0;
  cursor: pointer;
  &:hover{
    background-color: grey;
  }
`

const Li = styled.li`
  text-decoration: none;
  display: flex;
  margin: 10px -15px 10px 15px;
  width: 100%;
  font-size: 0.7rem;
  cursor: pointer;
  &:hover{
    background-color: grey;
  }
`


const Nav = ()=>{
  return (
    <Navbar>
      <H1>Home</H1>
      <H1>Public</H1>
        <Li><FontAwesomeIcon icon={faEarthAmericas} /> Question</Li>
        <Li>Tags</Li>
        <Li>Users</Li>
        <Li>Companies</Li>
    </Navbar>
  )
}
export default Nav;