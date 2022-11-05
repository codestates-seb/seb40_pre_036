import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  margin: 70px 16px 35px 16px;
`;

// 페이지를 이동하는 버튼 container
const MoveBtnContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

// 한 페이지의 contents limit 버튼을 담는 container
const LimitBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  div {
    margin-left: 10px;
  }

  &[disabled] {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0 8px;
  margin: 0 2px;
  border: 1px solid #d6d9dc;
  color: #3b4045;
  border-radius: 3px;
  font-size: 13px;
  line-height: 1.9;
  background: white;

  &:hover {
    background: #d6d9dc;
    border: 1px solid #babfc4;
    cursor: pointer;
  }

  &[disabled] {
    display: none;
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #f48225;
    color: white;
    border: none;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

function Pagination({ total, limit, page, setPage, setLimit, disable }) {
  const numPages = Math.ceil(total / limit); // limit: 한 페이지에 나타낼 개수
  const limitNums = [15, 30, 50];

  return (
    <Nav>
      <MoveBtnContainer>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={`${i.toString()}-${page}`}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          Next
        </Button>
      </MoveBtnContainer>
      <LimitBtnContainer disabled={disable}>
        {!disable &&
          limitNums.map((num, i) => (
            <Button
              key={`${i.toString()}-${num}`}
              onClick={({ target: { innerText } }) => {
                setLimit(Number(innerText));
              }}
              aria-current={limit === num ? 'page' : null}
            >
              {num}
            </Button>
          ))}
        <div>per page</div>
      </LimitBtnContainer>
    </Nav>
  );
}

export default Pagination;
