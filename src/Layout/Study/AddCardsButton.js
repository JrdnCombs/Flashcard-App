import React from "react";
import { useHistory } from "react-router";

function AddCardsButton({ deckId }) {
  const history = useHistory();

  const addCardHandler = () => {
    history.push(`/decks/${deckId}/cards/new`);
  }
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={addCardHandler}
    >
      <span className="oi oi-plus" /> Add Cards
    </button>
  );
}

export default AddCardsButton;