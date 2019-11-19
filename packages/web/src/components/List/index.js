import React from "react";

import Item from "../Item/";

const List = ({
  list,
  deleteTask,
  editTask,
  setValueInput,
  editTaskForId,
  setEditTaskForId
}) => (
  <ul className="todo__list">
    {list.map(({ _id, name, isCompleted, text }, index) => (
      <Item
        props={{
          name,
          isCompleted,
          deleteTask,
          _id,
          editTask,
          setValueInput,
          editTaskForId,
          setEditTaskForId
        }}
        key={index}
      />
    ))}
  </ul>
);

export default List;
