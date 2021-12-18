import { Container, TextWrapper } from "./styles/App.styled";
import { Main, Display } from "./styles/global.styled";
import StatsImageContainer from "./components/StatsImageContainer/StatsImageContainer";
import TextContainer from "./components/TextContainer/TextContainer";
import Stats from "./components/Stats/Stats";
import { InsightWrapper } from "./styles/TextContainer.styled";

function App() {
  return (
    <>
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
      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62/hub/stats-preview-card-component-YhZgHX8Tf" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Made with ❤️ By <a href="https://www.frontendmentor.io/profile/skyv26" target="_blank" rel="noreferrer"><strong>Aakash Verma</strong></a>.
      </footer>
    </>
  );
}

export default App;
