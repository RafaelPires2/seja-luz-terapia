import { Link } from 'react-router-dom';
import { Wrapper } from '../../styles/themes/global';
import { ContainerHeader, ContentHeader, MenuNavigation } from './styles';
import { CustomButton } from '../../components/custom-button';

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
        <h1>Seja Luz</h1>

        <MenuNavigation>
          <ul>
            <li>
              <Link to='/'>INÍCIO</Link>
            </li>
            <li>
              <Link to='/about'>SERVIÇOS</Link>
            </li>
            <li>
              <Link to='/about'>DEPOIMENTOS</Link>
            </li>
            <li>
              <Link to='/about'>CONTATOS</Link>
            </li>
          </ul>
        </MenuNavigation>
        <CustomButton content='CONTATO' height='45' width='150' type='button' textColor='white' />
      </ContentHeader>
    </ContainerHeader>
  );
}
