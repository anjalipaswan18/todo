import { useState } from "react";
import "./Popup.css";

const Popup = ({ setShow, listOfitems, preInput }) => {
  const [inputTodo, setInputTodo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>add todo</h2>
        <button onClick={() => setShow()}>Close</button>
        <label>
          <input
            type="text"
            placeholder="Add a Items"
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
          />{" "}
          
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {
            <button
              className="add-button"
              onClick={() => {
                if (inputTodo === "") {
                  setErrorMessage("Error: Please enter a valid item");
                } else {
                  setErrorMessage("");
                  listOfitems(inputTodo);
                  setShow();
                }
              }}
            >
              +
            </button>
          }
        </label>
      </div>
    </div>
  );
};
export default Popup;
