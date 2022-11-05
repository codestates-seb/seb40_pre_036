import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Pagination from '../components/Pagination';

const SearchPage = styled.div`
  display: flex;
`;

const MainBar = styled.main`
  padding: 24px;
  width: 100%;
`;

const Start = styled.div`
  margin-bottom: 2rem;
  height: 38px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const SearchHelp = styled.div`
  display: flex;
  flex: 1 auto;
  align-items: center;
  justify-content: flex-end;
`;

const SearchTip = styled.span`
  color: #0074cc;

  &:hover {
    color: #0a95ff;
    cursor: pointer;
  }
`;

const QuestionBtn = styled.button`
  margin-left: 1rem;
  width: 100px;
  height: 40px;
  background: #0a95ff;
  color: white;
  border: none;
  border-radius: 3px;

  &:hover {
    background: hsl(209deg 100% 38%);
    cursor: pointer;
  }
`;

const Results = styled.div`
  // border: 1px solid black;
`;

const ResultInfo = styled.div`
  margin: 0 0 0.5rem 0;
  font-size: 0.75rem;
  color: hsl(210deg 8% 45%);
`;

const ResultCount = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
`;

const ResultFilter = styled.div`
  font-size: 0.85rem;
  border-spacing: 0;
`;

const FilterBtn = styled.div`
  display: inline-block;
  padding: 0.8rem;
  flex: 1;
  border: 1px solid hsl(210deg 8% 65%);
  background: white;
  color: hsl(210deg 8% 45%);

  &:first-child {
    border-right: transparent;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-left: transparent;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:hover {
    color: hsl(210deg 8% 35%);
    background: hsl(210deg 8% 98%);
    cursor: pointer;
  }

  &.clicked {
    color: #3b4045;
    background: #e3e6e8;
    border: 1px solid hsl(210deg 8% 55%);

    &:first-child {
      border-right: transparent;
    }

    &:last-child {
      border-left: transparent;
    }
  }
`;

const ResultList = styled.ul`
  margin-top: 1rem;
  width: 100%;
`;

// 질문 뭉탱이 li
const List = styled.li`
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 140px;
  border-top: 1px solid hsl(210deg 8% 90%);
`;

// votes, answers, views 수
const Counts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #6a737c;
  margin-right: 16px;
  line-height: 1.9;
  font-size: 0.85rem;

  div {
    min-width: 100px;
    text-align: right;
    margin-bottom: 0.3rem;
  }

  svg {
    fill: white;
  }

  .vote {
    color: #232629;
  }

  .count {
    padding: 0 0.1rem;
    background: #2f6f44;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 3px;
  }

  .views {
    color: #922024;
  }
`;

// 질문
const Question = styled.article`
  color: #3b4045;
  line-height: 1.3;

  svg {
    margin-right: 0.3rem;
  }
`;

// 질문 제목
const QuestionTitle = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #0074cc;
  :visited {
    text-decoration: none;
  }
  font-size: 17px;
  vertical-align: top;

  &:hover {
    color: #0a95ff;
    cursor: pointer;
  }
`;

// 질문 내용
const Content = styled.div`
  color: #3b4045;
  margin-top: 7px;
  font-size: 0.85rem;
`;

// 태그 + 유저 + 작성일을 담은 컨테이너
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 5px;
`;

// 태그 컨테이너
const TagsContainer = styled.div`
  display: flex;
`;

// 태그
const Tag = styled.button`
  padding: 6px 6px;
  background-color: #e1ecf4;
  font-size: 0.75rem;
  color: #39739d;
  border: none;
  border-radius: 2px;
  &:hover {
    background-color: #d0e3f1;
    color: #2c5877;
    cursor: pointer;
  }
  margin-right: 6px;
`;

// 유저정보 + 작성일
const PostInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.85rem;
`;

const User = styled.a`
  text-decoration: none;
  color: #0074cc;
  :visited {
    text-decoration: none;
  }
  margin-right: 4px;

  &:hover {
    cursor: pointer;
    color: #0a95ff;
  }
`;

