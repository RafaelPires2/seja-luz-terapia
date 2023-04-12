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
              <a href='#'>INÍCIO</a>
            </li>
            <li>
              <a href='#'>SERVIÇOS</a>
            </li>
            <li>
              <a href='#'>DEPOIMENTOS</a>
            </li>
            <li>
              <a href='#'>CONTATOS</a>
            </li>
          </ul>
        </MenuNavigation>
        <CustomButton content='CONTATO' height='45' width='150' type='button' textColor='white' />
      </ContentHeader>
    </ContainerHeader>
  );
}
