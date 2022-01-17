import React, { useState }  from "react";
import './Menu.scss';
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';

import { Accessibility } from "./Accessibility";
import { MenuToggle } from "./MenuToggle";


const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 15px 0;
  display: flex;
  height: auto;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Margin = styled.div`
  height: 0.5em;

`;

export function MobileNavLinks(props){

  const [isOpen, setOpen] = useState(false);
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <CSSTransition
        in={isOpen}
        timeout={20}
        classNames="display"
        unmountOnExit
        enter
        exit>
        <LinksWrapper>
          <LinkItem>
            <Link href="/">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/Skills">Skills</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/About">About</Link>
          </LinkItem>
          <Margin />
          <Accessibility />
        </LinksWrapper>
      </CSSTransition>
    </NavLinksContainer>
  );
}
