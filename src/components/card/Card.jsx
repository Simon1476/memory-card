import "./Card.scss";
import PropTypes from "prop-types";
const Card = ({ card, cardClick, showFront }) => {
  return (
    <div className="card-container">
      {showFront ? (
        <div className="card front">
          <button type="button" onClick={cardClick}>
            <img src={card.frontDefault} alt={card.name} />
            <p>{card.name}</p>
          </button>
        </div>
      ) : (
        <div className="card back">
          <img src="/card-back.png" alt="" />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    frontDefault: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // Add more PropTypes for other properties of the 'card' object if necessary
  }).isRequired,
  cardClick: PropTypes.func.isRequired,
  showFront: PropTypes.bool.isRequired,
};
export default Card;
