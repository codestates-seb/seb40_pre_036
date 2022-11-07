import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
// import rehypeSanitize from 'rehype-sanitize';

const Container = styled.div`
  width: 650px;
`;

function EditorViewer({ content }) {
  // const [content] = useState(`
  // ## Hi!

  // You could do something like this:

  // ### Solution 1: Add dependency array to the useEffect.

  // const [dosa, setDosa] = useState([]);

  // > Adding an empty dependency array prevents the useEffect from being called on every render. This way it is **called only on the component mount**.

  // - content 1
  // - content 2
  // - content 3

  // This issue is occurring because you are calling setDosa on API success which causes the dosa state to update and the component to re - render and this causes the useEffect(with no dependency) to get called over and over again in a **"loop"**.

  // `); // editor의 state를 editor 뷰어에서 사용해야 하니까 에디터와 뷰어의 부모에 상태 위치

  return (
    <Container>
      <MDEditor.Markdown source={content} />
    </Container>
  );
}

export default EditorViewer;
