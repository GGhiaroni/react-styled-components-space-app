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

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SessaoFluidaGaleria>
          <TituloEstilizado>
            Navegue pela galeria <span>🚀 🛰️</span>
          </TituloEstilizado>
          {fotos.map((foto) => (
            <Imagem
              foto={foto}
              src={foto.path}
              titulo={foto.titulo}
              fonte={foto.fonte}
            />
          ))}
        </SessaoFluidaGaleria>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
