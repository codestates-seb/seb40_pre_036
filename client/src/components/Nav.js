import styled from 'styled-components';
import React, { useState, useCallback } from 'react';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 17%;
  padding-top: 25px;
  padding-left: 5%;
  border-right: 1px solid rgb(216, 217, 220);
  font-size: 13px;
  color: rgb(83, 89, 95);
`;

const Home = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 11px 0 11px 8px;
  cursor: pointer;
  &:hover {
    color: rgb(12, 13, 14);
  }
  &.clicked {
    background-image: linear-gradient(to right, rgb(241, 242, 243) 98.5%, rgb(229, 136, 61) 1.5%);
    font-weight: bold;
  }
`;

const PublicLists = styled.ul`
  box-sizing: border-box;
  margin: 7px 0 0 0;
`;

const Li = styled.li`
  list-style: none;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  padding: 11px 0 11px 8px;
  margin: 0;
  color: rgb(83, 89, 95);
  font-size: 13px;
  cursor: pointer;

  &.public {
    padding: 8px;
    font-size: 11px;
    color: rgb(108, 115, 123);
  }

  &:hover:not(.public) {
    color: rgb(12, 13, 14);
  }

  &.no-icon {
    padding-left: 30px;
  }

  /* &.questions {
    background-color: ${props => (props.click === ' Questions' ? 'rgb(241, 242, 243)' : '')};
  }

  &.tags {
    background-color: ${props => (props.click === 'Tags' ? 'rgb(241, 242, 243)' : '')};
  }

  &.users {
    background-color: ${props => (props.click === 'Users' ? 'rgb(241, 242, 243)' : '')};
  }

  &.companies {
    background-color: ${props => (props.click === 'Companies' ? 'rgb(241, 242, 243)' : '')};
  } */

  &.clicked {
    background-image: linear-gradient(to right, rgb(241, 242, 243) 98.5%, rgb(229, 136, 61) 1.5%);
    background-color: rgb(241, 242, 243);
    font-weight: bold;
  }
`;

const Icon = styled.span`
  margin-right: 5px;
  font-size: 16px;
`;

function Nav() {
  const [clicked, setClicked] = useState();

  const onClick = useCallback(e => {
    const text = e.target.innerText;
    setClicked(text);
  }, []);

  return (
    <Navbar>
      <Home className={clicked === 'Home' ? 'clicked' : ''} onClick={onClick}>
        Home
      </Home>
      <PublicLists>
        <Li className="public">PUBLIC</Li>
        <Li className={clicked === 'Questions' ? 'clicked' : ''} onClick={onClick}>
          <Icon>
            <FontAwesomeIcon icon={faEarthAmericas} className="icon" />
          </Icon>
          Questions
        </Li>
        <Li className={clicked === 'Tags' ? 'no-icon clicked' : 'no-icon'} onClick={onClick}>
          Tags
        </Li>
        <Li className={clicked === 'Users' ? 'no-icon clicked' : 'no-icon'} onClick={onClick}>
          Users
        </Li>
        <Li className={clicked === 'Companies' ? 'no-icon clicked' : 'no-icon'} onClick={onClick}>
          Companies
        </Li>
      </PublicLists>
    </Navbar>
  );
}
export default Nav;
