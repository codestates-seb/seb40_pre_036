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
  margin-left: 80px;
  width: 37%;
`;

const RelatedContainer = styled.aside`
  display: flex;
  flex-direction: column;
  color: #3b4045;
  margin-top: 3px;
  h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  margin-bottom: 10px;
`;

const RelatedVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  min-height: 23px;
  background-color: #5eba7d;
  font-size: 12px;
  color: white;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
`;

const RelatedPost = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const RelatedTitle = styled.a`
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;
  font-size: 13px;
  line-height: 1.4;
  width: 70%;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    color: #0a95ff;
  }
`;

function QnA() {
  const { id } = useParams();
  console.log(id);
  const [list, setList] = useState({});

  useEffect(() => {
    // question list data 요청
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        console.log('요청~!!!!!!!');
        return res.json();
      })
      .then(json => {
        console.log('json', json);
        console.log('json.data.answers', json.data.answers);
        setList(json.data);
        // console.log('총 질문수!!', data.pageInfo.totalElements);
        // console.log('data.data', data.data);
        // setLists(data.data);
        // setTotalQNum(data.pageInfo.totalElements);
      })
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/questions/${id}`).then(res => {
  //     console.log('res', res);
  //     setList(res.data);
  //   });
  // }, []);
  return (
    <Container>
      <Nav />
      <MainContainer>
        <QnAHeader
          title={list.title}
          view={list.view}
          createdAt={list.createdAt}
          updatedAt={list.updatedAt}
        />
        <ContentContainer>
          <QnAContainer>
            <QuestionContent
              content={list.content}
              // tags={list.questionTags}
              votes={list.votes}
              id={list.questionId}
              user={list.user}
            />
            <QnAComment />
            <AnswerContent />
            <AnswerForm id={id} />
          </QnAContainer>
          <AsideContainer>
            <RelatedContainer>
              <h2>Related</h2>
              <RelatedPost>
                <RelatedVote>
                  <span>1</span>
                </RelatedVote>
                <RelatedTitle href="https://stackoverflow.com/questions/45191699/node-js-page-not-loading-when-refreshed?rq=1">
                  Node.js page not loading when refreshed
                </RelatedTitle>
              </RelatedPost>
              <RelatedPost>
                <RelatedVote>
                  <span>42</span>
                </RelatedVote>
                <RelatedTitle href="https://stackoverflow.com/questions/52969381/how-can-i-capture-all-network-requests-and-full-response-data-when-loading-a-pag?rq=1">
                  How can I capture all network requests and full response data when loading a page
                  in Chrome?
                </RelatedTitle>
              </RelatedPost>
              <RelatedPost>
                <RelatedVote>
                  <span>20</span>
                </RelatedVote>
                <RelatedTitle href="https://stackoverflow.com/questions/45191699/node-js-page-not-loading-when-refreshed?rq=1">
                  How to get all html data after all scripts and page loading is done? (puppeteer)
                </RelatedTitle>
              </RelatedPost>
              <RelatedPost>
                <RelatedVote>
                  <span>1</span>
                </RelatedVote>
                <RelatedTitle href="https://stackoverflow.com/questions/58381733/nodejs-page-not-loading-when-rendering?rq=1">
                  Nodejs page not loading when rendering
                </RelatedTitle>
              </RelatedPost>
              <RelatedPost>
                <RelatedVote>
                  <span>1</span>
                </RelatedVote>
                <RelatedTitle href="https://stackoverflow.com/questions/62902014/how-can-i-get-all-network-requests-and-full-response-data-when-loading-a-page-by?rq=1">
                  How can I get all network requests and full response data when loading a page by
                  Puppeteer-sharp?
                </RelatedTitle>
              </RelatedPost>
              <RelatedPost>
                <RelatedVote>
                  <span>1</span>
                </RelatedVote>
                <RelatedTitle href="https://stackoverflow.com/questions/64249101/cant-get-all-ajax-calls-response-in-puppeteer-page-loading?rq=1">
                  cant get all ajax calls response in puppeteer page loading
                </RelatedTitle>
              </RelatedPost>
            </RelatedContainer>
            <Aside />
          </AsideContainer>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}

export default QnA;
