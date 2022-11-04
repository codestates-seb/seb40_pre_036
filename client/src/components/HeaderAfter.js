import styled from 'styled-components';
import React, { useState } from 'react';
import { faIdCard, faInbox, faTrophy, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sofLogo from '../sofLogo.png';
import LogoutModal from './header/LogoutModal';

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

const Background = styled.div`
  position: fixed;
  z-index: -100;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: transparent;
`;

const SearchHints = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 40px;
  font-size: 14px;
  background: white;
  border: 1px solid hsl(210deg 8% 85%);
  border-radius: 5px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  z-index: 5;

  .arrow {
    background: white;
    position: relative;
    top: -6px;
    left: 0;
    width: 12px;
    height: 12px;
    left: 0px;
    z-index: 2;
    border-top: 1px solid hsl(210deg 8% 85%);
    border-left: 1px solid hsl(210deg 8% 85%);
    transform: translate3d(350px, 0px, 0px) rotate(45deg);
    box-shadow: -1px -1px 1px 0 hsl(0deg 0% 0% / 5%);
  }
`;

const SearchHintsText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px 12px;
`;

const SearchHintsItem = styled.div`
  overflow: no-wrap;
  flex-basis: 50%;
  color: #6a737c;

  div {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  span {
    color: #0c0d0e;
  }
`;

const SearchHintBtn = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid hsl(210deg 8% 90%);
  font-size: 11px;
  align-items: center;

  button {
    font-size: 11px;
    padding: 7px;
    color: hsl(205deg 47% 42%);
    background: hsl(205deg 46% 92%);
    border: 1px solid hsl(205deg 41% 63%);
    border-radius: 3px;

    &:hover {
      cursor: pointer;
      background: #b3d3ea;
    }
  }

  a {
    color: #0074cc;
    text-decoration: none;

    &:hover {
      color: hsl(206deg 100% 52%);
    }
  }
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
      navigate('/search');
    }
  };

  const onClick = () => {
    navigate('/questions/ask');
  };

  const onOpenSearchTip = () => {
    setOpenSearchTip(!openSearchTip);
  };

  const onOpenLogoutModal = () => {
    setOpenLogoutModal(!openLogoutModal);
  };

  return (
    <div>
      <Header>
        <Front>
          <Logo src={sofLogo} />
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
              onClick={onOpenSearchTip}
            />
            {openSearchTip && (
              <SearchHints onOpenSearchTip={onOpenSearchTip}>
                <Background onClick={onOpenSearchTip} />
                <div className="arrow" />
                <SearchHintsText>
                  <SearchHintsItem>
                    <div>
                      <span>[tag]</span> search within a tag
                    </div>
                    <div>
                      <span>user:1234</span> search by author
                    </div>
                    <div>
                      <span>&quot;words here&quot;</span> exact phrase
                    </div>
                    <div>
                      <span>collective:&quot;Name&quot;</span> collective content
                    </div>
                  </SearchHintsItem>
                  <SearchHintsItem>
                    <div>
                      <span>answers:0</span> unanswered questions
                    </div>
                    <div>
                      <span>score:3</span> posts with a 3+ score
                    </div>
                    <div>
                      <span>is:question</span> type of post
                    </div>
                    <div>
                      <span>isaccepted:yes</span> search within status
                    </div>
                  </SearchHintsItem>
                </SearchHintsText>
                <SearchHintBtn>
                  <button type="button" onClick={onClick}>
                    Ask a question
                  </button>
                  <a href="https://stackoverflow.com/help/searching">Search help</a>
                </SearchHintBtn>
              </SearchHints>
            )}
          </Form>
        </Container>
        <Ol>
          <PageMove to="/users/*">
            <Li>
              <FontAwesomeIcon icon={faIdCard} />
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
          <Li onClick={onOpenLogoutModal}>
            <FontAwesomeIcon icon={faStackExchange} />
            {/* <Background onClick={onOpenLogoutModal} /> */}
            {openLogoutModal && <LogoutModal />}
          </Li>
        </Ol>
      </Header>
      <Blank />
    </div>
  );
}
export default HeaderAfter;
