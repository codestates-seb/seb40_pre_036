import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import QuestionContent from '../components/qna/QuestionContent';
import QnAHeader from '../components/qna/QnAHeader';
import QnAComment from '../components/qna/QnAComment';
import AnswerContent from '../components/qna/AnswerContent';
import AnswerForm from '../components/qna/AnswerForm';

const Container = styled.div`
  display: flex;
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
  return (
    <Container>
      <Nav />
      <MainContainer>
        <QnAHeader />
        <ContentContainer>
          <QnAContainer>
            <QuestionContent />
            <QnAComment />
            <AnswerContent />
            <AnswerForm />
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
