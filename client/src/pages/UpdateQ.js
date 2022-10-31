import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import EditorComp from '../components/EditorComp';
import Tag from '../components/Tag';

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
const Alert = styled.div`
  background-color: #fdf7e2;
  border: 1px solid;
  border-radius: 3px;
  border-color: #e6cf79;
  padding: 1%;
  color: #787a77;
  margin-bottom: 20px;
`;
const H4 = styled.h6`
  color: #787a77;
  margin: 10px;
  font-size: 0.7rem;
`;
const Side = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
const Sidealert = styled.div`
  box-shadow: 2px 2px 2px 1px #e7e7e7;
`;
const Top = styled.div`
  display: flex;
  background-color: #fbf3d5;
  padding: 3%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid;
  border-color: #f1e5bc;
  color: #3b4045;
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
const Explain = styled.div`
  padding: 5px 70px 5px 20px;
  background-color: #faf5e6;
  border: 1px solid;
  border-color: #f1e5bc;
`;
const Buttons = styled.div`
  display: flex;
  margin: 10px;
`;
const Button1 = styled.button`
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
const Button2 = styled.button`
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
const Form = styled.form`
  width: 100%;
  margin: 15px 0;
`;
const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 0.5px solid;
  border-radius: 5px;
  border-color: #babfc4;
  &:focus::after {
    border-color: #e1ecf4;
  }
`;
const Body = styled.div`
  /* width: 100%; */
`;
const Editorform = styled.div`
  display: flex;
  margin: 10px 10px 10px 0;
`;
const Bodyeditor = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`;
function Edit() {
  return (
    <Main>
      <Container>
        <Incontainer>
          <Nav />
          <Content>
            <Alert>
              <H4>Your edit will be placed in a queue until it is peer reviewed.</H4>
              <H4>
                We welcome edits that make the post easier to understand and more valuable for
                readers. Because community members review edits, please try to make the post
                substantially better than how you found it, for example, by fixing grammar or adding
                additional resources and hyperlinks.
              </H4>
            </Alert>
            <h2>Title</h2>
            <Body>
              <Form>
                <Input placeholder="e.g.Is there an R function for finding the index of an element in a vector?" />
              </Form>
              <Bodyeditor>
                <h2>Body</h2>
                <Editorform>
                  <EditorComp />
                </Editorform>
              </Bodyeditor>
              <h2>Tags</h2>
              <Tag />
            </Body>
            <Buttons>
              <Button1>Save Edits</Button1>
              <Button2>Cancel</Button2>
            </Buttons>
          </Content>
          <Side>
            <Sidealert>
              <Top>How to Edit</Top>
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
        </Incontainer>
      </Container>
    </Main>
  );
}

export default Edit;
