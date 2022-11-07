import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Container = styled.div``;
const Span = styled.span`
  color: #7e868e;
  font-size: 0.6rem;
  margin-left: 10px;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
`;
const Hr = styled.hr`
  border: 1px solid rgb(216, 217, 220);
  width: 750px;
  height: 1px;
  margin: 20px 0;
`;
const Inform = styled.h4`
  margin-bottom: 10px;
  margin-top: 20px;
`;
const PubBody = styled.div`
  border: 1px solid rgb(216, 217, 220);
  padding: 20px;
`;
const SubTitle = styled.h6`
  font-weight: 500;
  font-size: 0.8rem;
  margin: 10px 0;
`;
const Input = styled.input`
  border: 1px solid rgb(216, 217, 220);
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
function Editprofile({ user }) {
  console.log(user);
  const initialToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const [updateDisplayName, setUpdateDisplayName] = useState('');
  const handleContentChange = e => {
    setUpdateDisplayName(e.target.value);
  };
  useEffect(() => {
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: initialToken,
      },
    })
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(json => {
        console.log('json', json);
        setUpdateDisplayName(json.data.displayName);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(updateDisplayName);
  const updateName = () => {
    fetch(`http://ec2-43-201-73-28.ap-northeast-2.compute.amazonaws.com:8080/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: initialToken,
      },
      body: JSON.stringify({
        displayName: updateDisplayName,
      }),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.data);
      });
  };
  const handleSubmit = e => {
    e.preventDefault();
    updateName();
    navigate(`/users/me`);
  };
  return (
    <Container>
      <Title>Edit your profile</Title>
      <Hr />
      <Inform>Public information</Inform>
      <PubBody>
        <SubTitle>Profile image</SubTitle>
        <img
          src={`https://avatars.dicebear.com/api/adventurer-neutral/${user.userId}.svg?size=100`}
          alt="avator"
        />
        {/* <FontAwesomeIcon icon={faUser} size="6x" /> */}
        <SubTitle>Display name</SubTitle>
        <Input onChange={handleContentChange} value={updateDisplayName} />
      </PubBody>
      <Inform>
        Private information<Span>Not shown publicly</Span>
      </Inform>
      <PubBody>
        <SubTitle>Full name</SubTitle>
        <Input />
      </PubBody>
      <Buttons>
        <Button1 onClick={handleSubmit}>Save Edits</Button1>
        <Button2>Cancel</Button2>
      </Buttons>
    </Container>
  );
}

export default Editprofile;
