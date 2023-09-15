import React from "react";
import { useHistory } from "react-router-dom";

function ViewDeckButton({ deck }) {
  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/decks/${deck.id}`);
};

  return (
    <button
      type="button"
      className="btn btn-secondary mr-2"
      onClick={handleViewClick}
    >
      <span className="oi oi-eye" /> View
    </button>
  );
}

export default ViewDeckButton;