import styled from 'styled-components';
import React from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Header = styled.div`
  background-color: #fbf3d5;
  padding: 10px;
  font-size: 0.6rem;
  font-weight: 700;
  display: flex;
  border: 1px solid;
  border-color: #f1e5bc;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #656a6d;
`;

const Content = styled.div`
  background-color: #fdf7e2;
  font-size: 0.3rem;
  display: flex;
  padding: 10px;
  cursor: pointer;
`;

const FAI = styled.div`
  margin-right: 7px;
`;

function Aside() {
  return (
    <Nav>
      <Header>The Overflow Blog</Header>
      <Content>
        <FAI>
          <FontAwesomeIcon icon={faPencil} size="2x" />
        </FAI>
        He helped build .NET and VS Code — Now’s he working on Web3 (Ep. 499)
      </Content>
      <Content>
        <FAI>
          <FontAwesomeIcon icon={faPencil} size="2x" />
        </FAI>
        How hardware and software can maximize your flow states
      </Content>
      <Header>Featured on Meta</Header>
      <Content>
        <FAI>
          <FontAwesomeIcon icon={faMessage} color="#4ca5d9" size="2x" />
        </FAI>
        The 2022 Community-a-thon has begun!
      </Content>
      <Content>
        <FAI>
          <FontAwesomeIcon icon={faMessage} color="#4ca5d9" size="2x" />
        </FAI>
        Mobile app infrastructure being decommissioned
      </Content>
      <Content>
        <FAI>
          <FontAwesomeIcon icon={faStackOverflow} color="#828583" size="3x" />
        </FAI>
        Staging Ground Workflow: Canned Comments
      </Content>
      <Content>
        <FAI>
          <FontAwesomeIcon icon={faStackOverflow} color="#828583" size="3x" />
        </FAI>
        The [script] tag is being burninated
      </Content>
      <Content>
        <FAI>
          <FontAwesomeIcon icon={faStackOverflow} color="#828583" size="3x" />
        </FAI>
        Ask Wizard Test Graduation
      </Content>
      <Header>Hot Meta Posts</Header>
      <Content>25 Burninate [self-hosting]</Content>
    </Nav>
  );
}
export default Aside;
