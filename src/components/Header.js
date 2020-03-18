import React from "react";
import styled from "@emotion/styled";

const H1 = styled.header`
  margin-top: 0;
  text-transform: uppercase;
  height: auto;
  background-color: white;
  text-align: center;
  color: ${props => props.theme.colors.textPrimary};
`;
const SwitchColorButton = styled.button`
  border: 1px solid white;
  background: none;
  font-size: 25px;
`;
function Header({ onSwitchColorButtonClick }) {
  return (
    <>
      <H1>✐votapp</H1>
      <SwitchColorButton onClick={onSwitchColorButtonClick}>
        <span role="img" aria-label="SwitchTheme">
          💡
        </span>
      </SwitchColorButton>
    </>
  );
}

export default Header;
