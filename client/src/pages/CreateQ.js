import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import EditorComp from '../components/EditorComp';
import Tag from '../components/Tag';

const Content = styled.div`
  padding: 0 7rem 6rem;
  width: 100%;
  background: #f7faf9;
`;

const Start = styled.div`
  display: flex;
  height: 130px;
  margin-bottom: 12px;
  background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf);
  background-repeat: no-repeat;
  background-position: right bottom;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Notice = styled.div`
  min-width: 70%;
  margin: 24px 0;
  padding: 24px;
  height: 250px;
  background: #ebf4fb;
  color: #3b4045;
  border: 1px solid hsl(206deg 93% 84%);
  border-radius: 3px;

  h2 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 5px;
    font-size: 0.9rem;

    span {
      color: #0074cc;
    }
  }

  h5 {
    font-size: 0.85rem;
    margin: 15px 0;
  }

  ul {
    margin-left: 30px;
    font-size: 0.85rem;
    list-style-type: disc;
    line-height: 18px;

    li {
      display: list-item;
    }
  }
`;

// 질문 제목
const QuestionTitle = styled.div`
  min-width: 70%;
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px;
`;

const Form = styled.form`
  width: 100%;
  margin: 10px 0 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #babfc4;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: hsl(206deg 100% 52%);
    box-shadow: 0px 0px 0px 5px #e1ecf4;
  }
`;

// 질문 내용
const QuestionBody = styled.div`
  min-width: 70%;
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px;
  position: relative;
`;

// const DimmedLayerBody = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
//   background: white;
//   opacity: 0.7;
//   z-index: 5;
// `;

const Title = styled.div`
  color: #0c0d0e;
  font-weight: 600;
`;

const Desc = styled.div`
  color: #3b4045;
  margin: 0.5rem 0;
  font-size: 0.75rem;
`;

// 질문 태그
const QuestionTags = styled.div`
  min-width: 70%;
  margin-bottom: 24px;
  padding: 24px;
  background: white;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px;
  position: relative;
`;

// const DimmedLayerTags = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
//   background: white;
//   opacity: 0.7;
//   z-index: 5;
// `;

// 질문 입력 및 취소 버튼
const BtnContainer = styled.div`
  display: flex;
`;

const NextBtn = styled.button`
  margin-top: 0.7rem;
  margin-right: 1rem;
  padding: 10px;
  border: 1px solid #79a7c7;
  border-radius: 3px;
  background: #0995fd;
  color: white;

  &:not(:last-child) {
    margin-top: 0;
  }

  &:hover {
    background-color: hsl(206deg 100% 40%);
    cursor: pointer;
  }
`;

const DiscardBtn = styled.button`
  padding: 10px;
  border: none;
  background: transparent;
  color: #c33e32;

  &:hover {
    background: #fcf2f1;
    border-radius: 3px;
    cursor: pointer;
  }
`;

// 에러 메세지
const ErrorMessage = styled.div`
  display: none;
  margin-top: 1rem;
  color: #c33e32;
  font-weight: 600;
`;

// 설명 카드 -> 입력창 focus 시, 나타나야 함
const Card = styled.div`
  margin: 0 16px;
  width: 100%;
  height: 100%;
  background: white;
  border: 1px solid hsl(210deg 8% 85%);
  border-radius: 3px;
  color: #232629;
`;

const CardTitle = styled.div`
  padding: 16px;
  height: 45px;
  background: hsl(210deg 8% 98%);
  border-bottom: 1px solid hsl(210deg 8% 85%);
  font-size: 15px;
`;

const CardBody = styled.div`
  display: flex;
  flex: 1 auto;
  padding: 16px;
  font-size: 12px;

  div {
    margin: 0 8px;
  }
`;

const CardText = styled.div`
  p {
    line-height: 18px;

    :first-child {
      margin: 0 0 12px;
    }
  }
`;

function CreateQ() {
  const [title, setTitle] = useState('');
  const [firstBody, setFirstBody] = useState('');
  const [secondBody, setSecondBody] = useState('');
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const initialToken = localStorage.getItem('accessToken');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleFirstEditorChange = value => {
    setFirstBody(value);
  };

  const handleSecondEditorChange = value => {
    setSecondBody(value);
  };

  // 질문 추가하기
  const addQuestion = () => {
    fetch('http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/questions/ask', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: initialToken,
      },
      body: JSON.stringify({
        title,
        content: firstBody + secondBody,
        tags: tags.map(tag => ({ tagName: tag })),
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addQuestion();
    navigate('/questions');
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  return (
    <Content>
      <Start>
        <TitleContainer>
          <h1>Ask a public question</h1>
        </TitleContainer>
      </Start>
      <Container>
        <Notice>
          <h2>Writing a good question</h2>
          <p>
            You’re ready to <span>ask</span> a <span>programming-related question</span> and this
            form will help guide you through the process.
          </p>
          <p>
            Looking to ask a non-programming question? See <span>the topics here</span> to find a
            relevant site.
          </p>
          <h5>Steps</h5>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Add “tags” which help surface your question to members of the community.</li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </Notice>
      </Container>
      <Container>
        <QuestionTitle>
          <Title>Title</Title>
          <Desc>Be specific and imagine you’re asking a question to another person.</Desc>
          <Form>
            <Input
              name="title"
              ref={inputRef}
              placeholder="e.g.Is there an R function for finding the index of an element in a vector?"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </Form>
          <NextBtn>Next</NextBtn>
        </QuestionTitle>
        <Card>
          <CardTitle>Writing a good title</CardTitle>
          <CardBody>
            <div>
              <svg
                aria-hidden="true"
                className="svg-spot spotPencil"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  opacity=".2"
                  d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                />
                <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z" />
              </svg>
            </div>
            <CardText>
              <p>Your title should summarize the problem.</p>
              <p>
                You might find that you have a better idea of your title after writing out the rest
                of the question.
              </p>
            </CardText>
          </CardBody>
        </Card>
      </Container>
      <Container>
        <QuestionBody>
          {/* <DimmedLayerBody /> */}
          <Title>What are the details of your problem?</Title>
          <Desc>
            Introduce the problem and expand on what you put in the title. Minimum 20 characters.
          </Desc>
          <EditorComp name="firstBody" value={firstBody} onChange={handleFirstEditorChange} />
          <NextBtn>Next</NextBtn>
        </QuestionBody>
      </Container>
      <Container>
        <QuestionBody>
          {/* <DimmedLayerBody /> */}
          <Title>What did you try and what were you expecting?</Title>
          <Desc>
            Describe what you tried, what you expected to happen, and what actually resulted.
            Minimum 20 characters.
          </Desc>
          <EditorComp name="secondBody" value={secondBody} onChange={handleSecondEditorChange} />
          <NextBtn>Next</NextBtn>
        </QuestionBody>
      </Container>
      <Container>
        <QuestionTags>
          {/* <DimmedLayerTags /> */}
          <Title>Tags</Title>
          <Desc>
            Add up to 5 tags to describe what your question is about. Start typing to see
            suggestions.
          </Desc>
          <Tag name="tags" tags={tags} setTags={setTags} />
          <NextBtn>Next</NextBtn>
        </QuestionTags>
      </Container>
      <BtnContainer>
        <NextBtn onClick={handleSubmit}>Post your question</NextBtn>
        <DiscardBtn>Discard draft</DiscardBtn>
      </BtnContainer>
      <ErrorMessage>
        Your question couldn&apos;t be submitted. Please see the error above.
      </ErrorMessage>
    </Content>
  );
}

export default CreateQ;
