import { Link } from 'react-router-dom';
import Carrousel from '../../components/carrousel';
import { CustomButton } from '../../components/custom-button';
import { Title } from '../../styles/themes/global';
import { ContainerEvidence } from './styles';

export function Testimonials() {
  return (
    <ContainerEvidence id='testimonials'>
      <Title>Depoimentos</Title>
      <Carrousel />

      <Link to='https://wa.me/5511939501435?text=Oi,%20seja%20bem-vinda!%20Como%20eu%20posso%20ajudar?' target='_blank'>
        <CustomButton
          height='58'
          type='button'
          width='500'
          content='Descubra a Harmonia Interior! Agende sua Sessão Agora'
          textColor='white'
        />
      </Link>
    </ContainerEvidence>
  );
}
