import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './styles/themes/global';
import { Router } from './router';
import { MyTheme } from './styles/default';
import { Home } from './pages/home';
import { Header } from './pages/header';
import { CardService } from './components/card-service';
import { ContainerCardService, ContainerCards, SectionCardService } from './components/card-service/styles';
import { Services } from './pages/services';

export function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Wrapper>
        <Header />
        <Home />
        <Services />
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}
