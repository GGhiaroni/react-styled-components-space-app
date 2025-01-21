import styled from "styled-components";
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

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Header />
      <BarraLateral />
    </FundoGradiente>
  );
}

export default App;
