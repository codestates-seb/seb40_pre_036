import styled from "styled-components";
import React from "react";
import footerLogo from "../footerLogo.png";

const Containter = styled.div`
  background-color: #232629;
  background-image: none;
  background-position: top left;
  background-repeat: no-repeat;
  border-top: 0;
  background-size: auto;
  color: hsl(210,8%,60%);
  padding-top: 0;
  padding-bottom: 0;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`

const Logo = styled.img`
  //flex: 0 0 64px;
  width: 50px;
  height: 50px;
  margin: 5px;
`

const Nav = styled.nav`
  display: flex;
  //flex: 2 1 auto;
  flex-wrap: wrap;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  //flex-direction: 1 0 auto;
  margin: 15px;
`
const H5 = styled.h5`
  display: flex;
  text-transform: uppercase;
  font-weight: bold;
  color: hsl(210,8%,75%);
`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 0;
  list-style: none;
`

const Li = styled.li`
  color: hsl(210,8%,60%);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  cursor: pointer;
`
const Contect = styled.li`
  display: flex;
  text-decoration: none;
  margin: 20px 5px 0 5px;
`

const Footer = ()=>{
  return (
    <Containter>
      <Logo src={footerLogo}></Logo>
      <Nav>
        <Col>
          <H5>STACK OVERFLOW</H5>
          <Ul>
            <Li>Questions</Li>
            <Li>Help</Li>
          </Ul>
        </Col>
        <Col>
          <H5>PRODUCTS</H5>
          <Ul>
            <Li>Teams</Li>
            <Li>Advertising</Li>
            <Li>Collectives</Li>
            <Li>Talent</Li>
          </Ul>
        </Col>
        <Col>
          <H5>COMPANY</H5>
          <Ul>
            <Li>About</Li>
            <Li>Press</Li>
            <Li>Work Here</Li>
            <Li>Legal</Li>
            <Li>Privacy Policy</Li>
            <Li>Terms of Service</Li>
            <Li>Contact us</Li>
            <Li>Cookie Settings</Li>
            <Li>Cookie Policy</Li>
          </Ul>
        </Col>
        <Col>
          <H5>STACK EXCHANGE NETWORK</H5>
          <Ul>
            <Li>Technology</Li>
            <Li>Culture & recreation</Li>
            <Li>Life & arts</Li>
            <Li>Science</Li>
            <Li>Professional</Li>
            <Li>Business</Li>
            <Li></Li>
            <Li>API</Li>
            <Li>Data</Li>
          </Ul>
        </Col>
        <Col>
          <Nav>
            <Contect>Blog</Contect>
            <Contect>Facebook</Contect>
            <Contect>Twitter</Contect>
            <Contect>Linkedin</Contect>
            <Contect>Instagram</Contect>
          </Nav>
          <Contect>Site design / logo © 2022 Stack Exchange Inc; user</Contect>
          <Contect>contributions licensed under CC BY-SA.</Contect>
          <Contect>rev 2022.10.21.36010</Contect>
        </Col>
      </Nav>
    </Containter>
  )
}
export default Footer;
