import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 135px;
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid rgb(216, 217, 220);
`;

const Info = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 27px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  .questions-num {
    font-size: 17px;
  }
`;

const PageMove = styled(Link)`
  text-decoration: none;
`;

const AskBtn = styled.button`
  min-width: 103px;
  height: 38px;
  color: white;
  background-color: rgb(0, 137, 254);
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.5);
  border-radius: 3px;
  white-space: nowrap;
  margin-left: 10px;
  &:hover {
    background-color: #0074cc;
  }
`;

const SortContainer = styled.div`
  /* display: flex;
  /* justify-content: space-between; */
  /* align-items: center;
  justify-content: space-between; */
  vertical-align: baseline;
  border: 1px solid rgb(148, 156, 163);
  border-radius: 5px;
`;

const SortBtn = styled.button`
  /* width: 63px; */
  padding: 10px;
  height: 35px;
  color: #6a737c;
  background-color: white;
  border: none;
  font-size: 12px;

  &.left-btn {
    border-right: 1px solid rgb(148, 156, 163);
    border-top-left-radius: 5px 5px;
    border-bottom-left-radius: 5px 5px;
  }

  &.right-btn {
    border-left: 1px solid rgb(148, 156, 163);
    border-top-right-radius: 5px 5px;
    border-bottom-right-radius: 5px 5px;
  }

  &.clicked {
    background-color: #e3e6e8;
    color: #3b4045;
    pointer-events: none;
  }

  &:hover {
    background-color: rgb(247, 247, 247);
    color: #525960;
  }
`;

function QuestionListHeader({ totalQNum, setSort, sort }) {
  const [clicked, setClicked] = useState('Newest');

  // const handleBtnClick = useCallback(
  //   e => {
  //     // console.log(e);
  //     setClicked(e.target.innerText);
  //     console.log(e.target);
  //     console.log(clicked);
  //   },
  //   [clicked],
  // );

  const handleBtnClick = useCallback(e => {
    setClicked(e.target.innerText);
    if (clicked === 'Newest') {
      setSort('questionId');
    } else if (clicked === 'Highest Votes') {
      setSort('votes');
    } else if (clicked === 'Highest Views') {
      setSort('view');
    }
  }, []);

  return (
    <Header>
      <Info>
        All Questions
        <PageMove to="ask">
          <AskBtn>Ask Question</AskBtn>
        </PageMove>
      </Info>
      <BtnContainer>
        <div className="questions-num">{totalQNum} questions</div>
        <SortContainer>
          <SortBtn
            onClick={handleBtnClick}
            className={clicked === 'Newest' ? 'left-btn clicked' : 'left-btn'}
          >
            Newest
          </SortBtn>
          <SortBtn
            onClick={handleBtnClick}
            className={clicked === 'Highest Votes' ? 'clicked' : ''}
          >
            Highest Votes
          </SortBtn>
          <SortBtn
            onClick={handleBtnClick}
            className={clicked === 'Highest Views' ? 'right-btn clicked' : 'right-btn'}
          >
            Highest Views
          </SortBtn>
        </SortContainer>
      </BtnContainer>
    </Header>
  );
}

export default QuestionListHeader;
