import React, { useState, useEffect } from 'react';
import { faChartLine, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faUsb } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Tag from '../Tag';

const Body = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Subnav = styled.nav`
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
const Tags = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  margin-right: 10px;
  padding: 0 8px;
  padding-right: 5px;
  border-radius: 5px;
  background-color: #e1ecf4;
  white-space: nowrap;
  color: #4a80a7;
  font-size: 0.7rem;
`;
function Acitivity({ questions, tags }) {
  // const questionTitleList = user.questions || [];
  // setTagList(user.tags.map(tag => tag.tagName));
  // const [tagList, setTagList] = useState([] || tags);
  const tagList = tags;
  // useEffect(() => {
  //   setTagList(tags);
  // }, []);
  // console.log(user);
  console.log(tagList);
  console.log(questions);
  // console.log(questionTitleList);
  return (
    <Body>
      <Subnav>
        <Sub>Summary </Sub>
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
              When users upvote your helpful posts, you will earn reputation and unlock privileges.
            </Summary2>
            <Summary>Learn more about reputation and privileges</Summary>
          </Summaries>
          <Summaries>
            <FontAwesomeIcon icon={faUsb} size="2x" color="#a9afb5" />
            <Summary>Earn badges for helpful actions</Summary>
            <Summary2>
              Badges are bits of digital flair that you get when you participate in helpful ways.
            </Summary2>
            <Button2>Task the Tour and earn your first badge</Button2>
          </Summaries>
          <Summaries>
            <FontAwesomeIcon icon={faUserAstronaut} size="2x" color="#a9afb5" />
            <Summary>Measure your impact</Summary>
            <Summary2>
              Your posts and helpful actions here help hundreds or thousands of people help.
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
                {/* {user.questions === [] ? (
                  <Subsummary>
                    You have not <Span>&nbsp;asked&nbsp;</Span>any questions
                  </Subsummary>
                ) : (
                  <Subsummary>questionTitle 목록을 넣을거예요</Subsummary>
                )} */}
              </Summaries>
            </Subsummary>
          </Inline>
        </Line>
        <Line>
          <Inline>
            <H3>Tags</H3>
            <Subsummary>
              <Summaries>
                {/* <Subsummary>tag목록을 넣을거예요</Subsummary> */}
                {tags === [] ? (
                  <Subsummary>
                    You have not participated in any <Span>&nbsp;tags</Span>
                  </Subsummary>
                ) : (
                  <Subsummary>
                    {tags &&
                      tags.map((tag, index) => (
                        <Tags key={`${index.toString()}-${tag}`}>{tag}</Tags>
                      ))}
                  </Subsummary>
                )}
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
  );
}

export default Acitivity;
