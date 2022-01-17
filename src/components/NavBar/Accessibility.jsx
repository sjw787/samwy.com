import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #00c9ff;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover{
    background-color: #6adf76;
  }

  &:not(:last-of-type){
    margin-right: 8px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  background-color: transparent;
  border 1px solid #00c9ff;
  transition: all 500ms ease-in-out;
  cursor: pointer;

  &:hover{
    background-color: #6adf76;
  }

  &:not(:last-of-type){
    margin-right: 8px;
  }
`;

export function Accessibility(props){
  return(
    <AccessibilityContainer>
      <RegisterButton>
        Register
      </RegisterButton>
      <LoginButton>
        Login
      </LoginButton>
    </AccessibilityContainer>
  );
}
