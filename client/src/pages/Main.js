import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Aside from '../components/Aside';
import Nav from '../components/Nav';
import QuestionsList from '../components/main/QuestionList';
import QuestionListHeader from '../components/main/QuestionListHeader';
import Pagination from '../components/Pagination';

const Allcontent = styled.div`
  display: flex;
  justify-content: center;
`;

// li 태그를 담을 ul태그
const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  color: #232629;
  font-size: 13px;
  width: 751px;
`;

function Main() {
  const [lists, setLists] = useState([]); // pagination이 필요한 페이지가 여러 개이니, 이 상태들 전역에서 관리해야하지 않을까?
  const [limit, setLimit] = useState(15); // pagination이 필요한 페이지마다 Limit이 다름 // setLimit
  const [page, setPage] = useState(1);
  const [totalQNum, setTotalQNum] = useState(0);
  const offset = (page - 1) * limit;
  const [sort, setSort] = useState('questionId');
  const token = localStorage.getItem('accessToken');
  console.log('현재 sort', sort);

  useEffect(() => {
    // question list data 요청
    fetch(
      `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions?size=100&sort=${sort}`,
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      },
    )
      // questions?page={page}&size={size}&sort={sort}
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        console.log('data', data);
        console.log('총 질문수!!', data.pageInfo.totalElements);
        console.log('data.data', data.data);
        setLists(data.data);
        setTotalQNum(data.pageInfo.totalElements);
      })
      .catch(err => console.log(err));
  }, [sort]);

  return (
    <Allcontent>
      <Nav path="Questions" />
      <ListContainer>
        <QuestionListHeader totalQNum={totalQNum} setSort={setSort} sort={sort} />
        {lists.slice(offset, offset + limit).map(list => (
          <QuestionsList
            key={list.questionId}
            // {`${i.toString()}-${page}`}
            id={list.questionId}
            answerCount={list.answerCount}
            content={list.content}
            votes={list.votes}
            questionTags={list.questionTags.map(el => el.tagName)}
            createdAt={list.createdAt}
            title={list.title}
            user={list.user.displayName}
            viewCount={list.view}
          />
        ))}
        <Pagination
          total={lists.length}
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
        />
      </ListContainer>
      <div>
        <Aside />
      </div>
    </Allcontent>
  );
}

export default Main;
