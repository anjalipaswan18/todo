import React, { useState } from "react";
import Modal from "./Modal";
import "./Todo.css";
export default function Todo() {
  const [show, setshow] = useState(true);
  const [inputList, setInputList] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [view, setView] = useState("all");
  const [Items, setItems] = useState([
    { name: "buy apple", isComplete: true },
    { name: "buy apple" },
    { name: "buy apple" },
  ]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfitems = () => {
    console.log(listOfitems);
    if (inputList === "") {
      setErrorMessage("Error: Please enter a valid item");
    } else {
      setErrorMessage("");
      setItems((oldItems) => {
        return [...oldItems, { name: inputList, isCompleted: false }];
      });
    }
    setInputList("");
  };
  const Lists = (val) => {
    setItems(
      Items.map((value, index) => {
        if (index === val) {
          return {
            ...value,
            isCompleted: !value.isCompleted,
            date: new Date(),
          };
        } else {
          return value;
        }
      })
    );
  };
  const allshow = () => {
    setView("all");
  };
  const showList = () => {
    setView("active");
  };
  const notShow = () => {
    setView("completed");
  };
  return (
    <>
      <div className="main-container">
        <div className="small-container">
          <h1>ToDo list</h1>
          <br />
          {show ? <Modal /> : null}

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
          <div className="input-button">
            {" "}
            {<button onClick={allshow}>all</button>}
            <button onClick={showList}>notcompleted</button>
            <button onClick={notShow}>Completed</button>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <ol>
            {Items.filter((item) => {
              if (view === "all") {
                return true;
              } else if (view === "active") {
                return !item.isCompleted;
              } else if (view === "completed") {
                return item.isCompleted;
              }
            }).map((itemval, index) => {
              return (
                <li
                  className={
                    itemval.isCompleted ? "disbaleListItems" : "listItems"
                  }
                  key={index}
                >
                  {itemval?.name}{" "}
                  {itemval?.date && new Date(itemval?.date).toLocaleString()}
                  <input
                    onClick={() => Lists(index)}
                    type="checkbox"
                    className="todo-style"
                    checked={itemval.isCompleted}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
