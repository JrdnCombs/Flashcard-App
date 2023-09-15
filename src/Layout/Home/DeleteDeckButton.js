import React from "react";
import { deleteDeck } from "../../utils/api/index";
import { useHistory } from "react-router-dom";

function DeleteDeckButton ({ deck }) {
    const history = useHistory();
    const handleDeleteClick = () => {
        if (window.confirm("Delete this deck? You will not be able to recover it.")) {
        deleteDeck(deck.id);
      }
    };

    return (
        <button
            type="button"
            className="btn btn-danger mr-2"
            onClick={handleDeleteClick}
        >
        <span className="oi oi-trash text-white" />
        </button>
    );
}

export default DeleteDeckButton