import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// 변수명 앞에 두개의 대시(--)를 붙여서 사용합니다.
// :root 의사 클래스는 문서 트리의 루트 요소를 선택합니다.

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
  font-family: Helvetica!important;
  margin: 0;
  padding: 0;
  letter-spacing: 0.2px;
  list-style : inside
}
  :root{
    // font
    --font-size-base: 13px;
    --font-size-q-title:15px;
    --font-size-q: 17px;
    --font-size-title: 27px;
    //color
    --color-font-gray: #3b4045;
    --color-light-gray: #babfc4;
    --color-light-yellow: #fdf7e2;
    --color-dark-yellow: #fbf3d5; 
    --color-base-blue: #0a95ff;
    --color-light-blue: #e1ecf4;
    --color-font-blue: #39739d;
    --color-font-light-blue: #0074cc;
    //margin
    --margin-main-side: 0 0 0 10%;
  }
`;

export default GlobalStyle;
