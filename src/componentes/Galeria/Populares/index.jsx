import styled from "styled-components";
import TituloEstilizado from "../../Titulo";
import fotos from "./fotos-populares.json";

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Botao = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Populares = () => {
  return (
    <section>
      <TituloEstilizado $alinhamento="center">Populares</TituloEstilizado>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem src={foto.path} alt={foto.alt} key={foto.id} />
        ))}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  );
};

export default Populares;
