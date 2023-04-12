import Carrousel from '../../components/carrousel';
import { CustomButton } from '../../components/custom-button';
import { ContainerEvidence } from './styled';

export function Evidence() {
  return (
    <ContainerEvidence>
      <Carrousel />
      <CustomButton height='58' type='button' width='450' content='AGENDE AGORA' textColor='white'/>
    </ContainerEvidence>
  );
}
