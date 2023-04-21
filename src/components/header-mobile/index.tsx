import { ContainerHeader } from '../../pages/header/styles';
import { Wrapper } from '../../styles/themes/global';
import { Logo } from '../logo';
import { HiOutlineMenu } from 'react-icons/hi';
import { ContainerHeaderMobile } from './styles';

export interface HeaderMobileProps {
  handleOpenAndCloseMenuMobile: () => void;
}

export function HeaderMobile({ handleOpenAndCloseMenuMobile }: HeaderMobileProps) {
  return (
    <ContainerHeaderMobile>
      <Wrapper>
        <Logo />
        <HiOutlineMenu size={38} color='#CC43BF' onClick={handleOpenAndCloseMenuMobile} />
      </Wrapper>
    </ContainerHeaderMobile>
  );
}
