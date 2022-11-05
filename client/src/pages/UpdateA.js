import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import EditorComp from '../components/EditorComp';

const Main = styled.div`
  display: flex;
  /* width: 80%; */
  margin: 0 10%;
`;

const Container = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    margin-left: 10px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
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
  width: 300px;
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
const Title = styled.h2`
  margin-bottom: 10px;
`;
const Body = styled.div``;
const Bodyeditor = styled.div``;
function UpdateA() {
  const { aid } = useParams();
  const { qid } = useParams(); // 나중에 받아올때 qid 따로 받아오기
  const [updateContent, setUpdateContent] = useState('');
  const initialToken = localStorage.getItem('accessToken');
  useEffect(() => {
    fetch(
      `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${qid}/answer/${aid}`,
    )
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(json => {
        console.log('json', json);
        setUpdateContent(json.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Main>
      <Nav />
      <Container>
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
          <Body>
            <Bodyeditor>
              <Title>Body</Title>
              <EditorComp content={updateContent} />
            </Bodyeditor>
            <Buttons>
              <Button1>Save Edits</Button1>
              <Button2>Cancel</Button2>
            </Buttons>
          </Body>
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
      </Container>
    </Main>
  );
}

export default UpdateA;
