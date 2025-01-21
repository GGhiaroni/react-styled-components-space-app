import styled from "styled-components";

const ItemListaEstilizado = styled.li``;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
  alt,
}) => {
  return (
    <ItemListaEstilizado>
      <img src={ativo ? iconeAtivo : iconeInativo} alt={alt} />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
