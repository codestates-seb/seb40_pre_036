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
  const token = localStorage.getItem('accessToken');

  const handleInputChange = value => {
    setAnswerContent(value);
  };

  // onChange 한 글자씩 딜레이되는 현상 방지
  useEffect(() => {
    console.log('answerContent', answerContent);
  }, [answerContent]);

  const handleAnswerSubmit = () => {
    fetch(
      `http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}/answer`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          answerContent,
        }),
      },
    )
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        // console.log('res', res);
        window.location.reload();
      })
      // .then(data => {
      //   console.log('data', data);
      // })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <AnswerContainer>
      <AnsContent>
        <p>
          Know someone who can answer? Share a link to this question via email, Twitter, or
          Facebook.
        </p>
        <h2>Your Answer</h2>
        <EditorContainer>
          <EditorComp value={answerContent} onChange={handleInputChange} />
        </EditorContainer>
        <PostBtn type="submit" onClick={handleAnswerSubmit}>
          Post Your Answer
        </PostBtn>
      </AnsContent>
    </AnswerContainer>
  );
}

export default AnswerForm;
