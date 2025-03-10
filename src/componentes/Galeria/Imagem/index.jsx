import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
    cursor: pointer;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagem = ({
  foto,
  id,
  src,
  titulo,
  fonte,
  expandida = false,
  aoDarZoomNaFoto,
  aoFavoritarFoto,
  favorita,
  fotoSelecionada,
}) => {
  return (
    <Figure $expandida={expandida} id={`foto-${id}`}>
      <img
        src={src}
        alt={`imagem galeria ${titulo}`}
        onClick={() => aoDarZoomNaFoto(foto)}
      />
      <figcaption>
        <h3>{titulo}</h3>
        <Rodape>
          <h4>{fonte}</h4>
          <BotaoIcone onClick={() => aoFavoritarFoto(foto)}>
            <img
              src={`${
                favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png"
              }`}
              alt="Ícone de favorito"
            />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => aoDarZoomNaFoto(foto)}
            >
              <img src="/icones/expandir.png" alt="Ícone de expandir" />
            </BotaoIcone>
          )}
        </Rodape>
      </figcaption>
    </Figure>
  );
};

export default Imagem;
