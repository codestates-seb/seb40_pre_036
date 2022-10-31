import React, { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

const Container = styled.div`
  width: 800px;
  border: 1px solid #babfc4;
  border-radius: 5px;

  &:focus-within {
    outline: none;
    border-color: hsl(206deg 100% 52%);
    box-shadow: 0px 0px 0px 5px #e1ecf4;
  }
  li {
    list-style: inside;
    color: red;
  }
`;

function EditorComp() {
  const [content, setContent] = useState('');
  // const [viewContent, setViewContent] = useState([]);
  // const getValue = e => {
  //   const { name, value } = e.target;
  //   setMovieContent({
  //     ...movieContent,
  //     [name]: value,
  //   });
  //   console.log(movieContent);
  // };
  // const onClick = {() => {
  //   setViewContent(viewContent.concat({...questionContent}));
  // }}
  return (
    <Container>
      <MDEditor
        className="list"
        value={content}
        onChange={setContent}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </Container>
  );
}

export default EditorComp;
