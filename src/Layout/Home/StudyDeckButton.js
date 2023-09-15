import React from "react";
import { useHistory } from "react-router-dom";


function StudyDeckButton({ deck }) {
  const history = useHistory();

  const handleStudyClick = () => {
    history.push(`/decks/${deck.id}/study`);
  };

  return (
    <button
      type="button"
      className="btn btn-primary mr-2"
      onClick={handleStudyClick}
    >
      <span className="oi oi-book" /> Study
    </button>
  );
}

export default StudyDeckButton;