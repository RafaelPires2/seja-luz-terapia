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
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o
              século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos.
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
