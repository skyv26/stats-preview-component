import { Container, TextWrapper } from "./styles/App.styled";
import { Main, Display } from "./styles/global.styled";
import StatsImageContainer from "./components/StatsImageContainer/StatsImageContainer";
import TextContainer from "./components/TextContainer/TextContainer";
import Stats from "./components/Stats/Stats";
import { InsightWrapper } from "./styles/TextContainer.styled";

function App() {
  return (
    <Main>
      <Container>
        <StatsImageContainer />
        <Display>
          <TextWrapper>
            <TextContainer />
          </TextWrapper>
          <InsightWrapper>
            <Stats />
          </InsightWrapper>
        </Display>
      </Container>
    </Main>
  );
}

export default App;
