import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
`;

const Icon = styled.svg`
  width: 36px;
  height: 36px;
  fill: rgb(187, 191, 195);
  pointer-events: none;
  cursor: pointer;
  &.small-icon {
    width: 18px;
    height: 18px;
    margin: 6px 0;
  }
  &.clicked {
    fill: #f48123;
  }
  path {
    pointer-events: none;
  }
  /* &:active {
    fill: #f48123;
  } */
`;

const VoteBtnContainer = styled.div`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpVote = styled.div`
  border: none;
  background: none;
`;

const DownVote = styled.div`
  border: none;
  background: none;
`;

const Count = styled.div`
  color: #6a737c;
  font-size: 21px;
  margin: 6px 0;
  cursor: text;
`;

function AnswerSideBar({ target, beforeVotes, id, queId, setAnswerVotes, answerVotes }) {
  const [clicked, setClicked] = useState('');
  const token = localStorage.getItem('accessToken');

  // useEffect(() => {
  //   if (answerVotes) {
  //     if (answerVotes !== 'undefined' && answerVotes !== null) {
  //       setAnswerVotes(answerVotes);
  //     }
  //   }
  // }, [answerVotes]);

  const handleVoteClick = e => {
    console.log('e.target.id!', e.target.id);
    if (e.target.id === '1') {
      setClicked('1');
    } else if (e.target.id === '-1') {
      setClicked('-1');
    }

    console.log('지금 뭐 눌렀어', clicked);
    // const before = clicked;
    // console.log('아까 뭐 눌렀어', before);

    console.log('answerVotes', answerVotes);

    // if (before !== 0 && before === clicked) {
    //   console.log('같은 걸 누르셧네요');
    //   setClicked(0);
    // }

    console.log(`저는 ${id}번째 answer에 ${clicked}표 행사합니다~`);

    fetch(
      `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/answer/${id}/votes?ansVote=${clicked}`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      },
    )
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        console.log('data 잘오셨나요', data);
        console.log('answer vote!!', data.data.ansTotalVotes);
        // console.log('data.data', data.data.totalVotes);
        setAnswerVotes(data.data.ansTotalVotes);
        // console.log('토탈 투표', votes);
        // else {
        //   setVotes()
        // }
        // console.log(data.data.totalVotes);
      })
      .catch(error => {
        console.log(error);
      });
    // window.location.reload();
  };

  useEffect(() => {
    console.log('clicked', clicked);
    console.log('answerVotes', answerVotes);
  }, [clicked, answerVotes]);

  return (
    <SideBar>
      <VoteBtnContainer type="button">
        <UpVote onClick={handleVoteClick} id="1">
          <Icon
            className={clicked === '1' ? 'clicked' : null}
            aria-hidden="true"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path d="M2 25h32L18 9 2 25Z" />
          </Icon>
        </UpVote>
        <Count>{answerVotes}</Count>
        <DownVote onClick={handleVoteClick} id="-1">
          <Icon
            className={clicked === '-1' ? 'clicked' : null}
            aria-hidden="true"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path d="M2 11h32L18 27 2 11Z" />
          </Icon>
        </DownVote>
        <Icon className="small-icon" aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
          <path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z" />
        </Icon>
        <Icon className="small-icon" aria-hidden="true" width="19" height="18" viewBox="0 0 19 18">
          <path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z" />
        </Icon>
      </VoteBtnContainer>
    </SideBar>
  );
}
export default AnswerSideBar;
