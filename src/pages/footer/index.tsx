import { Link } from 'react-router-dom';
import { ContainerFooter, ContentFooter } from './styles';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Logo } from '../../components/logo';

export function Footer() {
  return (
    <ContainerFooter id='footer'>
      <ContentFooter>
        <Logo />
        <div className='container-navigation'>
          <div className='navigation-1'>
            <ul>
              <li>
                <a href='#CSF'>Constelação Sistêmica Familiar</a>
              </li>
              <li>
                <a href='#SRMH'>Shamballa Reiki Multidimensional</a>
              </li>
              <li>
                <a href='#TCT'>Terapia Criativa Transpessoal</a>
              </li>
            </ul>
          </div>
          <div className='navigation-2'>
            <ul>
              <li>
                <a href='#Taro'>Tarô</a>
              </li>
              <li>
                <a href='#MD'>Mesa do Despertar</a>
              </li>
              <li>
                <a href='#RA'>Registros Akashicos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='container-icons'>
          <Link to='https://wa.me/5511939501435?text=Oi,%20seja%20bem-vinda!%20Como%20eu%20posso%20ajudar?' target='_blank'>
            <BsWhatsapp size={32} color={'#CC43BF'} cursor={'pointer'} />
          </Link>

          <Link to='https://www.instagram.com/seja_luz_terapia/' target='_blank'>
            <BsInstagram size={32} color={'#CC43BF'} cursor={'pointer'} />
          </Link>
        </div>
      </ContentFooter>
    </ContainerFooter>
  );
}
