import "./Card.scss";

const Card = ({ card }) => {
  return (
    <div className="card">
      <button type="button">
        <img src={card.frontDefault} alt={card.name} />
        <p>{card.name}</p>
      </button>
    </div>
  );
};

export default Card;
