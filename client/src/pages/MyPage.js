import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import {
  faUser,
  faCake,
  faClock,
  faPencil,
  faChartLine,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faStackExchange, faUsb } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../components/Nav';

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Incontainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 70%;
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Tabs = styled.div`
  display: flex;
`;
const Tab = styled.div`
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 0.8rem;
  color: #656b71;
  &:hover {
    background-color: #f1f2f3;
    border-radius: 30px;
  }
  &.clicked {
    background-color: #f1823b;
    border-radius: 30px;
    color: white;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
  justify-content: center;
`;
const H1 = styled.h1`
  font-size: 2rem;
  margin-left: 10px;
`;
const Detail = styled.div`
  display: flex;
  margin: 15px 5px;
  font-size: 0.7rem;
  color: #9ba2a9;
  cursor: pointer;
  white-space: nowrap;
`;
const FAI = styled.div`
  margin: 0 5px 0 10px;
`;
const FAI2 = styled.div`
  margin-right: 5px;
`;
const Buttons = styled.div`
  display: flex;
  height: 30px;
`;
const Button = styled.button`
  text-decoration: none;
  margin: 0 5px;
  color: #9ba2a9;
  background-color: white;
  border-color: #9ba2a9;
  border: 1px solid;
  cursor: pointer;
  font-size: 0.7rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  &:hover {
    background-color: #f8f9f9;
  }
`;
const Left = styled.div`
  display: flex;
`;
const Body = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Subnav = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  color: #656b71;
`;
const Sub = styled.h5`
  cursor: pointer;
  padding: 5px 30px 5px 10px;
  &:hover {
    background-color: #f1f2f3;
    border-radius: 30px;
  }
`;
const Subbody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Summaries = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 3px;
  border-color: #9ba2a9;
  padding: 50px 15px;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
  width: 100%;
`;
const Summary = styled.div`
  display: flex;
  font-size: 0.8rem;
  white-space: nowrap;
  margin: 10px 5px 5px 0;
  margin-bottom: 10px;
`;
const Summary2 = styled.div`
  display: flex;
  font-size: 0.4rem;
  color: #9ba2a9;
  margin-bottom: 30px;
  width: 230px;
  text-align: center;
`;
const Subsummary = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #8f969c;
`;
const Button2 = styled.button`
  text-decoration: none;
  background-color: #2e94f7;
  color: white;
  border: none;
  padding: 5%;
  cursor: pointer;
`;
const Line = styled.div`
  display: flex;
  width: 100%;
`;
const Inline = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const H3 = styled.h3`
  margin-top: 10px;
`;
const Span = styled.span`
  color: #3984d2;
  cursor: pointer;
