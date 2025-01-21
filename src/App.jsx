import styled from "styled-components";
import bannerBackground from "./assets/banner.png";
import Banner from "./componentes/Banner";
import BarraLateral from "./componentes/BarraLateral";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Header from "./componentes/Header";

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

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <BarraLateral />
          <Banner
            texto="A galeria mais completa do espaço!"
            backgroundImage={bannerBackground}
          />
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
