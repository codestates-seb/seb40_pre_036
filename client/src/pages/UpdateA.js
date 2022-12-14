import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import EditorComp from '../components/EditorComp';
import Cancel from '../components/CancelCard';

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  padding: 24px;
  width: 1088px;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    margin-left: 10px;
  }
`;

// 왼쪽 Content
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

// Alert 부분
const Alert = styled.div`
  background-color: #fdf7e2;
  border: 1px solid;
  border-radius: 3px;
  border-color: #e6cf79;
  padding: 1%;
  color: #787a77;
  margin-bottom: 20px;
`;
const H6 = styled.h6`
  color: #787a77;
  margin: 10px;
  font-size: 0.7rem;
`;

// Body
const Body = styled.div``;
const Bodyeditor = styled.div``;

// Body title
const Title = styled.h2`
  margin-bottom: 10px;
`;

// Body button
const Buttons = styled.div`
  display: flex;
  margin: 10px;
`;
const SaveEdit = styled.button`
  padding: 10px;
  color: white;
  text-decoration: none;
  background-color: #379fef;
  border-radius: 3px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;
const CancelBtn = styled.button`
  color: #379fef;
  padding: 10px 15px;
  border: none;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

// 오른쪽 alert
const Side = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 300px;
`;
const Sidealert = styled.div`
  box-shadow: 2px 2px 2px 1px #e7e7e7;
  margin-bottom: 20px;
`;
// 오른쪽 alert title
const SideAlertTitle = styled.div`
  display: flex;
  background-color: #fbf3d5;
  padding: 3%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid;
  border-color: #f1e5bc;
  color: #3b4045;
`;

// 오른쪽 alert content
const Explain = styled.div`
  padding: 5px 70px 5px 20px;
  background-color: #faf5e6;
  border: 1px solid;
  border-color: #f1e5bc;
`;
const Ul = styled.ul`
  color: #6c6f6f;
  list-style: decimal !important;
`;

const Li = styled.li`
  display: flex;
  white-space: nowrap;
  margin: 10px 0;
  font-size: 0.8rem;
  padding-right: 30px;
  list-style: inside;
`;
function UpdateA() {
  const navigate = useNavigate();
  const initialToken = localStorage.getItem('accessToken');

  const [content, setContent] = useState('');
  const [updateContent, setUpdateContent] = useState('');
  const [cancelOpen, setCancelOpen] = useState(false);

  // id 받아오기
  const id = useLocation().pathname.split('/')[2];
  const qid = content.questionId;
  const aid = content.answerId;
  console.log(content);
  console.log(qid);
  // content 바꾸는 부분
  const handleContentChange = e => {
    setUpdateContent(e);
  };

  // content 내용 받아오는 부분
  useEffect(() => {
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/ans/${id}`)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(json => {
        setContent(json.data);
        setUpdateContent(json.data.answerContent);
      });
  }, []);

  // content update 하기
  const updateAnswer = () => {
    fetch(
      `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/answer/${aid}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          Authorization: initialToken,
        },
        body: JSON.stringify({
          answerContent: updateContent,
        }),
      },
    )
      .then(res => res.json())
      .catch(err => console.log(err));
  };

  // 수정내용 내보내기
  const handleSubmit = e => {
    e.preventDefault();
    updateAnswer();
    navigate(`/questions/${qid}`);
  };

  // discard 모달 오픈
  const onCancelModal = () => {
    setCancelOpen(!cancelOpen);
  };
  return (
    <Main>
      <Nav path="Questions" />
      <Container>
        <Content>
          <Alert>
            <H6>Your edit will be placed in a queue until it is peer reviewed.</H6>
            <H6>
              We welcome edits that make the post easier to understand and more valuable for
              readers. Because community members review edits, please try to make the post
              substantially better than how you found it, for example, by fixing grammar or adding
              additional resources and hyperlinks.
            </H6>
          </Alert>
          <Body>
            <Bodyeditor>
              <Title name="title">Body</Title>
              <EditorComp name="content" value={updateContent} onChange={handleContentChange} />
            </Bodyeditor>
            <Buttons>
              <SaveEdit name="saveEdit" onClick={handleSubmit}>
                Save Edits
              </SaveEdit>
              {cancelOpen && <Cancel onCancelModal={onCancelModal} />}
              <CancelBtn name="cancel" id={qid} onClick={onCancelModal}>
                Cancel
              </CancelBtn>
            </Buttons>
          </Body>
        </Content>
        <Side>
          <Sidealert>
            <SideAlertTitle name="alertTitle">How to Edit</SideAlertTitle>
            <Explain>
              <Ul>
                <Li>Correct minor typos or mistakes</Li>
                <Li>Clarify meaning without changing it</Li>
                <Li>Add related resources or links</Li>
                <Li>Always respect the author’s intent</Li>
                <Li>Don’t use edits to reply to the author</Li>
              </Ul>
            </Explain>
          </Sidealert>
          <Sidealert>
            <SideAlertTitle name="alertTitle">How to Format</SideAlertTitle>
            <Explain>
              <Ul>
                <Li>create code fences with backticks ` or tildes ~</Li>
                <Li>add language identifier to highlight code</Li>
                <Li>put returns between paragraphs</Li>
                <Li>for linebreak add 2 spaces at end</Li>
                <Li>
                  <i>_italic_</i> or <b>**bold**</b>
                </Li>
                <Li>indent code by 4 spaces</Li>
                <Li>backtick escapes `like _so_`</Li>
                <Li>quote by placing &gt; at start of line</Li>
              </Ul>
            </Explain>
          </Sidealert>
        </Side>
      </Container>
    </Main>
  );
}

export default UpdateA;