`;

function Mypage() {
  const [clicked, setClicked] = useState();

  const onClick = useCallback(e => {
    const text = e.target.innerText;
    setClicked(text);
  }, []);
  return (
    <Main>
      <Container>
        <Incontainer>
          <Nav />
          <Content>
            <Head>
              <Left>
                <FontAwesomeIcon icon={faUser} size="6x" />
                <Details>
                  <H1>삼육두유</H1>
                  <Detail>
                    <FAI>
                      <FontAwesomeIcon icon={faCake} />
                    </FAI>
                    Member for 3 days
                    <FAI>
                      <FontAwesomeIcon icon={faClock} />
                    </FAI>
                    Last seen this week
                    <FAI>
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </FAI>
                    Visited 3 days, 3 consecutive
                  </Detail>
                </Details>
              </Left>
              <Buttons>
                <Button>
                  <FAI2>
                    <FontAwesomeIcon icon={faPencil} size="1x" />
                  </FAI2>
                  Edit profile
                </Button>
                <Button>
                  <FAI2>
                    <FontAwesomeIcon icon={faStackExchange} size="1x" color="#5a8dc5" />
                  </FAI2>
                  Network profile
                </Button>
              </Buttons>
            </Head>
            <Tabs>
              <Tab className={clicked === 'profile' ? 'clicked' : ''} onClick={onClick}>
                profile
              </Tab>
              <Tab className={clicked === 'Activity' ? 'clicked' : ''} onClick={onClick}>
                Activity
              </Tab>
              <Tab className={clicked === 'saves' ? 'clicked' : ''} onClick={onClick}>
                saves
              </Tab>
              <Tab className={clicked === 'Settings' ? 'clicked' : ''} onClick={onClick}>
                Settings
              </Tab>
            </Tabs>
            <Body>
              <Subnav>
                <Sub>Summary</Sub>
                <Sub>Answer</Sub>
                <Sub>Questions</Sub>
                <Sub>Tags</Sub>
                <Sub>Articles</Sub>
                <Sub>Badges</Sub>
                <Sub>Following</Sub>
                <Sub>Bounties</Sub>
                <Sub>Reputation</Sub>
                <Sub>All actions</Sub>
                <Sub>Responses</Sub>
                <Sub>Votes</Sub>
              </Subnav>
              <Subbody>
                <h3>Summary</h3>
                <Subsummary>
                  <Summaries>
                    <FontAwesomeIcon icon={faChartLine} size="2x" color="#a9afb5" />
                    <Summary>Reputation is how the community thanks you</Summary>
                    <Summary2>
                      When users upvote your helpful posts, you will earn reputation and unlock
                      privileges.
                    </Summary2>
                    <Summary>Learn more about reputation and privileges</Summary>
                  </Summaries>
                  <Summaries>
                    <FontAwesomeIcon icon={faUsb} size="2x" color="#a9afb5" />
                    <Summary>Earn badges for helpful actions</Summary>
                    <Summary2>
                      Badges are bits of digital flair that you get when you participate in
                      especially helpful ways.
                    </Summary2>
                    <Button2>Task the Tour and earn your first badge</Button2>
                  </Summaries>
                  <Summaries>
                    <FontAwesomeIcon icon={faUserAstronaut} size="2x" color="#a9afb5" />
                    <Summary>Measure your impact</Summary>
                    <Summary2>
                      Your posts and helpful actions here help hundreds or thousands of people
                      searching for help.
                    </Summary2>
                  </Summaries>
                </Subsummary>
                <Line>
                  <Inline>
                    <H3>Answers</H3>
                    <Subsummary>
                      <Summaries>
                        <Subsummary>
                          You have not <Span>&nbsp;answered&nbsp;</Span> any questions
                        </Subsummary>
                      </Summaries>
                    </Subsummary>
                  </Inline>
                  <Inline>
                    <H3>Questions</H3>
                    <Subsummary>
                      <Summaries>
                        <Subsummary>
                          You have not <Span>&nbsp;asked&nbsp;</Span>any questions
                        </Subsummary>
                      </Summaries>
                    </Subsummary>
                  </Inline>
                </Line>
                <Line>
                  <Inline>
                    <H3>Tags</H3>
                    <Subsummary>
                      <Summaries>
                        <Subsummary>
                          You have not participated in any <Span>&nbsp;tags</Span>
                        </Subsummary>
                      </Summaries>
                    </Subsummary>
                  </Inline>
                  <Inline>
                    <H3>Reputation</H3>
                    <Subsummary>
                      <Summaries>
                        <Subsummary>
                          You have no recent <Span>&nbsp;reputation changes</Span>
                        </Subsummary>
                      </Summaries>
                    </Subsummary>
                  </Inline>
                </Line>
                <H3>Badges</H3>
                <Subsummary>
                  <Summaries>
                    <Subsummary>
                      You have not earned any <Span>&nbsp;badges</Span>
                    </Subsummary>
                  </Summaries>
                </Subsummary>
                <H3>Followed posts</H3>
                <Subsummary>
                  <Summaries>
                    <Subsummary>
                      You are not <Span>&nbsp;following any posts.</Span>
                    </Subsummary>
                  </Summaries>
                </Subsummary>
                <H3>Accounts</H3>
                <Subsummary>
                  <Summaries>
                    <Span>Stack Overflow</Span>
                  </Summaries>
                </Subsummary>
                <H3>Active bounties (0)</H3>
                <Subsummary>
                  <Summaries>
                    <Subsummary>
                      You have no active <Span>&nbsp;bounties</Span>
                    </Subsummary>
                  </Summaries>
                </Subsummary>
                <H3>Articles</H3>
                <Subsummary>
                  <Summaries>
                    <Subsummary>
                      You have not created any <Span>&nbsp;articles.</Span>
                    </Subsummary>
                  </Summaries>
                </Subsummary>
                <H3>Votes cast</H3>
                <Subsummary>
                  <Summaries>
                    <Subsummary>
                      You have not cast any <Span>&nbsp;votes</Span>
                    </Subsummary>
                  </Summaries>
                </Subsummary>
              </Subbody>
            </Body>
          </Content>
        </Incontainer>
      </Container>
    </Main>
  );
}

export default Mypage;
