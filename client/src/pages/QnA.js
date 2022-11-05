import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import QuestionContent from '../components/qna/QuestionContent';
import QnAHeader from '../components/qna/QnAHeader';
import QnAComment from '../components/qna/QnAComment';
import AnswerContent from '../components/qna/AnswerContent';
import AnswerForm from '../components/qna/AnswerForm';
import RelatedContents from '../components/qna/RelatedConent';

const Container = styled.div`
  display: flex;
  margin: 0 5rem 0 3rem;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const QnAContainer = styled.div`
  max-width: 730px;
  display: flex;
  flex-direction: column;
`;

// header 밑 부분 정렬
const ContentContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h2`
  color: #232629;
  font-size: 20px;
  margin: 25px 0;
`;

function QnA() {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [totalANum, setTotalANum] = useState(0);

  useEffect(() => {
    // question list data 요청
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(json => {
        console.log('json', json);
        console.log('json.data.answers', json.data.answers);
        setQuestion(json.data);
        if (json.data.answers) {
          setAnswers(json.data.answers.data);
          setTotalANum(json.data.answers.pageInfo.totalElements);
        }
        // console.log('총 질문수!!', data.pageInfo.totalElements);
        // setQuestion(data.data);
        // setTotalQNum(data.pageInfo.totalElements);
      })
      .catch(err => console.log(err));
  }, []);

  console.log('answers', answers);
  console.log('question', question);
  console.log('유저있나요', question.user);
  // useEffect(() => {
  //   axios.get(`http://localhost:3001/questions/${id}`).then(res => {
  //     console.log('res', res);
  //     setQuestions(res.data);
  //   });
  // }, []);
  return (
    <Container>
      <Nav />
      <MainContainer>
        <QnAHeader
          title={question.title}
          view={question.view}
          createdAt={question.createdAt}
          updatedAt={question.updatedAt}
        />
        <ContentContainer>
          <QnAContainer>
            <QuestionContent
              content={question.content}
              tags={question.questionTags && question.questionTags.map(el => el.tagName)}
              votes={question.votes}
              id={question.questionId}
              user={question.user}
            />
            <QnAComment />
            <Title>{totalANum} Answer</Title>
            {answers &&
              answers.map(ans => (
                <AnswerContent
                  key={ans.answerId}
                  id={ans.answerId}
                  content={ans.answerContent}
                  user={ans.user}
                  totalANum={totalANum}
                />
              ))}
            <AnswerForm id={id} />
          </QnAContainer>
          <AsideContainer>
            <Aside />
            <RelatedContents />
          </AsideContainer>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}

export default QnA;
