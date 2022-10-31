import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  border: 1px solid #babfc4;
  border-radius: 5px;

  &:focus-within {
    outline: none;
    border-color: hsl(206deg 100% 52%);
    box-shadow: 0px 0px 0px 5px #e1ecf4;
  }
`;

function EditorComp() {
  const [questionContent, setQuestionContent] = useState({
    title: '',
    content: '',
  });
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
      <CKEditor
        editor={ClassicEditor}
        data=""
        config={{
          placeholder: '내용을 입력하세요.',
        }}
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setQuestionContent({
            ...questionContent,
            content: data,
          });
          console.log(questionContent);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </Container>
  );
}

export default EditorComp;
