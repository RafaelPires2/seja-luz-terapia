import { ContainerHeader, ContentHeader, MenuNavigation } from './styles';
import { CustomButton } from '../../components/custom-button';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/logo';

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
          <Logo />
        <MenuNavigation>
          <ul>
            <li>
              <a href='#home'>INÍCIO</a>
            </li>
            <li>
              <a href='#services'>SERVIÇOS</a>
            </li>
            <li>
              <a href='#testimonials'>DEPOIMENTOS</a>
            </li>
            <li>
              <a href='#footer'>CONTATO</a>
            </li>
          </ul>
        </MenuNavigation>

        <Link to='https://wa.me/5511939501435?text=Oi,%20seja%20bem-vinda!%20Como%20eu%20posso%20ajudar?' target='_blank'>
          <CustomButton content='RESERVAR SESSÃO' height='45' width='200' type='button' textColor='white' />
        </Link>
      </ContentHeader>
    </ContainerHeader>
  );
}
