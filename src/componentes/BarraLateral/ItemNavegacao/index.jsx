import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
  a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
  }
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
  alt,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt={alt} />
      <a href="#">{children}</a>
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
