import React from "react";
import { useHistory } from "react-router-dom";

function EditDeckCancelButton({ deckId }) {
  const history = useHistory();

  const editDeckCancelHandler = () => {
    history.push(`/decks/${deckId}`);
  }

  return (
    <button
      type="button"
      className="btn btn-dark mr-2"
      onClick={editDeckCancelHandler}
    >
      Cancel
    </button>
  );
}

export default EditDeckCancelButton;