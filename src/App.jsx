import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import BackgroundImage from './components/BackgroundImage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <BackgroundImage />
      </Container>
    </>
  );
}

export default App;
