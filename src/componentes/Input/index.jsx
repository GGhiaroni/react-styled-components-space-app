import styled from "styled-components";
import lupa from "/icones/search.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const InputEstilizado = styled.input`
  height: 56px;
  padding: 18px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  &::placeholder {
    color: #d9d9d9;
    font-size: 18px;
  }
  &:focus::placeholder {
    color: #c98cf1;
  }
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 14px;
  width: 38px;
  height: 38px;
`;

const Input = (props) => {
  return (
    <ContainerEstilizado>
      <InputEstilizado placeholder="O que você procura?" {...props} />;
      <IconeLupa src={lupa} alt="icone de lupa para buscar" />
    </ContainerEstilizado>
  );
};

export default Input;
