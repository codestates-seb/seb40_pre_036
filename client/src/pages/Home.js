import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  font-size: 20px;
`;

const HomeContainer = styled.div`
  font-size: 30px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: bold;
    margin: 10px;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <HomeContainer>
      <h1>페이지 이동을 위한 임시 페이지입니다.</h1>
      <h1>기존 메인페이지는 세연-질문목록 버튼을 눌러 확인 가능합니다!</h1>
      <br />
      <br />
      <Member>
        <h1>상훈님🔥</h1>
        <Link to="signup">
          <Button>회원가입</Button>
        </Link>
        <Link to="login">
          <Button>로그인</Button>
        </Link>
        <Link to="logout">
          <Button>로그아웃</Button>
        </Link>
      </Member>
      <Member>
        <h1>세연님🔥</h1>
        <Link to="questions">
          <Button>질문목록</Button>
        </Link>
        <Link to="qna">
          <Button>질문상세</Button>
        </Link>
        <Link to="tags">
          <Button>태그검색</Button>
        </Link>
      </Member>
      <Member>
        <h1>경민님🔥</h1>
        <Link to="mypage">
          <Button>마이페이지</Button>
        </Link>
        <Link to="updateq">
          <Button>질문수정</Button>
        </Link>
        <Link to="updatea">
          <Button>답변수정</Button>
        </Link>
      </Member>
      <Member>
        <h1>인선님🔥</h1>
        <Link to="search">
          <Button>검색</Button>
        </Link>
        <Link to="ask">
          <Button>질문등록</Button>
        </Link>
        <Link to="users">
          <Button>유저검색</Button>
        </Link>
      </Member>
    </HomeContainer>
  );
}

export default Home;
