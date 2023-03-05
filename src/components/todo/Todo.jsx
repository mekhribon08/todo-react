import React, { useState } from "react";
import Item from "../item/Item";
import "./Todo.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    setTodos([
      ...todos,
      { name: todoName, isDone: false, id: todos.length + 1 },
    ]);
  }

  function handleToggle(id) {
    let tempTodos = [...todos];
    let index = tempTodos.findIndex((todo) => todo.id === id);

    if (typeof index !== "number") return;

    tempTodos[index].isDone = !tempTodos[index].isDone;

    setTodos(tempTodos);
  }

  function handleDelate(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="wrapper">
      <h1 className="wrapper__title">TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={todoName}
          onChange={(evt) => setTodoName(evt.target.value)}
          className="wrapper__input"
          type="text"
        />
        <button className="btn" type="submit">
          Add
        </button>

        {/* <div className="box">
          <input type="checkbox" />
          <label className="box__label">One</label>
        </div>
        <div className="box">
          <input type="checkbox" />
          <label className="box__label">Two</label>
        </div> */}
      </form>
      <div>
        {todos.map((todo) => (
          <Item
            onDelate={() => handleDelate(todo.id)}
            key={todo.id}
            onToggle={() => handleToggle(todo.id)}
            name={todo.name}
            id={todo.id}
            isDone={todo.isDone}
          />
        ))}
      </div>
    </div>
  );
}
