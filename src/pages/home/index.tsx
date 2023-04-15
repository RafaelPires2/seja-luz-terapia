import { CustomButton } from '../../components/custom-button';
import { Paragraph, Title } from '../../styles/themes/global';
import { ContainerHome, ContentA, ContentB, ContentHome } from './styles';

export function Home() {
  return (
    <>
      <ContainerHome>
        <ContentHome>
          <ContentA>
            <Title>Lorem Ipsum</Title>
            <Paragraph>
              Me chamo Valéria; moro em São Paulo. Sou funcionária pública á 27 anos e ao longo da minha caminhada, escolhi especializar-me
              em Terapia Holística. Sou Taróloga, Reikiana, Consteladora e possuo formação em outras terapias. Acredito que estamos aptos
              para sempre buscarmos novos conhecimentos, a fim de termos mais ferramentas para poder auxiliar aqueles que necessitam. Minha
              meta é ter uma vida mais leve e cheia de luz!
            </Paragraph>
            <CustomButton content='AGENDAR AGORA' height='58' width='290' type='button' textColor='white' />
          </ContentA>

          <ContentB>
            <img src='https://source.unsplash.com/random/400x400' alt='' />
          </ContentB>
        </ContentHome>
      </ContainerHome>
    </>
  );
}
