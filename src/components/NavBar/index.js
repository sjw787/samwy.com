import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { NavLinks } from "./NavLinks";
import { Accessibility } from "./Accessibility";
import { MobileNavLinks } from "./MobileNavLinks"

import { Logo } from "../Logo";
import { DeviceSize } from "../../responsive"

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eeeef0;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  position: fixed;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  padding-top: 3px;
  padding-right: 10px;
  flex: 0.5;
`;

export default function NavBar(props){
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>
        {!isMobile && <NavLinks />}
      </MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavBarContainer>
  );

}
