import styled from 'styled-components';
import React from 'react';
import footerLogo from '../img/footerLogo.png';

const FooterBox = styled.div`
  background-color: #232629;
  background-image: none;
  background-position: top left;
  background-repeat: no-repeat;
  border-top: 0;
  background-size: auto;
  color: hsl(210, 8%, 60%);
  padding-top: 0;
  padding-bottom: 0;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

const Content = styled.div`
  width: 70%;
  margin: 0 15%;
  display: flex;
`;

const Logo = styled.img`
  height: 50px;
  margin: 40px 0 0 5px;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  margin: 15px 15px 15px 0;
`;
const H5 = styled.h5`
  white-space: nowrap;
  font-size: 0.9em;
  margin: 20px 0;
  display: flex;
  text-transform: uppercase;
  font-weight: bold;
  color: hsl(210, 8%, 75%);
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: no-wrap;
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

const Li = styled.li`
  color: hsl(210, 8%, 60%);
  text-decoration: none;
  display: inline-block;
  margin: 7px 0px;
  font-size: 0.9rem;
  cursor: pointer;
`;
const Sns = styled.li`
  font-size: 0.8em;
  display: flex;
  text-decoration: none;
  margin: 20px 5px 0 5px;
`;

const Privacy = styled.li`
  font-size: 0.6em;
  display: flex;
  text-decoration: none;
  margin-top: 80%;
`;

function Footer() {
  return (
    <FooterBox>
      <Content>
        <Nav>
          <Logo src={footerLogo} />
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
              <Li>API</Li>
              <Li>Data</Li>
            </Ul>
          </Col>
          <Col>
            <Nav>
              <Sns>Blog</Sns>
              <Sns>Facebook</Sns>
              <Sns>Twitter</Sns>
              <Sns>Linkedin</Sns>
              <Sns>Instagram</Sns>
            </Nav>
            <Privacy>
              Site design / logo © 2022 Stack Exchange Inc; user
              <br /> contributions licensed under CC BY-SA. rev 2022.10.24.26681
            </Privacy>
          </Col>
        </Nav>
      </Content>
    </FooterBox>
  );
}
export default Footer;
