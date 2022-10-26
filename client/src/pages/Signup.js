import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #f1f2f3;
  min-height: 800px;
`;

const Content = styled.div`
  width: 80%;
  height: 500px;
  margin: 0 10%;
  display: flex;
  /* background-color: tomato; */
`;

const LeftBox = styled.div`
  /* background-color: blue; */
  width: 50%;
  height: 500px;
  position: relative;
`;

const LeftContent = styled.div`
  /* background-color: red; */
  position: absolute;
  top: 20%;
  right: 0;
  width: 60%;
  height: 300px;
  h1 {
    font-size: 1.5rem;
  }
  p {
    margin: 30px 0;
  }
`;
const Introduce = styled.div`
  /* background-color: gold; */
  span {
    font-size: 0.8rem;
    color: #6a737c;
  }
  a {
    font-size: 0.8rem;
    color: #0074cc;
  }
`;

const RightBox = styled.div`
  width: 50%;
  height: 500px;
  box-sizing: border-box;
  border: 3px solid blue;
`;

const ButtonBox = styled.div`
  margin: 5px;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 15px 0;
  margin: 5px 0;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  border: 1px solid ${props => props.borderColor};
  color: ${props => props.color};
  background-color: ${props => props.bgColor};

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

const InputForm = styled.div`
  background-color: white;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 5px;
  width: 50%;
  height: 500px;
`;

function Signup() {
  return (
    <Container>
      <Content>
        <LeftBox>
          <LeftContent>
            <h1>Join the Stack Overflow community</h1>
            <p>
              <img src="/" alt="icon" />
              Get unstuck — ask a question
            </p>
            <p>
              <img src="/" alt="icon" />
              Unlock new privileges like voting and commenting
            </p>
            <p>
              <img src="/" alt="icon" />
              Save your favorite tags, filters, and jobs
            </p>
            <p>
              <img src="/" alt="icon" />
              Earn reputation and badges
            </p>
            <Introduce>
              <span>Collaborate and share knowledge with a private group for FREE.</span>
              <br />
              <a href="/">Get Stack Overflow for Teams free for up to 50 users.</a>
            </Introduce>
          </LeftContent>
        </LeftBox>
        <RightBox>
          <ButtonBox>
            <Button bgColor="white" color="black" borderColor="gray" hoverColor="#f1f1f1">
              Sign up with Google
            </Button>
            <Button
              color="white"
              bgColor="rgba(1,1,1)"
              borderColor="rgba(0,0,0)"
              hoverColor="black"
            >
              Sign up with Github
            </Button>
            <Button bgColor="#385499" color="white" borderColor="#385499" hoverColor="#00108A">
              Sign up with Facebook
            </Button>
          </ButtonBox>
          <InputForm />
        </RightBox>
      </Content>
    </Container>
  );
}

export default Signup;
