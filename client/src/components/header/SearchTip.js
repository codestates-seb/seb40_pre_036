import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

function SearchTip({ handlerSearchTip }) {
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.isLogin);

  const onClick = () => {
    if (isLogin === true) {
      navigate('/questions/ask');
    } else {
      navigate('/users/login');
    }
  };

  return (
    <SearchHints handlerSearchTip={handlerSearchTip}>
      <Background onClick={handlerSearchTip} />
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
  );
}

export default SearchTip;
