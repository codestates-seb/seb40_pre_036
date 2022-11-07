import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import QuestionContent from '../components/qna/QuestionContent';
import QnAHeader from '../components/qna/QnAHeader';
import QnAComment from '../components/qna/QnAComment';
import AnswerContent from '../components/qna/AnswerContent';
import AnswerForm from '../components/qna/AnswerForm';
import RelatedContents from '../components/qna/RelatedContents';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 1088px;
`;

const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// header 밑 부분 정렬
const ContentContainer = styled.div`
  display: flex;
  margin-top: 18px;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  gap: 50px;
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
  const [questionVotes, setQuestionVotes] = useState(0);
  const [answerVotes, setAnswerVotes] = useState(0);

  useEffect(() => {
    // console.log(answers);
    console.log(answerVotes);
    console.log(questionVotes);
  }, [answerVotes, questionVotes]);

  useEffect(() => {
    // question list data 요청
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        console.log('data', data);
        // console.log('data.data.answers', data.data.answers.data);
        setQuestion(data.data);
        setQuestionVotes(data.data.votes);
        if (data.data.answers) {
          setAnswers(data.data.answers.data);
          setTotalANum(data.data.answers.pageInfo.totalElements);
          // setAnswerVotes(data.data.answers.data.map(el => el.vote));
        }

        // console.log('나우러 답변', answers[0].vote);
        // console.log('questionVotes', questionVotes);
        // console.log('answerVotes', answerVotes);
        // console.log('총 질문수!!', data.pageInfo.totalElements);
        // setQuestion(data.data);
        // setTotalQNum(data.pageInfo.totalElements);
      })
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/questions/${id}`).then(res => {
  //     console.log('res', res);
  //     setQuestions(res.data);
  //   });
  // }, []);
  return (
    <Container>
      <Nav path="Questions" />
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
              id={question.questionId}
              user={question.user}
              setQuestionVotes={setQuestionVotes}
              questionVotes={questionVotes}
              createdAt={question.createdAt}
            />
            <QnAComment />
            <Title>{totalANum} Answer</Title>
            {answers &&
              answers.map((ans, i) => (
                <AnswerContent
                  key={ans.answerId}
                  ansId={ans.answerId}
                  queId={ans.questionId}
                  content={ans.answerContent}
                  user={ans.user}
                  answerVotes={answerVotes}
                  // answerVotes={
                  //   Array.isArray(answerVotes) ? answerVotes.filter((el, idx) => idx === i) : null
                  // }
                  // votes={
                  //   Array.isArray(answerVotes) ? answerVotes.filter((el, idx) => idx === i) : null
                  // }
                  totalANum={totalANum}
                  setAnswerVotes={setAnswerVotes}
                  createdAt={ans.createdAt}
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
