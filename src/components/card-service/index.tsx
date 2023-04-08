import { Wrapper } from '../../styles/themes/global';
import { CardServiceContent, ContainerCardService, SectionCardService } from './styles';

interface CardServiceProps {
  image: string;
  title: string;
  description: string;
}

export function CardService({ image, title, description }: CardServiceProps) {
  return (
    <CardServiceContent>
      <img src={image} alt='' />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardServiceContent>
  );
}
