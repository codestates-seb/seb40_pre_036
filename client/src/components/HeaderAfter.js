import styled from "styled-components";
import React from "react";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faStackExchange } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sofLogo from "../sofLogo.png";

const Notify = styled.hr`
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: hsl(27,90%,55%);
  text-align: center;
  height: 2px;
  z-index: 1;
`
const Article = styled.article`
  color: black;
  min-width: auto;
  width: 100%;
  height: 38px;
  background-color: hsl(210,8%,97.5%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: baseline;
  box-shadow: 0 -3px 5px;
  padding: 5px;
`

const Front = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  height: 35px;
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  margin: 0 5px 5px 5px;
`
const Products = styled.div`
  color: #3f3f3f;
  font-size: 0.8rem;
  margin: 0 10px;
`
const Container = styled.div`
  width: 100%;
`
const Form = styled.form`
  display: flex;
  top: 100%;
  max-width: 100%;
  align-items: center;
  margin: 0 auto;
`
const Input = styled.input`
  width: 100%;
`
const Ol = styled.ol`
  display: flex;
  list-style: none;
`
const Li = styled.li`
  display: inline-flex;
  margin: 0 5px;
  color: #727272;
`

const HeaderAfter = ()=>{
  return (
    <div>
      <Notify></Notify>
      <Article>
        <Front>
          <Logo src={sofLogo}></Logo>
          <Products>Products</Products>
        </Front>
        <Container>
          <Form>
            <Input
                placeholder="Search..."
              />
            </Form>
        </Container>
          <Ol>
            <Li><FontAwesomeIcon icon={faIdCard} /></Li>
            <Li><FontAwesomeIcon icon={faInbox} /></Li>
            <Li><FontAwesomeIcon icon={faTrophy} /></Li>
            <Li><FontAwesomeIcon icon={faCircleQuestion} /></Li>
            <Li><FontAwesomeIcon icon={faStackExchange} /></Li>
          </Ol>
      </Article>
    </div>
  )
}
export default HeaderAfter;