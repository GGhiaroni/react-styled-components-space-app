import styled from "styled-components";
import bannerBackground from "./assets/banner.png";
import Banner from "./componentes/Banner";
import BarraLateral from "./componentes/BarraLateral";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Galeria from "./componentes/Galeria";
import Header from "./componentes/Header";

import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import fotos from "./fotos.json";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const aoFavoritar = (foto) => {
  console.log(foto);
};

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria
              fotos={fotosDaGaleria}
              aoSelecionarFoto={(foto) => setFotoSelecionada(foto)}
              aoFavoritarFoto={aoFavoritar}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
      />
    </FundoGradiente>
  );
};

export default App;
