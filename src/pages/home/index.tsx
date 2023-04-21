import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/custom-button';
import { Paragraph, Title } from '../../styles/themes/global';
import { ContainerHome, ContentA, ContentB, ContentHome } from './styles';

export function Home() {
  return (
    <>
      <ContainerHome id='home'>
        <ContentHome>
          <ContentA>
            <Title>Sobre sua terapeuta</Title>
            <Paragraph>
              Me chamo Valéria, moro em São Paulo. Sou funcionária pública á 27 anos e ao longo da minha caminhada, escolhi especializar-me
              em Terapia Holística. Sou Taróloga, Reikiana, Consteladora e possuo formação em outras terapias. Acredito que estamos aptos
              para sempre buscarmos novos conhecimentos, a fim de termos mais ferramentas para poder auxiliar aqueles que necessitam. Minha
              meta é ter uma vida mais leve e cheia de luz!
            </Paragraph>

            <Link to='https://wa.me/5511939501435?text=Oi,%20seja%20bem-vinda!%20Como%20eu%20posso%20ajudar?' target='_blank'>
              <CustomButton content='AGENDAR AGORA' height='58' width='290' type='button' textColor='white' />
            </Link>
          </ContentA>

          <ContentB>
            <div className='container-img'>
              <img src='https://live.staticflickr.com/65535/52832995537_962746f4d2_b.jpg' alt='' />
            </div>
          </ContentB>
        </ContentHome>
      </ContainerHome>
    </>
  );
}
