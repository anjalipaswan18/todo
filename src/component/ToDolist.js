import React, { useState } from "react";
import Popup from "./Popup";
import "./Todo.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";

export default function Todo() {
  const [show, setShow] = useState(false);
  const [view, setView] = useState("all");
  const [edit, setEdit] = useState("");

  const [Items, setItems] = useState([
    { id: "1", name: "apple", isComplete: true },
    { id: "2", name: "mango" },
    { id: "3", name: "onion" },
  ]);

  const listOfitems = (inputData) => {
    setItems((oldItems) => {
      return [...oldItems, { name: inputData, isCompleted: false }];
    });
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
  const deleteItem = (id) => {
    setItems(Items.filter((items, i) => i !== id));
  };

  return (
    <>
      <div className="main-container">
        <div className="small-container">
          <h1>ToDo list</h1>
          <br />
          <button onClick={() => setShow(!show)}>+ add</button>
          {show && (
            <Popup setShow={() => setShow(!show)} listOfitems={listOfitems} />
          )}
          <div className="input-button">
            {" "}
            {<button onClick={allshow}>all</button>}
            <button onClick={showList}>notcompleted</button>
            <button onClick={notShow}>Completed</button>
          </div>
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
                  {edit === index ? (
                    <input
                      type="text"
                      value={itemval.name}
                      onChange={(event) => setEdit(event.target.value)}
                    />
                  ) : (
                    itemval.name
                  )}
                  {itemval?.date && new Date(itemval?.date).toLocaleString()}
                  <input
                    onClick={() => Lists(index)}
                    type="checkbox"
                    className="todo-style"
                    checked={itemval.isCompleted}
                  />
                  <button
                    className="delete-button"
                    onClick={() => deleteItem(index)}
                  >
                    <AiTwotoneDelete />
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => setEdit(index)}
                  >
                    edit
                    <AiTwotoneEdit />
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
