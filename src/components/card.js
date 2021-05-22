import React from "react";
import "./card.css";

const Card = ({
  id,
  name,
  type,
  manaCost,
  text,
  flavor,
  imageUrl,
  addCardToDeck,
  removeCardFromDeck,
}) => {
  return (
    <div className="Card">
      <div className="info">
        <p className="header">
          {name} - {manaCost} <br />
        </p>
        <p className="type">
          {type} <br />
        </p>
        <p className="text">
          {text} <br />
        </p>
        <p className="flavor">
          {flavor} <br />
        </p>
      </div>
      <img className="preview" src={imageUrl} />
      <div className="actions">
        <button
          onClick={() => {
            addCardToDeck({ id, name });
          }}
        >
          (+) Add to Deck
        </button>
        <button
          onClick={() => {
            removeCardFromDeck({ id });
          }}
        >
          (-) Remove from Deck
        </button>
      </div>
    </div>
  );
};

export default Card;
