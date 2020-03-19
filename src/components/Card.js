import styled from "@emotion/styled";

const Card = styled.div`
  margin-top: 50px;
  text-align: center;
  background-color: ${props => props.theme.colors.bgCard};
  color: ${props => props.theme.colors.textPrimary};
  border-radius: 15px;
  height: 300px;
  max-width: 400px;
  width: 100%;
`;

export default Card;
