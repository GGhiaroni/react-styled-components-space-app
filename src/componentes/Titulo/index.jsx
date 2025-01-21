import styled from "styled-components";

const TituloEstilizado = styled.h2`
  color: #7b78e5;
  font-size: 32px;
  text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : "left")};
  span {
    margin-left: 10px;
  }
`;

export default TituloEstilizado;
