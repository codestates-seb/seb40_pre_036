import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Aside from '../components/Aside';

const Container = styled.div`
  display: flex;
`;

const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  /* height: 114px; */
  /* padding: 20px 20px 10px 20px; */
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e3e6e8;
  font-size: 13px;
  color: #232639;
  line-height: 1.4;
`;

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: #3b4045;
  max-width: 1080px;
`;

const AskBtn = styled.button`
  min-width: 103px;
  height: 38px;
  color: white;
  background-color: rgb(0, 137, 254);
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.5);
  border-radius: 3px;
  white-space: nowrap;
  margin-left: 10px;
`;

const PostInfo = styled.div`
  color: #6a737c;
  display: flex;
  padding-top: 8px;
`;

const Time = styled.time`
  margin: 0 15px 0 6px;
  color: #232639;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
`;

const Content = styled.div`
  color: #232629;
  font-size: 15px;
`;

const Paragraph = styled.p`
  max-width: 730px;
  margin-bottom: 10px;
  line-height: 1.6;
  /* word-wrap: break-word; */
`;

const Icon = styled.svg`
  fill: gray;
`;

const VoteBtn = styled.button`
  border: none;
  background: none;
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
  :visited {
    text-decoration: none;
  }
`;

function QnA() {
  return (
    <Container>
      <Nav />
      <QnAContainer>
        <Header>
          <Title>
            Capture all network requests and full response data when loading a page in Chrome - not
            working well
            {/* Capture all network requests and full response data when loading a page in Chrome - not
          working well */}
            <AskBtn>Ask Question</AskBtn>
          </Title>
          <PostInfo>
            <div>
              Asked
              <Time>today</Time>
            </div>
            <div>
              Modified
              <Time>today</Time>
            </div>
            <div>
              Viewed
              <Time>3 times</Time>
            </div>
          </PostInfo>
        </Header>
        <ContentContainer>
          <SideBar>
            <VoteBtn type="button">
              <Icon
                aria-hidden="true"
                className="svg-icon iconArrowUpLg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path d="M2 25h32L18 9 2 25Z" />
              </Icon>
            </VoteBtn>
          </SideBar>
          <Content>
            <Paragraph>
              I&apos;m abling to fetch some data but not all with the function describe in similar
              question and copied to this question.
            </Paragraph>
            <Paragraph>
              The function does exactly what it is meant to do. But my problem is with this method
              the desired request not appear on to screen.
            </Paragraph>
            <Paragraph>
              The desired request should respond with products JSON information. and it didn&apos;t.
              when I surf to the same URL without coding I can see that request with full responed
              and I can see in UI all products arrived from this request. But when doing it in this
              method and (```headless: false&apos; &apos;) the UI shows all excluding the products
              data. What am I missing here?
            </Paragraph>
            <Paragraph>
              I understand that I can select the remote I wish to &quot;push&quot; to:
            </Paragraph>
            <Paragraph>git push origin main</Paragraph>
            <Paragraph>
              But taking a step back from the push, when I add and commit, these aren&apos;t tied
              back to a repo. So is there a way I can group commit changes for specific repos?
            </Paragraph>
            <Paragraph>For example,</Paragraph>
            <Paragraph>git add README.md git commit -am &quot;FIRST COMMIT&quot;</Paragraph>
            <Paragraph>
              git add test1234.html git add test5678.html git commit -am &quot;SECOND COMMIT&quot;
            </Paragraph>
            <Paragraph>
              Can I push both of these commits to the &quot;origin&quot; repo and just the first
              commit to the &quot;prod&quot; repo?
            </Paragraph>
          </Content>
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
      </QnAContainer>
    </Container>
  );
}

export default QnA;
