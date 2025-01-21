import styled from "styled-components";
import Input from "../Input";
import logo from "/public/imagens/logo.png";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <img src={logo} alt="logo space app" />
      <Input />
    </HeaderEstilizado>
  );
};

export default Header;
