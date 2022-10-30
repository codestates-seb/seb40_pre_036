import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* width: 254px; */
  height: 177px;
  padding: 13px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
`;

// 태그
const Tag = styled.button`
  display: inline-block;
  width: min-content;
  padding: 6px 6px;
  margin: 0 6px 13px 0;
  background-color: #e1ecf4;
  font-size: 12px;
  color: #39739d;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #d0e3f1;
    color: #2c5877;
  }
`;

const TagDescriptionContainer = styled.div`
  display: inline-block;
`;

const TagDescription = styled.div`
  display: inline-block;
  width: 99%;
  height: 70px;
  margin-bottom: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  white-space: normal;
  line-height: 1.4;
  height: 5.6em;
  color: #3b4045;
  text-align: left;
  word-wrap: break-word; // 단어 단위로 줄바꿈
  display: -webkit-box; // 유연하게 height를 증감시킬 수 있는 플렉스 박스형태로 변환
  -webkit-line-clamp: 4; // 보여줄 줄 수
  -webkit-box-orient: vertical; // 플렉스 박스의 방향 설정(가로)
`;

const TagInfo = styled.div`
  display: flex;
`;

const QuestionNum = styled.div`
  color: #838c95;
  font-size: 13px;
`;

function TagBox() {
  return (
    <TagContainer>
      <Tag>javascript</Tag>
      <TagDescriptionContainer>
        <TagDescription>
          {`For questions about programming in ECMAScript (JavaScript/JS) and its different
      dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT
      the same as Java! Include all labels that are relevant to your question; e.g.,
      [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript],
      [svelte], etc.`}
        </TagDescription>
      </TagDescriptionContainer>
      <TagInfo>
        <QuestionNum>2440284 questions</QuestionNum>
      </TagInfo>
    </TagContainer>
  );
}

export default TagBox;
