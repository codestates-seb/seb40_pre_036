import React from 'react';
import styled from 'styled-components';

const RelatedContainer = styled.aside`
  display: flex;
  flex-direction: column;
  color: #3b4045;
  margin-top: 15px;
  margin: 0 0 10px 25px;

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const RelatedVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  min-height: 23px;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 10px;
  color: white;
  background-color: #5eba7d;
  cursor: pointer;
`;

const RelatedPost = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const RelatedTitle = styled.a`
  text-decoration: none;
  line-height: 1.4;
  width: 80%;
  cursor: pointer;
  font-size: 13px;
  color: #0074cc;

  &:visited {
    text-decoration: none;
  }
  &:hover {
    color: #0a95ff;
  }
`;

function RelatedContents() {
  return (
    <RelatedContainer>
      <h2>Related</h2>
      <RelatedPost>
        <RelatedVote>1</RelatedVote>
        <RelatedTitle href="https://stackoverflow.com/questions/45191699/node-js-page-not-loading-when-refreshed?rq=1">
          Node.js page not loading when refreshed
        </RelatedTitle>
      </RelatedPost>
      <RelatedPost>
        <RelatedVote>42</RelatedVote>
        <RelatedTitle href="https://stackoverflow.com/questions/52969381/how-can-i-capture-all-network-requests-and-full-response-data-when-loading-a-pag?rq=1">
          How can I capture all network requests and full response data when loading a page in
          Chrome?
        </RelatedTitle>
      </RelatedPost>
      <RelatedPost>
        <RelatedVote>20</RelatedVote>
        <RelatedTitle href="https://stackoverflow.com/questions/45191699/node-js-page-not-loading-when-refreshed?rq=1">
          How to get all html data after all scripts and page loading is done? (puppeteer)
        </RelatedTitle>
      </RelatedPost>
      <RelatedPost>
        <RelatedVote>9</RelatedVote>
        <RelatedTitle href="https://stackoverflow.com/questions/58381733/nodejs-page-not-loading-when-rendering?rq=1">
          Nodejs page not loading when rendering
        </RelatedTitle>
      </RelatedPost>
      <RelatedPost>
        <RelatedVote>4</RelatedVote>
        <RelatedTitle href="https://stackoverflow.com/questions/62902014/how-can-i-get-all-network-requests-and-full-response-data-when-loading-a-page-by?rq=1">
          How can I get all network requests and full response data when loading a page by
          Puppeteer-sharp?
        </RelatedTitle>
      </RelatedPost>
      <RelatedPost>
        <RelatedVote>6</RelatedVote>
        <RelatedTitle href="https://stackoverflow.com/questions/64249101/cant-get-all-ajax-calls-response-in-puppeteer-page-loading?rq=1">
          cant get all ajax calls response in puppeteer page loading
        </RelatedTitle>
      </RelatedPost>
    </RelatedContainer>
  );
}

export default RelatedContents;
