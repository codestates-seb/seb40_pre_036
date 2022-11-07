import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import EditorComp from '../components/EditorComp';
import Tag from '../components/Tag';
import Discard from '../components/creatQ/Discard';

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  padding: 24px;
  width: 1088px;
  justify-content: center;
`;

// 1.글 쓰는 부분
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 70%;
`;

// 1-1글쓰기 위에 alert부분
const Alert = styled.div`
  background-color: #fdf7e2;
  border: 1px solid;
  border-radius: 3px;
  border-color: #e6cf79;
  padding: 1%;
  color: #787a77;
  margin-bottom: 20px;
`;

// 1-1Alert 부분 글씨
const H6 = styled.h6`
  color: #787a77;
  margin: 10px;
  font-size: 0.7rem;
`;

// 1-2 Body
const Body = styled.div``;

// 1-2.1 Title, Body, Tag 제목
const H2 = styled.h2`
  margin-bottom: 20px;
`;

// 1-2.1 Title 글쓰기 부분
const Form = styled.form``;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 0.5px solid;
  border-radius: 5px;
  border-color: #babfc4;
  &:focus::after {
    border-color: #e1ecf4;
  }
`;

// 1-2.2 content 쓰는 부분
const Bodyeditor = styled.div`
  margin: 30px 0;
`;

// 1-3 버튼
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
const Cancel = styled.button`
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

// 2. 오른쪽 Edit 설명 부분
const Side = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
const Sidealert = styled.div`
  box-shadow: 2px 2px 2px 1px #e7e7e7;
`;
// 2-1 오른쪽 Edit title
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
// 2-2 오른쪽 Edit 설명
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
`;
function Edit() {
  const navigate = useNavigate();
  const id = useLocation().pathname.split('/')[2];

  const [updateTitle, setUpdateTitle] = useState('');
  const [updateContent, setUpdateContent] = useState('');
  const [updateTags, setUpdateTags] = useState([]);

  const [discardOpen, setDiscardOpen] = useState(false);
  const initialToken = localStorage.getItem('accessToken');

  // title, Content, Tags input change
  const handleTitleChange = e => {
    setUpdateTitle(e.target.value);
  };
  const handleContentChange = e => {
    setUpdateContent(e);
  };
  // const handleTagsChange = e => {
  //   setUpdateTags(e.target.value);
  // };

  // 수정내용받아오기
  useEffect(() => {
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(json => {
        setUpdateTitle(json.data.title);
        setUpdateContent(json.data.content);
        setUpdateTags(json.data.questionTags.map(tag => tag.tagName));
      });
  }, []);

  // 내용 update 하기
  const updateQuestion = () => {
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: initialToken,
      },
      body: JSON.stringify({
        title: updateTitle,
        content: updateContent,
        // tags: updateTags.map(tag => ({ tagName: tag })),
      }),
    }).then(res => res.json());
  };

  // 수정내용 submit
  const handleSubmit = e => {
    e.preventDefault();
    updateQuestion();
    navigate(`/questions/${id}`);
  };

  // discard 모달 오픈
  const onDiscardModal = () => {
    setDiscardOpen(!discardOpen);
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
            <H2>Title</H2>
            <Form>
              <Input
                name="title"
                onChange={handleTitleChange}
                value={updateTitle}
                placeholder="e.g.Is there an R function for finding the index of an element in a vector?"
                required
              />
            </Form>
            <Bodyeditor>
              <H2>Body</H2>
              <EditorComp
                name="cotent"
                onChange={handleContentChange}
                value={updateContent}
                required
              />
            </Bodyeditor>
            <H2>Tags</H2>
            <Tag
              name="tags"
              // onChange={handleTagsChange}
              tags={updateTags}
              setTags={setUpdateTags}
            />
            <Buttons>
              <SaveEdit name="saveEdit" onClick={handleSubmit}>
                Save Edits
              </SaveEdit>
              {discardOpen && <Discard onDiscardModal={onDiscardModal} />}
              <Cancel name="cancel" onClick={onDiscardModal}>
                Cancel
              </Cancel>
            </Buttons>
          </Body>
        </Content>
        <Side>
          <Sidealert>
            <SideAlertTitle name="alertitle">How to Edit</SideAlertTitle>
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
        </Side>
      </Container>
    </Main>
  );
}

export default Edit;
