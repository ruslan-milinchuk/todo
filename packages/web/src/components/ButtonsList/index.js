import React from "react";

const FILTERS_BTN = [
  {
    text: "All",
    showCompleted: undefined
  },
  {
    text: "Active",
    showCompleted: false
  },
  {
    text: "Completed",
    showCompleted: true
  }
];

const ButtonsList = ({ getList, isCompleted, setIsCompleted }) => {
  return (
    <div className="todo__btn-s-wrapper">
      <span className="todo__buttons-title"> Show: </span>
      <div className="todo__buttons">
        {FILTERS_BTN.map(({ text, showCompleted }, index) => (
          <button
            onClick={() => {
              getList({ isCompleted: showCompleted });
              setIsCompleted(showCompleted);
            }}
            key={index}
            className={
              isCompleted === showCompleted ? "active" : "todo__buttons-item"
            }
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsList;
