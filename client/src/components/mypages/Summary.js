import React from 'react';
import styled from 'styled-components';
import { faChartLine, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faUsb } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Subbody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Summaries = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const Subsummary1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #8f969c;
  height: 250px;
`;
const Subsummary = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #8f969c;
  height: 170px;
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
  flex-direction: column;
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
// question
const SummariesQ = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  border-radius: 3px;
  border-color: #9ba2a9;
  padding: 0 15px;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
  width: 100%;
  overflow: scroll;
`;
const ListQ = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
`;
const Questions = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  white-space: nowrap;
  overflow: scroll;
  cursor: pointer;
  color: #0074cc;
  &:hover {
    color: #0a95ff;
  }
  &:visited {
    text-decoration: none;
  }
`;
// answers
const AnswerMap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 10px 10px 0 0;
  height: 170px;
  overflow: auto;
`;
const Answers = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  color: #0074cc;
  &:hover {
    color: #0a95ff;
  }
  &:visited {
    text-decoration: none;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
  padding: 20px 15px;
  border: 1px solid var(--color-font-gray);
`;
const RelatedPostQ = styled.div`
  display: flex;
  align-items: center;
`;
const Date = styled.div`
  display: flex;
  margin-left: 30px;
  width: 60px;
  justify-content: flex-end;
`;
const Tagview = styled.div`
  display: flex;
  color: #6a737c;
  font-size: var(--font-size-base);
`;
const Tagtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
`;
function SummaryTab({ answers, questions, questionList, tags, tagsLength }) {
  return (
    <Subbody>
      <h3>Summary</h3>
      <Subsummary1>
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
      </Subsummary1>
      <Line>
        <Inline>
          <H3>Answers</H3>
          <AnswerMap>
            {answers === [] ? (
              <Subsummary>
                You have not <Span>&nbsp;answered &nbsp;</Span>any questions
              </Subsummary>
            ) : (
              answers &&
              answers.map(answer => (
                <RelatedPost>
                  <RelatedPostQ>
                    <RelatedVote key={`${answer.answerId.toString()}-${answer.vote}`}>
                      {answer.vote}
                    </RelatedVote>
                    <Answers
                      to={`/questions/${answer.questionId}`}
                      key={`${answer.answerId.toString()}-${answer.answerContent.slice(0, 5)}`}
                    >
                      {answer.answerContent.slice(0, 17)}
                    </Answers>
                  </RelatedPostQ>
                  <Date key={`${answer.answerId.toString()}-${answer.modifiedAt}`}>
                    {answer.modifiedAt.slice(5, 10)}
                  </Date>
                </RelatedPost>
              ))
            )}
          </AnswerMap>
        </Inline>
        <Inline>
          <H3>Questions</H3>
          <AnswerMap>
            {questionList === [] ? (
              <Subsummary>
                You have not <Span>&nbsp;asked&nbsp;</Span>any questions
              </Subsummary>
            ) : (
              questionList &&
              questions.map(question => (
                <RelatedPost>
                  <RelatedPostQ>
                    <RelatedVote key={`${question.votes.toString()}-${question.votes}`}>
                      {question.votes}
                    </RelatedVote>
                    <Answers
                      to={`/questions/${question.questionId}`}
                      key={`${question.questionId.toString()}-${question.title}`}
                    >
                      {question.title.slice(0, 17)}
                    </Answers>
                  </RelatedPostQ>
                  <Date key={`${question.updatedAt.toString()}-${question.updatedAt}`}>
                    {question.updatedAt.slice(5, 10)}
                  </Date>
                </RelatedPost>
              ))
            )}
          </AnswerMap>
        </Inline>
      </Line>
      <Line>
        <Inline>
          <Tagtitle>
            <H3>Tags</H3>
            <Tagview>View all {tagsLength} tags</Tagview>
          </Tagtitle>
          <Subsummary>
            <Summaries>
              {tags === [] ? (
                <Subsummary>
                  You have not participated in any <Span>&nbsp;tags</Span>
                </Subsummary>
              ) : (
                <Subsummary>
                  <List>
                    {tags &&
                      tags.map((tag, index) => (
                        <Tags key={`${index.toString()}-${tag}`}>{tag}</Tags>
                      ))}
                  </List>
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
  );
}

export default SummaryTab;
