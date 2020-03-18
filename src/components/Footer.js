import styled from "@emotion/styled";

const Footer = styled.footer`
  z-index: -10;
  bottom: 0;
  position: fixed;
  height: 40px;
  width: 100%;
  background-color: white;
  opacity: 0.3;
  text-align: center;
  color: ${props => props.theme.colors.textPrimary};
`;

export default Footer;
