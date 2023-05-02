import React from "react";
import "./App.css";
const TODOLISTS = (props) => {
  // props are immutable
  return (
    <>
      <div className="taskalign">
        <li>
          {props.id + 1} {props.text}{" "}
        </li>
        <i
          className="bi bi-x-lg"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </div>
    </>
  );
};
export default TODOLISTS;
