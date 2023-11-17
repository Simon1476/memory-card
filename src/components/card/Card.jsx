import "./Card.scss";

const Card = ({ card, cardClick }) => {
  return (
    <div className="card">
      <button type="button" onClick={cardClick}>
        <img src={card.frontDefault} alt={card.name} />
        <p>{card.name}</p>
      </button>
    </div>
  );
};

export default Card;
