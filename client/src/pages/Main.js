import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Aside from '../components/Aside';
import Nav from '../components/Nav';
import QuestionsList from '../components/main/QuestionList';
import QuestionListHeader from '../components/main/QuestionListHeader';
import Pagination from '../components/Pagination';

const Allcontent = styled.div`
  display: flex;
  margin: 0 5rem 0 3rem;
`;

// li 태그를 담을 ul태그
const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  color: #232629;
  font-size: 13px;
`;

function Main() {
  const [lists, setLists] = useState([]); // pagination이 필요한 페이지가 여러 개이니, 이 상태들 전역에서 관리해야하지 않을까?
  const [limit, setLimit] = useState(15); // pagination이 필요한 페이지마다 Limit이 다름 // setLimit
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    // question list data 요청
    fetch('http://localhost:3001/questions')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => setLists(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Allcontent>
      <Nav path="Questions" />
      <ListContainer>
        <QuestionListHeader />
        {lists.slice(offset, offset + limit).map(list => (
          <QuestionsList
            key={list.id}
            answerCount={list.answer_count}
            body={list.body}
            score={list.score}
            tags={list.tags}
            time={list.time}
            title={list.title}
            user={list.user}
            viewCount={list.view_count}
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
      <Aside />
    </Allcontent>
  );
}

export default Main;
