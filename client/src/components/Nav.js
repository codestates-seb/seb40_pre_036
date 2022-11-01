import styled from 'styled-components';
import React, { useState, useCallback } from 'react'; // useCallback
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 1px;
  border-right: 1px solid rgb(216, 217, 220);
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  /* width: 17%; */
  width: 156px;
  /* min-width: 156px; */
  padding-top: 25px;
  /* padding-left: 5%; */
  font-size: 13px;
  color: rgb(83, 89, 95);
  position: sticky;
  top: 0px;
`;

const PageMove = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Home = styled.div`
  box-sizing: border-box;
  width: 156px;
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
  width: 156px;
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

function Nav({ path }) {
  const [clicked, setClicked] = useState(path);

  const onClick = useCallback(() => {
    // const text = e.target.innerText;
    setClicked(path);
  }, [clicked]);

  // console.log(path);

  // const [clicked, setClicked] = useState('Questions');

  // const onClick = useCallback(e => {
  //   const text = e.target.innerText;
  //   setClicked(text);
  // }, []);

  // const onClick = useEffect(e => {
  //   const text = e.target.innerText;
  //   setClicked(text);
  // }, []);

  return (
    <Container>
      <Navbar>
        <PageMove to="/">
          <Home className={clicked === 'Home' ? 'clicked' : ''} onClick={onClick}>
            Home
          </Home>
        </PageMove>
        <PublicLists>
          <Li className="public">PUBLIC</Li>
          <PageMove to="/questions">
            <Li className={clicked === 'Questions' ? 'clicked' : ''} onClick={onClick}>
              <Icon>
                <FontAwesomeIcon icon={faEarthAmericas} className="icon" />
              </Icon>
              Questions
            </Li>
          </PageMove>
          <PageMove to="/tags">
            <Li className={clicked === 'Tags' ? 'no-icon clicked' : 'no-icon'} onClick={onClick}>
              Tags
            </Li>
          </PageMove>
          <PageMove to="/users">
            <Li className={clicked === 'Users' ? 'no-icon clicked' : 'no-icon'} onClick={onClick}>
              Users
            </Li>
          </PageMove>
          <Li className={clicked === 'Companies' ? 'no-icon clicked' : 'no-icon'} onClick={onClick}>
            Companies
          </Li>
        </PublicLists>
      </Navbar>
    </Container>
  );
}
export default Nav;
