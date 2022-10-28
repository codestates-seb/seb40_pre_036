import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor 스타일
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
  const textRef = React.createRef();

  const [descriptions, setDescriptions] = useState('');

  const handleChangeInput = () => {
    setDescriptions(textRef.current.getInstance().getMarkdown());
  };
  return (
    <Container>
      <Editor
        ref={textRef} // input값을 가져오기 위해 ref생성
        previewStyle="tab" // 미리보기 유형 (tab , vertical)
        initialValue={descriptions} // input 입력 값
        height="500px" // 에디터의 높이값  width 값의 변경을 원한다면 상위 컴포넌트의 값을 변경해주세요 !
        autofocus={false} // 페이지 들어올 시 자동으로 포커스
        initialEditType="markdown" // 타입  : 'markdown' 과 일반 텍스트형태인 'wvsiwyg' 존재
        theme="dark" // 테마입니다 다크모드 가능!
        useCommandShortcut
        onChange={handleChangeInput} // 해당 이벤트를 통해 값을 status에 저장합니다
        placeholder="내용을 입력해주세요 :)"
      />
    </Container>
  );
}

export default EditorComp;
