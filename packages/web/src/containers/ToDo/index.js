import React, { useState, useEffect } from "react";

import Input from "../../components/Input/";
import List from "../../components/List/";
import ButtonsList from "../../components/ButtonsList/";

import apiFetch from "../../utils/apiFetch";
import { stringifySearchParams } from "../../utils/stringifySearchParams";

import "./style.css";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [isCompleted, setIsCompleted] = useState(undefined);
  const [params, setParams] = useState({});
  const [valueInput, setValueInput] = useState("");

  const getList = async params =>
    await apiFetch(`?${stringifySearchParams(params)}`);

  const editTask = async ({ _id, body }) =>
    await apiFetch(`/${_id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

  const addTask = async body =>
    await apiFetch("", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

  const deleteTask = async id => await apiFetch(`/${id}`, { method: "DELETE" });

  useEffect(() => {
    const getData = async () => {
      const tasks = await getList(params);
      setList(tasks);
    };
    getData();
  }, [params]);

  return (
    <div className="todo">
      <h1 className="todo__title">ToDo List</h1>
      <Input
        valueInput={valueInput}
        setValueInput={setValueInput}
        addTask={async body => {
          await addTask(body);
          const tasks = await getList(params);
          setList(tasks);
        }}
      />
      <List
        list={list}
        deleteTask={async id => {
          await deleteTask(id);
          const tasks = await getList({});
          setList(tasks);
        }}
        editTask={async (id, body) => {
          await editTask(id, body);
          const tasks = await getList({});
          setList(tasks);
        }}
      />
      <ButtonsList
        getList={async params => {
          setParams(params);
        }}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    </div>
  );
};

export default ToDo;
