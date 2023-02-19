import React from "react";
import "./Todo.css";

export default function Todo() {
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">TODO</h1>
      <form>
        <input className="wrapper__input" type="text" />

        <div className="box">
          <input type="checkbox" />
          <label className="box__label">One</label>
        </div>
        <div className="box">
          <input type="checkbox" />
          <label className="box__label">Two</label>
        </div>
      </form>
    </div>
  );
}
