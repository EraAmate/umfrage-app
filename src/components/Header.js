import React from "react";
import styled from "@emotion/styled";

const H1 = styled.header`
  margin-top: 0;
  text-transform: uppercase;
  height: auto;
  background-color: white;
  text-align: center;
  color: #34a854;
`;

function Header() {
  return <H1>✐votapp</H1>;
}

export default Header;
