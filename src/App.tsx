import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Wrapper } from './styles/themes/global';
import { MyTheme } from './styles/default';
import { Home } from './pages/home';
import { Header } from './pages/header';
import { Services } from './pages/services';
import { Evidence } from './pages/evidence';

export function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Wrapper>
        <Header />
        <Home />
        <Services />
        <Evidence />
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}
