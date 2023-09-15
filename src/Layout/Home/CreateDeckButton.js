import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
    const history = useHistory();

    const handleCreateDeckClick = () => {
        history.push("/decks/new");
    };

    return (
      <button
        type="button"
        className=" btn btn-secondary mb-3 btn-lg"
        onClick={handleCreateDeckClick}
      >
        <span className="oi oi-plus" /> Create Deck
      </button>
    );
}
export default CreateDeckButton;