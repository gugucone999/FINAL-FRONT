import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainAside = ({ followinguser }) => {
  return (
    <MainAsideAll>
      <MainAsideContainer>
        {localStorage.getItem('token') &&
        localStorage.getItem('nickname') !== 'null' ? (
          followinguser.length === 0 ? (
            <>
              <Title>My follower</Title>
              <Userprofil as="p">팔로우를 추가해주세요 !</Userprofil>
            </>
          ) : (
            <>
              <Title>My follower</Title>
              {followinguser.map(user => {
                return (
                  <Userprofil>
                    <UserImg
                      alt="mango_9324Profilimg"
                      src="./images/profile.png"
                    />
                    <FlexBox>
                      <div>{user.nickname}</div>
                      <span>팔로워 567명</span>
                    </FlexBox>
                  </Userprofil>
                );
              })}
            </>
          )
        ) : (
          <>
            <Title>Best homstargramer 추천</Title>
            <Userprofil>
              <UserImg alt="mango_9324Profilimg" src="./images/bsj.png" />
              <FlexBox>
                <div>백승준</div>
                <span>팔로워 1234명</span>
              </FlexBox>
            </Userprofil>
            <Userprofil>
              <UserImg alt="mango_9324Profilimg" src="./images/khh.png" />
              <FlexBox>
                <div>김호현</div>
                <span>팔로워 422명</span>
              </FlexBox>
            </Userprofil>
            <Userprofil>
              <UserImg alt="mango_9324Profilimg" src="	./images/ljh.png" />
              <FlexBox>
                <div>이정훈</div>
                <span>팔로워 5829명</span>
              </FlexBox>
            </Userprofil>
            <Userprofil>
              <UserImg alt="mango_9324Profilimg" src="	./images/ehk.png" />
              <FlexBox>
                <div>은효경</div>
                <span>팔로워 32277명</span>
              </FlexBox>
            </Userprofil>
            <Userprofil>
              <UserImg alt="mango_9324Profilimg" src="	./images/kjs.png" />
              <FlexBox>
                <div>김종서</div>
                <span>팔로워 278명</span>
              </FlexBox>
            </Userprofil>
          </>
        )}
      </MainAsideContainer>
    </MainAsideAll>
  );
};
// ="./images/man.png" />	./images/zombie.png"  	./images/pirate.png" ./images/witch.png"  ./images/witch.png"

export default MainAside;

const MainAsideAll = styled.div`
  position: relative;
  margin-top: 60px;
`;

const Title = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  height: 30px;
  font-size: 15px;
  color: #03c7f5;
  line-height: 20px;
`;

const MainAsideContainer = styled.div`
  display: flex;
  top: 50px;
  flex-direction: column;
  position: sticky;
  margin-left: 150px;
  border: 1px solid #bcbfc2;
`;

const Userprofil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
  margin-bottom: 4px;
  padding: 4px 0px 3px 10px;
`;
const FlexBox = styled.div`
  display: flex;
  div {
    font-size: 15px;
    margin-right: 80px;
    padding-left: 10px;
    color: gray;
  }
  span {
    color: #bcbfc2;
  }
`;

const UserImg = styled.img`
  margin-left: 10px;
  padding: 5px 8px;
  border-radius: 100%;
  border: 1px solid #bcbfc2;
  height: 46px;
  width: 46px;
`;
