import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Wrapper } from './styles/themes/global';
import { MyTheme } from './styles/default';
import { Home } from './pages/home';
import { Header } from './pages/header';
import { Services } from './pages/services';
import { Testimonials } from './pages/evidence';
import { Footer } from './pages/footer';
import { BrowserRouter } from 'react-router-dom';
import { MenuMobile } from './components/modal-menu';
import { useState, useEffect } from 'react';
import { HeaderMobile } from './components/header-mobile';

export function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleOpenAndCloseMenuMobile() {
    setMenuMobileIsOpen(!menuMobileIsOpen);
  }

  return (
    <ThemeProvider theme={MyTheme}>
      <BrowserRouter>
        <Wrapper>
          {menuMobileIsOpen && <MenuMobile handleOpenAndCloseMenuMobile={handleOpenAndCloseMenuMobile} />}
          {isDesktop ? <Header /> : <HeaderMobile handleOpenAndCloseMenuMobile={handleOpenAndCloseMenuMobile} />}
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
