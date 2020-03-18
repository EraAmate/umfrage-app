import styled from "@emotion/styled";

const Button = styled.button`
  z-index: 10;
  position: relative;
  bottom: 0;
  position: fixed;
  font-size: 25px;
  color: ${props => props.theme.colors.btnPrimary};
  cursor: pointer;
  border: none;
  height: 40px;
  width: 200px;
  background-color: none;
`;
export default Button;
