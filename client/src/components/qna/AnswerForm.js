import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditorComp from '../EditorComp';

const AnswerContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const AnsContent = styled.div`
  color: #232629;
  font-size: 17px;
  h2 {
    font-size: 20px;
    margin-bottom: 25px;
  }
  p {
    margin: 20px 0;
  }
`;

const PostBtn = styled.button`
  min-width: 129px;
  height: 38px;
  color: white;
  background-color: rgb(0, 137, 254);
  border: 1px solid transparent;
  box-shadow: inset 0 1px 0 0 rgba(250, 250, 250, 0.5);
  border-radius: 3px;
  white-space: nowrap;
  &:hover {
    background-color: #0074cc;
  }
  margin-bottom: 70px;
`;

const EditorContainer = styled.div`
  margin-bottom: 30px;
`;

function AnswerForm({ id }) {
  const [answerContent, setAnswerContent] = useState('');

  // onClick={createAnswer}
  // useEffect(() => {
  //   axios.post(
  //     `http://ec2-52-79-243-235.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`,
  //   );
  // }, []);
  return (
    <AnswerContainer>
      <AnsContent>
        <p>
          Know someone who can answer? Share a link to this question via email, Twitter, or
          Facebook.
        </p>
        <h2>Your Answer</h2>
        <EditorContainer>
          <EditorComp setAnswerContent={setAnswerContent} />
        </EditorContainer>
        <PostBtn type="submit">Post Your Answer</PostBtn>
      </AnsContent>
    </AnswerContainer>
  );
}

export default AnswerForm;
