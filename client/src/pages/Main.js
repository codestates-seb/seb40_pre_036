import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Aside from '../components/Aside';
import Nav from '../components/Nav';
import QuestionsList from '../components/main/QuestionList';
import QuestionListHeader from '../components/main/QuestionListHeader';

const Allcontent = styled.div`
  display: flex;
`;

// li 태그를 담을 ul태그
const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  color: #232629;
  font-size: 13px;
`;

function Main() {
  const [lists, setLists] = useState([]);

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
        {lists.map(list => (
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
      </ListContainer>
      <Aside />
    </Allcontent>
  );
}

export default Main;
