import React, { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

const Container = styled.div`
  width: 800px;
  height: 500px;
  border: 1px solid transparent;
  border-radius: 5px;

  .w-md-editor {
    border: 1px solid #d0d7de;
    box-shadow: none;

    &:focus-within {
      border-color: hsl(206deg 100% 52%);
      box-shadow: 0px 0px 0px 5px #e1ecf4;
    }
  }
`;

function EditorComp() {
  const [content, setContent] = useState('');

  return (
    <Container>
      <MDEditor
        value={content}
        onChange={setContent}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        height={498}
      />
    </Container>
  );
}

export default EditorComp;
