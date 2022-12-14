import styled from 'styled-components';
import React, { useState } from 'react';
import { faInbox, faTrophy, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sofLogo from '../sofLogo.png';
import LogoutModal from './header/LogoutModal';
import SearchTip from './header/SearchTip';

const Header = styled.header`
  position: fixed;
  color: black;
  width: 100%;
  height: 3rem;
  background-color: hsl(210, 8%, 97.5%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: baseline;
  box-shadow: 0 -5px 10px 0px;
  padding: 1.5rem 6rem;
  border-top: 3px solid #f48123;
  z-index: 10;
`;

const Blank = styled.div`
  width: 100%;
  height: 3rem;
`;

const Front = styled.div`
  display: flex;
  align-items: center;
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
  width: 100%;
`;

const Form = styled.form`
  position: relative;
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

const Ol = styled.ol`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 3rem;
  color: #727272;
  font-size: 18px;

  img {
    width: 30px;
    border-radius: 8px;
  }

  &:hover {
    background-color: hsl(210deg 8% 90%);
  }

  &:first-child {
    width: 64px;
    margin: 0 5px;
  }

  &:last-child {
    position: relative;
  }
`;

const CardInfo = styled.span`
  font-size: 12px;
  font-weight: 700;
  margin-left: 0.2rem;
`;

const PageMove = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function HeaderAfter() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const [openSearchTip, setOpenSearchTip] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSearch = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/search?q=${value}`);
      setOpenSearchTip();
      setValue('');
    }
  };

  const handlerSearchTip = () => {
    setOpenSearchTip(!openSearchTip);
  };

  const handlerLogoutModal = () => {
    setOpenLogoutModal(!openLogoutModal);
  };

  return (
    <div>
      <Header>
        <Front>
          <PageMove to="/">
            <Logo src={sofLogo} />
          </PageMove>
          <Products>Products</Products>
        </Front>
        <Container>
          <Form>
            <svg className="search" width="18" height="18" viewBox="0 0 18 18">
              <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z" />
            </svg>
            <Input
              placeholder="Search..."
              type="search"
              value={value}
              onChange={onChange}
              onKeyPress={onSearch}
              onClick={handlerSearchTip}
            />
            {openSearchTip && <SearchTip handlerSearchTip={handlerSearchTip} />}
          </Form>
        </Container>
        <Ol>
          <PageMove to="/users/me/*">
            <Li>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800"
                className="user"
                alt="user"
              />
              <CardInfo>1</CardInfo>
            </Li>
          </PageMove>
          <Li>
            <FontAwesomeIcon icon={faInbox} />
          </Li>
          <Li>
            <FontAwesomeIcon icon={faTrophy} />
          </Li>
          <Li>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </Li>
          <Li onClick={handlerLogoutModal}>
            <FontAwesomeIcon icon={faStackExchange} />
          </Li>
          {openLogoutModal && <LogoutModal handlerLogoutModal={handlerLogoutModal} />}
        </Ol>
      </Header>
      <Blank />
    </div>
  );
}
export default HeaderAfter;
