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
            image='./src/assets/tree.png'
            title={'Constelação Sistêmica Familiar'}
            alt='Constelação Sistêmica Familiar'
            description={
              'A Constelação Familiar Sistêmica é bem mais que uma ferramenta terapêutica. É uma filosofia/sabedoria da vida é para vida. É um processo terapêutico breve, ou seja, uma seção em grupo ou individual e focada em uma questão, dificuldade ou problema pessoal, como por ex: ansiedade, medos, dificuldades nas áreas da vida.'
            }
          />
          <CardService
            id='SRMH'
            image='./src/assets/reike.webp'
            alt='Shamballa Reiki Multidimensional Healind'
            title={'Shamballa Reiki Multidimensional Healind'}
            description={
              'É uma terapia alternativa e complementar, tem como objetivo principal o alinhamento dos chakra e das energias yin e yang, ela ajuda no tratamento de desequilíbrios no campo físico, mental, emocional e espiritual. '
            }
          />
          <CardService
            id='TCT'
            image='./src/assets/terapia.webp'
            alt='Terapia Criativa Transpessoal '
            title={'Terapia Criativa Transpessoal'}
            description={
              'É uma técnica que reúne elementos das mais variadas abordagens terapêuticas. Essa ferramenta trata em conjunto os aspectos físicos, emocionais, mentais e espirituais.'
            }
          />
        </ContainerCards>
        <ContainerCards>
          <CardService
            alt='Cartas de Tarô'
            id='Taro'
            image='./src/assets/taro.webp'
            title={'Tarô'}
            description={
              'O Tarô é uma ferramenta/oráculo, composta por 78 cartas. Auxilia no autoconhecimento, direciona em decisões e pode ser usado nos aconselhamentos na leitura do tarô terapêutico.'
            }
          />
          <CardService
            alt='Mesa do Despertar'
            id='MD'
            image='./src/assets/despertar.webp'
            title={'Mesa do Despertar '}
            description={'A mesa analisa os seguintes áreas da vida: Financeiro, Relacionamento, Profissional, Saúde Emocional e etc.'}
          />
          <CardService
            id='RA'
            alt='Registros Akashicos'
            image='./src/assets/akashicos.webp'
            title={'Registros Akashicos'}
            description={
              'É a leitura do seu livro da alma, onde estão armazenados informações de suas emoções, ações, potenciais, aprendizados que sua alma acumulou durante várias experiências de vida.'
            }
          />
        </ContainerCards>

        <Link to='https://wa.me/5511939501435?text=Oi,%20seja%20bem-vinda!%20Como%20eu%20posso%20ajudar?' target='_blank'>
          <CustomButton content='Equilíbrio e Bem-estar. Agendar minha Sessão' height='58' width='400' type='button' textColor='white' aria-label='Botão que leva para o whattsapp. Podendo assim ter mais informações.'/>
        </Link>
      </ContainerCardService>
    </SectionCardService>
  );
}
