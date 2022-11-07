import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Nav from '../components/Nav';

const Allcontent = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    font-weight: bold;
    margin: 10px;
  }
`;

const TeamContainer = styled.div`
  width: 100vw;
  height: 80vh;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 1088px; */
  h1 {
    font-size: 25px;
    margin-bottom: 40px;
    width: 300px;
    text-align: center;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Frontend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  /* margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3); */
`;

const Backend = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MemberContainer = styled.ul`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* width: 1088px; */
  gap: 40px;
`;

const Member = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: #3b4045;
`;

const Name = styled.div`
  font-size: 14px;
  margin-top: 2px;
`;

const Icon = styled.a`
  font-size: 35px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  text-decoration: none;
  /* box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1); */
  color: inherit;
  &:hover {
    /* color: #0074cc; */
    color: #fff;
    background-color: rgba(0, 0, 0, 0.829);
    transform: translate(0, -10%);
  }
  transition: 0.5s;
`;

/*

.social-menu ul li .fab{
    font-size: 30px;
    line-height: 60px;
    transition: .3s;
    color: #000;
}

.social-menu ul li .fab:hover{
    color: #fff;
}

.social-menu ul li a{
    position: relative;
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    transition: .6s;
    box-shadow: 0 5px 4px rgba(0,0,0,.5);
}

.social-menu ul li a:hover{
    transform: translate(0, -10%);
}

.social-menu ul li:nth-child(1) a:hover{
    background-color: rgba(0, 0, 0, 0.829);
}
*/

function Team() {
  return (
    <Allcontent>
      {/* <Nav /> */}
      <TeamContainer>
        <Frontend>
          <h1>🖥 Front-end 🖥</h1>
          <MemberContainer>
            <Member>
              <Icon href="https://github.com/uxolrv" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
              <span className="name">uxolrv</span>
              <Name>김세연</Name>
            </Member>
            <Member>
              <Icon href="https://github.com/devminoh" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
              <span>devminoh</span>
              <Name>노경민</Name>
            </Member>
            <Member>
              <Icon href="https://github.com/pung8146" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
              <span>pung8146</span>
              <Name>박상훈</Name>
            </Member>
            <Member>
              <Icon href="https://github.com/ssunip" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
              <span>ssunip</span>
              <Name>송인선</Name>
            </Member>
          </MemberContainer>
        </Frontend>
        <Backend>
          <h1>⚙️ Back-end ⚙️</h1>
          <MemberContainer>
            <Member>
              <Icon href="https://github.com/kyj4327" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
              <span>kyj4327</span>
              <Name>김영준</Name>
            </Member>
            <Member>
              <Icon href="https://github.com/zirryo" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
              <span>zirryo</span>
              <Name>김지효</Name>
            </Member>
            <Member>
              <Icon href="https://github.com/heoseongeun" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
              <span>heoseongeun</span>
              <Name>허성은</Name>
            </Member>
          </MemberContainer>
        </Backend>
      </TeamContainer>
    </Allcontent>
  );
}

export default Team;
