import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Pagination from '../components/Pagination';
import TimeDiff from '../components/main/TimeDiff';

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

const QuestionBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  width: 100px;
  height: 40px;
  background: #0a95ff;
  color: white;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 400;

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

const NoResult = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgb(216, 217, 220);

  svg {
    fill: hsl(210deg 8% 75%);
  }

  div {
    margin-top: 10px;
    font-size: 13px;
    color: #232629;
  }

  .desc {
    font-size: 17px;
  }

  .keyword {
    font-weight: 600;
  }

  .option {
    font-weight: 600;
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
  border-top: 1px solid rgb(216, 217, 220);
  box-sizing: border-box;
  margin-right: 20px;
  width: 100%;
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
    min-width: 80px;
    text-align: right;
    margin-bottom: 0.3rem;
  }

  .vote,
  .views {
    color: #232629;
  }

  .count {
    // padding: 0 5px 0;
    background: white;
    color: #2f6f44;
    display: flex;
    justify-content: center;
    border-radius: 3px;
    border: 1px solid #2f6f44;
  }
`;

// 질문
const Question = styled.article`
  width: 100%;
  color: #3b4045;
  line-height: 1.3;

  svg {
    margin-right: 0.3rem;
  }
`;

// 질문 제목
const QuestionTitle = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;
  font-size: 17px;
  vertical-align: top;
  &:hover {
    color: #0a95ff;
  }
  &:visited {
    text-decoration: none;
  }
`;

