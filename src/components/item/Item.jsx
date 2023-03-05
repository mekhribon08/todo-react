import React from "react";

export default function Item({ name, isDone, onToggle, onDelate }) {
  return (
    <div className="box">
      <input onChange={onToggle} checked={isDone} type="checkbox" />
      <span className="box__label">{name}</span>
      <button onClick={onDelate}>x</button>
      {/* <button onClick={setTodos}>Clear all</button> */}
    </div>
  );
}
