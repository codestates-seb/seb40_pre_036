import styled from 'styled-components';
import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sofLogo from '../sofLogo.png';

const Notify = styled.hr`
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: hsl(27, 90%, 55%);
  text-align: center;
  height: 2px;
  z-index: 1;
`;
const Article = styled.article`
  color: black;
  min-width: auto;
  width: 100%;
  height: 38px;
  background-color: hsl(210, 8%, 97.5%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: baseline;
  box-shadow: 0 -3px 5px;
  padding: 5px;
`;

const Front = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 35px;
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  margin: 0 5px 5px 5px;
`;
const Products = styled.div`
  color: #3f3f3f;
  font-size: 0.8rem;
  margin: 0 10px;
  display: flex;
`;
const Container = styled.div`
  width: 95%;
`;
const Form = styled.form`
  display: flex;
  top: 100%;
  max-width: 100%;
  align-items: center;
  margin: 0 auto;
`;
const Input = styled.input`
  width: 95%;
`;
const Button = styled.button`
  display: flex;
  margin-left: 5px;
  width: 100px;
  margin-right: 10px;
  justify-content: center;
  padding: 5px;
  background-color: #cde9fc;
  border-color: #2e94f7;
  color: #2e94f7;
`;

function HeaderAfter() {
  return (
    <div>
      <Notify />
      <Article>
        <Front>
          <FontAwesomeIcon icon={faBars} />
          <Logo src={sofLogo} />
          <Products>About</Products>
          <Products>Products</Products>
          <Products>For Teams</Products>
        </Front>
        <Container>
          <Form>
            <Input placeholder="Search..." />
          </Form>
        </Container>
        <Button>LOG IN</Button>
        <Button>Sign up</Button>
      </Article>
    </div>
  );
}
export default HeaderAfter;
