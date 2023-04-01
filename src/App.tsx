import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/themes/global';
import { Router } from './router';
import { MyTheme } from './styles/default';

export function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
