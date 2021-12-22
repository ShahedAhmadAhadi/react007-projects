import styled from "styled-components";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import Header from "./components/Header";
import {OuterLayout} from './styles/Layouts'

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <ChartSection />
        </MainStyled>
      </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main`

`

export default App;
