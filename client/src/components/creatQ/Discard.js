import { on } from 'npm';
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: hsla(358, 67%, 6%, 0.5);
`;

const DiscardContainer = styled.div`
position: relative;
width: 100vw,
height: 100vh
background: red;
`;

const DiscardModal = styled.div`
  position: relative;
  padding: 24px;
  background: white;
  border-radius: 7px;

  div {
    font-size: 27px;
    color: #c22e32;
    marign-bottom: 16px;
  }

  p {
    font-size: 13px;
    color: #3b4045;
    margin-bottom: 24px;
  }
`;

const DiscardBtn = styled.button`
  padding: 10px;
  margin: 0px 4px;
  background: hsl(358deg 62% 52%);
  color: white;
  border: none;
  font-size: 13px;
  border-radius: 3px;

  &:hover {
    background: hsl(358deg 62% 47%);
    cursor: pointer;
  }
`;

const CancelBtn = styled.button`
  padding: 10px;
  margin: 0px 4px;
  background: white;
  color: #6a737c;
  border: none;
  font-size: 13px;
  border-radius: 3px;

  &:hover {
    background: hsl(210deg 8% 98%);
    cursor: pointer;
  }
`;

const XBtn = styled.button`
  position: absolute;
  padding: 10px;
  margin: 0px 4px;
  background: white;
  color: #6a737c;
  border: none;
  font-size: 13px;
  border-radius: 3px;

  &:hover {
    background: hsl(210deg 8% 98%);
    cursor: pointer;
  }
`;

function Discard({ onDiscardModal }) {
  return (
    <DiscardContainer>
      <Background onClick={onDiscardModal} />
      <DiscardModal>
        <div>Discard question</div>
        <p>Are you sure you want to discard this question? This cannot be undone.</p>
        <DiscardBtn>Discard question</DiscardBtn>
        <CancelBtn onClick={onDiscardModal}>Cancel</CancelBtn>
        <XBtn onClick={onDiscardModal}>X</XBtn>
      </DiscardModal>
    </DiscardContainer>
  );
}

export default Discard;
