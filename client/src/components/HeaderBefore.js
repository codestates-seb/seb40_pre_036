import styled from 'styled-components';
import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sofLogo from '../sofLogo.png';

const Header = styled.header`
  color: black;
  min-width: auto;
  width: 100%;
  height: 3rem;
  background-color: hsl(210, 8%, 97.5%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: baseline;
  box-shadow: 0 -6px 10px 0px;
  padding: 1.5rem 6rem;
  border-top: 3px solid #f48123;
`;

const Front = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  .menu {
    font-size: 18px;
    padding: 15px;
    &:hover {
      background-color: hsl(210deg 8% 90%);
    }
  }
`;

const Logo = styled.img`
  width: 10.5rem;
  height: 3rem;
  padding: 0 0px 3px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: hsl(210deg 8% 90%);
  }
`;

const Products = styled.div`
  cursor: pointer;
  color: #3f3f3f;
  padding: 15px;
  height: 1.8rem;
  font-size: 0.85rem;
  margin: 0.1rem 0.1rem 0 0.1rem;
  display: flex;
  align-items: center;
  border-radius: 15px;
  white-space: nowrap;

  &:hover {
    background-color: hsl(210deg 8% 90%);
  }
`;

const Container = styled.div`
  width: 53%;
`;
const Form = styled.form`
  display: flex;
  top: 100%;
  max-width: 100%;
  align-items: center;
  margin: 0 5px;
  position: relative;

  .search {
    position: absolute;
    left: 0px;
    opacity: 0.4;
    margin: 0 0.5rem;
  }
`;

const Input = styled.input`
  padding: 1rem 1rem 1rem 2rem;
  width: 100%;
  height: 2rem;
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;

  &:focus {
    outline: none;
    border-color: hsl(206deg 90% 70%);
    box-shadow: 0px 0px 0px 5px #e1ecf4;
  }
`;

const Button = styled.button`
  display: flex;
  margin-left: 5px;
  padding: 10px;
  height: 2rem;
  justify-content: center;
  align-items: center;
  background-color: #e1ecf4;
  border: 1px solid #79a7c7;
  border-radius: 3px;
  color: #3a779e;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    background-color: hsl(205deg 57% 81%);
  }
  &:last-child {
    background: #0995fd;
    color: white;
    &:hover {
      background-color: hsl(206deg 100% 40%);
    }
  }
`;

function HeaderBefore() {
  return (
    <div>
      <Header>
        <Front>
          <FontAwesomeIcon className="menu" icon={faBars} />
          <Logo src={sofLogo} />
          <Products>About</Products>
          <Products>Products</Products>
          <Products>For Teams</Products>
        </Front>
        <Container>
          <Form>
            <svg className="search" width="18" height="18" viewBox="0 0 18 18">
              <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z" />
            </svg>
            <Input placeholder="Search..." type="text" />
          </Form>
        </Container>
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </Header>
    </div>
  );
}
export default HeaderBefore;
