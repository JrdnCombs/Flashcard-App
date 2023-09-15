import React from "react";
import { useHistory } from "react-router-dom";

function CancelButton() {
  const history = useHistory();

  const cancelHandler = () => {
    history.push("/");
  };

  return (
    <button
      type="button"
      className="btn btn-dark mr-2"
      onClick={cancelHandler}
    >
      Cancel
    </button>
  );
}

export default CancelButton;