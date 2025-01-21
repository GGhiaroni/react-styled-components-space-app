import styled from "styled-components";
import TituloEstilizado from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SessaoFluidaGaleria = styled.section`
  flex-grow: 1;
`;

const Galeria = () => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SessaoFluidaGaleria>
          <TituloEstilizado>
            Navegue pela galeria <span>🚀 🛰️</span>
          </TituloEstilizado>
        </SessaoFluidaGaleria>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
