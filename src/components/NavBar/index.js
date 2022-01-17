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
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
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
  flex: 0.5;
  float: right;
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
