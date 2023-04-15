import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Wrapper } from './styles/themes/global';
import { MyTheme } from './styles/default';
import { Home } from './pages/home';
import { Header } from './pages/header';
import { Services } from './pages/services';
import { Testimonials } from './pages/evidence';
import { Footer } from './pages/footer';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Home />
          <Services />
          <Testimonials />
          <Footer />
        </Wrapper>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
