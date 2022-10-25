import styled from 'styled-components';
import React from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = styled.nav`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Header = styled.div`
  background-color: #f9f0cf;
  padding: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  border: 1px solid;
  border-color: #f1e5bc;
`;

const Content = styled.div`
  background-color: #fdf7e2;
  font-size: 0.3rem;
  display: flex;
  padding: 10px;
`;

function Aside() {
  return (
    <Nav>
      <Header>The Overflow Blog</Header>
      <Content>
        <FontAwesomeIcon icon={faPencil} />
        He helped build .NET and VS Code — Now’s he working on Web3 (Ep. 499)
      </Content>
      <Content>
        <FontAwesomeIcon icon={faPencil} />
        How hardware and software can maximize your flow states
      </Content>
      <Header>Featured on Meta</Header>
      <Content>
        <FontAwesomeIcon icon={faMessage} />
        The 2022 Community-a-thon has begun!
      </Content>
      <Content>
        <FontAwesomeIcon icon={faMessage} />
        Mobile app infrastructure being decommissioned
      </Content>
      <Content>
        <FontAwesomeIcon icon={faStackOverflow} />
        Staging Ground Workflow: Canned Comments
      </Content>
      <Content>
        <FontAwesomeIcon icon={faStackOverflow} />
        The [script] tag is being burninated
      </Content>
      <Content>
        <FontAwesomeIcon icon={faStackOverflow} />
        Ask Wizard Test Graduation
      </Content>
      <Header>Hot Meta Posts</Header>
      <Content>25 Burninate [self-hosting]</Content>
    </Nav>
  );
}
export default Aside;
