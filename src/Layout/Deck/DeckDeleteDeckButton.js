import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";

function DeckDeleteDeckButton({ deckId }) {
  const history = useHistory();
  
  const deleteDeckHandler = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deckId).then(() => history.push("/"));
    }
  };

  return (
    <button 
        type="button" 
        className="btn btn-danger" 
        onClick={deleteDeckHandler}>
      <span className="oi oi-trash" />
    </button>
  );
}

export default DeckDeleteDeckButton;