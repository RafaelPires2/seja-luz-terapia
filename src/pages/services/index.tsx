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
            image={'src/styles/assets/tree.png'}
            title={'Constelação Sistêmica Familiar'}
            description={
              'A Constelação Familiar Sistêmica é bem mais que uma ferramenta terapêutica. É uma filosofia/sabedoria da vida é para vida. É um processo terapêutico breve, ou seja, uma seção em grupo ou individual e focada em uma questão, dificuldade ou problema pessoal, como por ex: ansiedade, medos, dificuldades nas áreas da vida.'
            }
          />
          <CardService
            id='SRMH'
            image={'src/styles/assets/reiki.webp'}
            title={'Shamballa Reiki Multidimensional Healind'}
            description={
              'É uma terapia alternativa e complementar, tem como objetivo principal o alinhamento dos chakra e das energias yin e yang, ela ajuda no tratamento de desequilíbrios no campo físico, mental, emocional e espiritual. '
            }
          />
          <CardService
            id='TCT'
            image={'src/styles/assets/terapia.webp'}
            title={'Terapia Criativa Transpessoal'}
            description={
              'É uma técnica que reúne elementos das mais variadas abordagens terapêuticas. Essa ferramenta trata em conjunto os aspectos físicos, emocionais, mentais e espirituais.'
            }
          />
        </ContainerCards>
        <ContainerCards>
          <CardService
            id='Taro'
            image={'src/styles/assets/taro.webp'}
            title={'Tarô'}
            description={
              'O Tarô é uma ferramenta/oráculo, composta por 78 cartas. Auxilia no autoconhecimento, direciona em decisões e pode ser usado nos aconselhamentos na leitura do tarô terapêutico.'
            }
          />
          <CardService
            id='MD'
            image={'src/styles/assets/despertar.webp'}
            title={'Mesa do Despertar '}
            description={'A mesa analisa os seguintes áreas da vida: Financeiro, Relacionamento, Profissional, Saúde Emocional e etc.'}
          />
          <CardService
            id='RA'
            image={'src/styles/assets/akashicos.webp'}
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
