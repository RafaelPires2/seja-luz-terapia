import { Wrapper } from '../../styles/themes/global';
import { CardServiceContent } from './styles';

interface CardServiceProps {
  image: string;
  title: string;
  description: string;
  id: string;
  alt: string;
}

export function CardService({ image, title, description, id, alt }: CardServiceProps) {
  return (
    <CardServiceContent id={id}>
      <img src={image} alt={alt} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardServiceContent>
  );
}
