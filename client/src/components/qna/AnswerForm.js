import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditorComp from '../EditorComp';

const AnswerContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 70px;
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
  margin-top: 30px;
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
`;

const EditorContainer = styled.div`
  box-sizing: border-box;
  border-radius: 4px;

  &.err {
    box-shadow: 0 0 0 2px #d0393e inset;
  }
`;

const ErrMessage = styled.div`
  box-sizing: border-box;
  padding-top: 8px;
  font-size: 12px;
  color: #d0393e;

  &.disabled {
    display: none;
  }
  &.check-err {
    margin-top: 15px;
    font-weight: bold;
  }
`;

function AnswerForm({ id }) {
  const [answerContent, setAnswerContent] = useState('');
  const [err, setErr] = useState(false);
  const [contentLength, setContentLength] = useState(0);
  const token = localStorage.getItem('accessToken');

  const handleInputChange = value => {
    setAnswerContent(value);
    setContentLength(value.length);
    if (value.length > 30) {
      setErr(false);
    }
  };

  // onChange 한 글자씩 딜레이되는 현상 방지
  useEffect(() => {
    console.log(answerContent);
  }, [answerContent]);

  const handleAnswerSubmit = () => {
    // 30글자를 넘지 않을 경우, 에러메시지 표시
    if (answerContent.length < 30) {
      setErr(true);
      setContentLength(answerContent.length);
    } else {
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
          window.location.reload();
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };

  return (
    <AnswerContainer>
      <AnsContent>
        <p>
          Know someone who can answer? Share a link to this question via email, Twitter, or
          Facebook.
        </p>
        <h2>Your Answer</h2>
        <EditorContainer className={err ? 'err' : null}>
          <EditorComp value={answerContent} onChange={handleInputChange} />
        </EditorContainer>
        <ErrMessage className={err ? null : 'disabled'}>
          Body must be at least 30 characters; you entered {contentLength}.
        </ErrMessage>
        <PostBtn type="submit" onClick={handleAnswerSubmit}>
          Post Your Answer
        </PostBtn>
        <ErrMessage className={err ? 'check-err' : 'disabled'}>
          Your answer couldn&apos;t be submitted. Please see the error above.
        </ErrMessage>
      </AnsContent>
    </AnswerContainer>
  );
}

export default AnswerForm;