// 유저 프로필사진
const UserPic = styled.img`
  width: 16px;
  height: 16px;
  background-color: gray;
  border-radius: 4px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;

// 업로드 시간
const Time = styled.time`
  color: #6a737c;
  span {
    font-weight: 700;
  }
`;

function Search() {
  const [filter, setFilter] = useState('questionId');
  // const [lists, setLists] = useState([]);
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(15)
  // const [totalQNum, setTotalQNum] = useState(0);
  // const offset = (page - 1) * limit;

  console.log(window.location);
  console.log(window.location.search);

  const params = new URLSearchParams(window.location.search);
  const keyword = params.get('q');
  console.log('검색 키워드 :', keyword);

  const fetchSearch = sort => {
    fetch(
      `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions?size=100&sort=${sort}`,
    )
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const onClick = useCallback(e => {
    const text = e.target.innerText;
    if (text === 'Newest') {
      setFilter('questionId');
      fetchSearch('questionId');
    } else if (text === 'votes') {
      setFilter('votes');
      fetchSearch('votes');
    } else {
      setFilter('view');
      fetchSearch('view');
    }
  }, []);

  console.log(filter);

  useEffect(() => {
    fetchSearch(filter);
  }, []);

  return (
    <SearchPage>
      <Nav />
      <MainBar>
        <Start>
          <Title>Search Results</Title>
          <SearchHelp>
            <SearchTip>Advanced Search Tips</SearchTip>
            <QuestionBtn>Ask Question</QuestionBtn>
          </SearchHelp>
        </Start>
        <Results>
          <ResultInfo>Results for hi </ResultInfo>
          <ResultInfo>Search options not deleted</ResultInfo>
          <ResultCount>
            326,330 results
            <ResultFilter>
              <FilterBtn className={filter === 'questionId' ? 'clicked' : ''} onClick={onClick}>
                Newest
              </FilterBtn>
              <FilterBtn className={filter === 'votes' ? 'clicked' : ''} onClick={onClick}>
                votes
              </FilterBtn>
              <FilterBtn className={filter === 'view' ? 'clicked' : ''} onClick={onClick}>
                view
              </FilterBtn>
            </ResultFilter>
          </ResultCount>
          <ResultList>
            <List>
              <Counts>
                <div className="vote">
                  <span>5134 </span>
                  votes
                </div>
                <div className="count">
                  <span>
                    <svg
                      aria-hidden="true"
                      className="svg-icon iconCheckmarkSm"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path d="M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8Z" />
                    </svg>{' '}
                  </span>
                  Accepted
                </div>
                <div className="views">
                  <span>2 </span>
                  views
                </div>
              </Counts>
              <Question>
                <svg
                  aria-hidden="true"
                  className="svg-icon iconAnswer"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14 15H3c-1.09 0-2-.91-2-2V4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v14l-3-3Zm-1.02-3L9.82 4H8.14l-3.06 8h1.68l.65-1.79h3.15l.69 1.79h1.73Zm-2.93-3.12H7.9l1.06-2.92 1.09 2.92Z" />
                </svg>
                <QuestionTitle href="https://stackoverflow.com/questions/351409/how-to-append-something-to-an-array/351421#351421">
                  How to append something to an array?
                </QuestionTitle>
                <Content>
                  Use the Array.prototype.push method to append values to the end of an array: //
                  initialize array var arr = [ &quot;Hi&quot;, &quot;Hello&quot;,
                  &quot;Bonjour&quot; ]; // append new value to the array
                  arr.push(&quot;Hola&quot;); console.log …
                </Content>
                <InfoContainer>
                  <TagsContainer>
                    <Tag>html</Tag>
                    <Tag>css</Tag>
                    <Tag>javascript</Tag>
                  </TagsContainer>
                  <PostInfo>
                    <UserPic />
                    <User href="https://stackoverflow.com/users/20315421/seyeon-kim">uxolrv</User>
                    <Time>answered Feb 15, 2010 at 7:43</Time>
                  </PostInfo>
                </InfoContainer>
              </Question>
            </List>
          </ResultList>
        </Results>
        {/* <Pagination
          total={lists.length}
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
        /> */}
      </MainBar>
      <Aside />
    </SearchPage>
  );
}

export default Search;
