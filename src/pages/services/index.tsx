import { Link } from 'react-router-dom';
import { CardService } from '../../components/card-service';
import { ContainerCards } from '../../components/card-service/styles';
import { CustomButton } from '../../components/custom-button';
import { Title } from '../../styles/themes/global';
import { ContainerCardService, SectionCardService } from './styles';

export function Services() {
  return (
    <SectionCardService id='services'>
      <ContainerCardService>
        <Title>Serviços</Title>
        <ContainerCards>
          <CardService
            id='CSF'
            image={'https://live.staticflickr.com/65535/52833742684_c41230799a_w.jpg'}
            title={'Constelação Sistêmica Familiar'}
            description={
              'A Constelação Familiar Sistêmica é bem mais que uma ferramenta terapêutica. É uma filosofia/sabedoria da vida é para vida. É um processo terapêutico breve, ou seja, uma seção em grupo ou individual e focada em uma questão, dificuldade ou problema pessoal, como por ex: ansiedade, medos, dificuldades nas áreas da vida.'
            }
          />
          <CardService
            id='SRMH'
            image={'https://live.staticflickr.com/65535/52833967020_581526de8a_c.jpg'}
            title={'Shamballa Reiki Multidimensional Healind'}
            description={
              'É uma terapia alternativa e complementar, tem como objetivo principal o alinhamento dos chakra e das energias yin e yang, ela ajuda no tratamento de desequilíbrios no campo físico, mental, emocional e espiritual. '
            }
          />
          <CardService
            id='TCT'
            image={'https://live.staticflickr.com/65535/52833742589_e9d5956a03_z.jpg'}
            title={'Terapia Criativa Transpessoal'}
            description={
              'É uma técnica que reúne elementos das mais variadas abordagens terapêuticas. Essa ferramenta trata em conjunto os aspectos físicos, emocionais, mentais e espirituais.'
            }
          />
        </ContainerCards>
        <ContainerCards>
          <CardService
            id='Taro'
            image={'https://live.staticflickr.com/65535/52832995472_72d024bf38_z.jpg'}
            title={'Tarô'}
            description={
              'O Tarô é uma ferramenta/oráculo, composta por 78 cartas. Auxilia no autoconhecimento, direciona em decisões e pode ser usado nos aconselhamentos na leitura do tarô terapêutico.'
            }
          />
          <CardService
            id='MD'
            image={'https://live.staticflickr.com/65535/52834012223_b955b86347_c.jpg'}
            title={'Mesa do Despertar '}
            description={'A mesa analisa os seguintes áreas da vida: Financeiro, Relacionamento, Profissional, Saúde Emocional e etc.'}
          />
          <CardService
            id='RA'
            image={'https://live.staticflickr.com/65535/52832995512_589835679b_z.jpg'}
            title={'Registros Akashicos'}
            description={
              'É a leitura do seu livro da alma, onde estão armazenados informações de suas emoções, ações, potenciais, aprendizados que sua alma acumulou durante várias experiências de vida.'
            }
          />
        </ContainerCards>

        <Link to='https://wa.me/5511939501435?text=Oi,%20seja%20bem-vinda!%20Como%20eu%20posso%20ajudar?' target='_blank'>
          <CustomButton content='Equilíbrio e Bem-estar. Agendar minha Sessão' height='58' width='400' type='button' textColor='white' />
        </Link>
      </ContainerCardService>
    </SectionCardService>
  );
}
