import React, { useState } from "react";
import "./Modal.css";
export default function Todo() {
  const [inputList, setInputList] = useState("");
  const [listOfitems, setshow] = useState(true);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const [show, setShow] = useState(false);

  function Modal(props) {
    if (!props.show) {
      return null;
    }
    return (
      <div className="modal-container">
        <div className="modal-content">
          <h2>add todo</h2>
          <label>
            <input
              type="text"
              placeholder="Add a Items"
              value={inputList}
              onChange={itemEvent}
              required="reqiured"
            />{" "}
            {
              <button
                className="add-button"
                onClick={() => {
                  listOfitems();
                  setshow(true);
                }}
              >
                +
              </button>
            }
          </label>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    );
  }
  function toggleModal() {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal show={show} onClose={toggleModal} />
    </div>
  );
}
