import styled from "styled-components";
import TituloEstilizado from "../Titulo";
import Imagem from "./Imagem";
import Populares from "./Populares";
import Tags from "./Tags";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SessaoFluidaGaleria = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoSelecionarFoto, aoFavoritarFoto }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SessaoFluidaGaleria>
          <TituloEstilizado>
            Navegue pela galeria <span>🚀 🛰️</span>
          </TituloEstilizado>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                aoDarZoomNaFoto={aoSelecionarFoto}
                aoFavoritarFoto={aoFavoritarFoto}
                favorita={foto.favorita}
                key={foto.id}
                id={foto.id}
                foto={foto}
                src={foto.path}
                titulo={foto.titulo}
                fonte={foto.fonte}
              />
            ))}
          </ImagensContainer>
        </SessaoFluidaGaleria>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
