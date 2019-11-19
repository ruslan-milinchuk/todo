import React from "react";

const Input = ({ valueInput, setValueInput, addTask }) => (
  <div className="todo__input-wrapper">
    <input
      placeholder="Click to add task"
      className="todo__input"
      onChange={e => setValueInput(e.target.value)}
      value={valueInput}
      onKeyPress={e =>
        e.key === "Enter"
          ? valueInput && addTask({ name: valueInput }) && setValueInput("")
          : null
      }
    />
    <button
      onClick={() => {
        addTask({ name: valueInput });
        setValueInput("");
      }}
      disabled={!valueInput}
      className="todo__input-btn"
    >
      Enter
    </button>
  </div>
);

export default Input;