// 질문 내용
const Content = styled.div`
  display: inline-block;
  color: #3b4045;
  font-size: 0.85rem;
  margin-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.4;
  height: 2.8em;
  text-align: left;
  word-wrap: break-word; // 단어 단위로 줄바꿈
  display: -webkit-box; // 유연하게 height를 증감시킬 수 있는 플렉스 박스형태로 변환
  -webkit-line-clamp: 2; // 보여줄 줄 수
  -webkit-box-orient: vertical; // 플렉스 박스의 방향 설정(가로)
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
  margin-right: 6px;
  background-color: #e1ecf4;
  font-size: 12px;
  color: #39739d;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #d0e3f1;
    color: #2c5877;
  }
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
  cursor: pointer;
  margin-right: 4px;
  :visited {
    text-decoration: none;
  }
  &:hover {
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
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const isLogin = useSelector(state => state.isLogin);

  const params = new URLSearchParams(window.location.search);
  const keyword = params.get('q');
  const location = useLocation();

  const fetchSearch = sort => {
    fetch(
      `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions?size=100&sort=${sort}`,
    )
      .then(res => res.json())
      .then(res => {
        const data = res.data.filter(el => {
          return (
            el.title.toUpperCase().includes(keyword.toUpperCase()) ||
            el.content.toUpperCase().includes(keyword.toUpperCase())
          );
        });
        setList(data);
      });
  };

  const onClick = e => {
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
  };

  useEffect(() => {
    fetchSearch(filter);
  }, [location]);

  console.log(list);
  return (
    <SearchPage>
      <Nav />
      <MainBar>
        <Start>
          <Title>Search Results</Title>
          <SearchHelp>
            <SearchTip>Advanced Search Tips</SearchTip>
            {isLogin ? (
              <QuestionBtn to="/questions/ask">Ask Question</QuestionBtn>
            ) : (
              <QuestionBtn to="/users/login">Ask Question</QuestionBtn>
            )}
          </SearchHelp>
        </Start>
        <Results>
          <ResultInfo>Results for {keyword} </ResultInfo>
          <ResultInfo>Search options not deleted</ResultInfo>
          <ResultCount>
            {list.length} results
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
          {list.length === 0 ? (
            <NoResult>
              <svg
                aria-hidden="true"
                className="fc-black-200 svg-spot spotSearchLg"
                width="96"
                height="96"
                viewBox="0 0 96 96"
              >
                <path
                  opacity=".2"
                  d="M60.38 76.15a6.2 6.2 0 1 1 8.77-8.77l17.78 17.79a6.2 6.2 0 0 1-8.76 8.76L60.38 76.15Z"
                />
                <path d="M52.17 13.27a1.5 1.5 0 0 0-1.5 2.6A25.5 25.5 0 0 1 63 32.97a1.5 1.5 0 1 0 2.94-.59 28.5 28.5 0 0 0-13.77-19.1ZM36.64 11c0-.84.67-1.5 1.5-1.5 1.8 0 3.59.19 5.35.53a1.5 1.5 0 1 1-.58 2.95 25.5 25.5 0 0 0-4.78-.48 1.5 1.5 0 0 1-1.5-1.5ZM38 1.5a36.5 36.5 0 1 0 22.3 65.4 6.47 6.47 0 0 0 1.9 4.48l19.15 19.15a6.5 6.5 0 0 0 9.18-9.18L71.38 62.2a6.47 6.47 0 0 0-4.48-1.9A36.5 36.5 0 0 0 38 1.5ZM4.5 38a33.5 33.5 0 1 1 67 0 33.5 33.5 0 0 1-67 0Zm59.83 31.26a3.5 3.5 0 0 1 4.93-4.93l19.15 19.14a3.5 3.5 0 1 1-4.94 4.94L64.33 69.26Z" />
              </svg>
              <div className="desc">
                We couldn&apos;t find anything for <span className="keyword">{keyword}</span>
              </div>
              <div>
                <spans className="option">Search options:</spans> not deleted
              </div>
              <div>Try different or less specific keywords.</div>
            </NoResult>
          ) : (
            <ResultList>
              {list.map(item => (
                <List key={item.questionId}>
                  <Counts>
                    <div className="vote">
                      <span>{item.votes} </span>
                      votes
                    </div>
                    <div className="count">{item.answerCount} answers</div>
                    <div className="views">
                      <span>{item.view} </span>
                      views
                    </div>
                  </Counts>
                  <Question>
                    {item.answerCount === 0 ? (
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconQuestion"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path d="m4 15-3 3V4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v9c0 1.09-.91 2-2 2H4Zm7.75-3.97c.72-.83.98-1.86.98-2.94 0-1.65-.7-3.22-2.3-3.83a4.41 4.41 0 0 0-3.02 0 3.8 3.8 0 0 0-2.32 3.83c0 1.29.35 2.29 1.03 3a3.8 3.8 0 0 0 2.85 1.07c.62 0 1.2-.11 1.71-.34.65.44 1 .68 1.06.7.23.13.46.23.7.3l.59-1.13a5.2 5.2 0 0 1-1.28-.66Zm-1.27-.9a5.4 5.4 0 0 0-1.5-.8l-.45.9c.33.12.66.29.98.5-.2.07-.42.11-.65.11-.61 0-1.12-.23-1.52-.68-.86-1-.86-3.12 0-4.11.8-.9 2.35-.9 3.15 0 .9 1.01.86 3.03-.01 4.08Z" />
                      </svg>
                    ) : (
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconAnswer"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path d="M14 15H3c-1.09 0-2-.91-2-2V4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v14l-3-3Zm-1.02-3L9.82 4H8.14l-3.06 8h1.68l.65-1.79h3.15l.69 1.79h1.73Zm-2.93-3.12H7.9l1.06-2.92 1.09 2.92Z" />
                      </svg>
                    )}

                    <QuestionTitle to={`/questions/${item.questionId}`}>{item.title}</QuestionTitle>
                    <Content>{item.content}</Content>
                    <InfoContainer>
                      <TagsContainer>
                        {item.questionTags.map((tag, index) => (
                          <Tag key={`${index.toString()}-${tag}`}>{tag.tagName}</Tag>
                        ))}
                      </TagsContainer>
                      <PostInfo>
                        <UserPic />
                        <User href="https://stackoverflow.com/users/20315421/seyeon-kim">
                          {item.user.displayName}
                        </User>
                        <Time>
                          <TimeDiff createAt={item.createdAt} />
                        </Time>
                      </PostInfo>
                    </InfoContainer>
                  </Question>
                </List>
              ))}
            </ResultList>
          )}
        </Results>
        <Pagination
          total={list.length}
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
        />
      </MainBar>
      <Aside />
    </SearchPage>
  );
}

export default Search;
