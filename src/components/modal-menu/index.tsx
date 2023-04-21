import { Link } from 'react-router-dom';
import { MenuNavigation } from '../../pages/header/styles';
import { Wrapper } from '../../styles/themes/global';
import { HeaderMobileProps } from '../header-mobile';
import { Logo } from '../logo';
import { ContainerMenuMobile } from './styles';
import { IoMdClose } from 'react-icons/io';
import { CustomButton } from '../custom-button';

export function MenuMobile({ handleOpenAndCloseMenuMobile }: HeaderMobileProps) {
  return (
    <ContainerMenuMobile>
      <div className='container-logo-menu-mobile'>
        <div className='content-logo-menu-mobile'>
          <Logo />
          <IoMdClose size={38} color='#CC43BF' onClick={handleOpenAndCloseMenuMobile} />
        </div>
      </div>
      <Wrapper>
        <MenuNavigation>
          <ul>
            <li>
              <a href='#home' onClick={handleOpenAndCloseMenuMobile}>
                INÍCIO
              </a>
            </li>
            <li>
              <a href='#services' onClick={handleOpenAndCloseMenuMobile}>
                SERVIÇOS
              </a>
            </li>
            <li>
              <a href='#testimonials' onClick={handleOpenAndCloseMenuMobile}>
                DEPOIMENTOS
              </a>
            </li>
            <li>
              <a href='#footer' onClick={handleOpenAndCloseMenuMobile}>
                CONTATO
              </a>
            </li>
          </ul>
        </MenuNavigation>
        <Link to='https://wa.me/5511939501435?text=Oi,%20seja%20bem-vinda!%20Como%20eu%20posso%20ajudar?' target='_blank'>
          <CustomButton content='RESERVAR SESSÃO' height='45' width='200' type='button' textColor='white' />
        </Link>
      </Wrapper>
    </ContainerMenuMobile>
  );
}
