import React, { useState } from "react";
import "./Todo.css";
export default function Todo() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([
    { name: "buy apple" },
    { name: "buy apple" },
    { name: "buy apple" },
  ]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfitems = () => {
    console.log(inputList);
    if (inputList === "") {
      alert("error");
    } else {
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
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
          };
        } else {
          return value;
        }
      })
    );
  };
  return (
    <>
      <div className="main-container">
        <div className="small-container">
          <h1>ToDo list</h1>
          <br />
          <label>
            <input
              type="text"
              placeholder="Add a Items"
              value={inputList}
              onChange={itemEvent}
              required="reqiured"
            />{" "}
            {<button onClick={listOfitems}>+</button>}
          </label>
          <ol>
            {Items.map((itemval, index) => {
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
