import React, { useState } from "react";

import classNames from "classnames";

import Pencil from "../../icons/Pencil";

const Item = ({ props }) => {
  const [editTaskText, setEditTaskText] = useState(false);
  const [editValue, setEditValue] = useState("");
  const { name, deleteTask, isCompleted, _id, editTask } = props;
  return (
    <div className="todo__item">
      <div
        className={classNames("todo__edit-exit", {
          "exit-active": editTaskText
        })}
        onClick={() => setEditTaskText(false)}
      />
      <span
        onClick={() => {
          editTask({ _id, body: { isCompleted: !isCompleted } });
        }}
        className={classNames("todo__mark", { active: isCompleted })}
      />
      {!editTaskText ? (
        <p
          className={classNames("todo__active", {
            todo__completed: isCompleted
          })}
        >
          {name}
        </p>
      ) : (
        <input
          className="todo__text-edit"
          onChange={e => setEditValue(e.target.value)}
          value={editValue}
          onKeyPress={e => {
            e.key === "Enter" &&
              editTask({ _id, body: { name: editValue } }) &&
              setEditTaskText(!editTaskText);
          }}
          autoFocus={true}
        />
      )}

      <span
        className="todo__edit"
        onClick={() => {
          setEditTaskText(!editTaskText);
          setEditValue(name);
        }}
      >
        <Pencil />
      </span>
      <span className="todo__item-delete" onClick={() => deleteTask(_id)}>
        &times;
      </span>
    </div>
  );
};

export default Item;
