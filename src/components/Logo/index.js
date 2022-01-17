import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/images/logo192.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img{
    width: 100%;
    height: 100%;
  }
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  padding: 20px 0;
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

export function Logo(props){

  return(
    <LogoWrapper>
      <LogoImg>
        <img src={LogoImage} alt="samwy logo" />
      </LogoImg>
      <LogoLink href="/">
        <LogoText>
          Sam Wylock
        </LogoText>
      </LogoLink>
    </LogoWrapper>
  );
}
