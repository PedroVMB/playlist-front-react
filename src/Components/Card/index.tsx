import './Card.css';

interface CardProps {
  name: string;
  banda: string;
  url: string;
}

export function Card({ name, banda, url }: CardProps) {
  return (
    <div className="musica">
      <div className="cabecalho">
        <img src={url} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{banda}</h5>
      </div>
    </div>
  );
}
