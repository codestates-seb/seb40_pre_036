import React, { useEffect, useState } from 'react';
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
`;

const VoteBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: none;
`;

const VoteBtn = styled.div`
  border: none;
  background: none;
`;

const Count = styled.div`
  color: #6a737c;
  font-size: 21px;
  margin: 6px 0;
  cursor: text;
`;

function AnswerSideBar({ id }) {
  const [clicked, setClicked] = useState('');
  const token = localStorage.getItem('accessToken');
  const [votes, setVotes] = useState(0);

  // 답변 투표 수 갱신
  useEffect(() => {
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/ans/${id}`)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setVotes(data.data.vote);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [votes]);

  const handleVoteClick = e => {
    if (e.target.id === '1' && clicked !== '1') {
      setClicked('1');
    } else if (e.target.id === '-1' && clicked !== '-1') {
      setClicked('-1');
    } else {
      setClicked('0');
    }

    // 이전과 동일한 target 클릭 시 투표 무효 ===> 0
    if (e.target.id === clicked) {
      fetch(
        `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/answer/${id}/votes?ansVote=0`,
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
          setVotes(data.data.ansTotalVotes);
        })
        .catch(error => {
          throw new Error(error);
        });

      // 1 / -1 투표 요청
    } else {
      fetch(
        `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/answer/${id}/votes?ansVote=${e.target.id}`,
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
          setVotes(data.data.ansTotalVotes);
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };

  return (
    <SideBar>
      <VoteBtnContainer type="button">
        <VoteBtn onClick={handleVoteClick} id="1">
          <Icon
            className={clicked === '1' ? 'clicked' : null}
            aria-hidden="true"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path d="M2 25h32L18 9 2 25Z" />
          </Icon>
        </VoteBtn>
        <Count>{votes}</Count>
        <VoteBtn onClick={handleVoteClick} id="-1">
          <Icon
            className={clicked === '-1' ? 'clicked' : null}
            aria-hidden="true"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path d="M2 11h32L18 27 2 11Z" />
          </Icon>
        </VoteBtn>
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
