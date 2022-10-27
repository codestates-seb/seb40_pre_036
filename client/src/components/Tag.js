import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow: scroll;
  width: 750px;
  max-width: 100%;
  padding-left: 10px;
  border: 1px grey solid;
  border-radius: 5px;
  color: black;
  margin: 10px 0;
`;
const Input = styled.input`
  width: 100%;
  min-width: 50%;
  border: none;
  border-radius: 5px;
  padding: 14px;
  padding-left: 14px;
`;
const Tags = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  margin-right: 10px;
  padding: 0 8px;
  padding-right: 5px;
  border-radius: 5px;
  background-color: #e1ecf4;
  white-space: nowrap;
  color: #4a80a7;
  font-size: 0.7rem;
`;
const Button = styled.button`
  display: flex;
  padding: 6px;
  border: none;
  background-color: unset;
  cursor: pointer;
  color: #4a80a7;
`;
function Tag() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = e => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  const onKeyDown = e => {
    // console.log(e.keyCode);
    // const { key } = e;
    const trimmedInput = input.trim();

    if ((e.keyCode === 13 || e.keyCode === 188) && trimmedInput.length) {
      e.preventDefault();
      setTags(prevState => [...prevState, trimmedInput]);
      setInput('');
    }
    if (e.keyCode === 8 && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }
    setIsKeyReleased(false);
  };
  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  const deleteTag = index => {
    setTags(prevState => prevState.filter((tag, i) => i !== index));
  };
  return (
    <Container>
      {tags.map((tag, index) => (
        <Tags>
          {tag}
          <Button onClick={() => deleteTag(index)}>x</Button>
        </Tags>
      ))}
      <Input
        value={input}
        placeholder="e.g. (angular sql-server string)"
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </Container>
  );
}

export default Tag;
