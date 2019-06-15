import React from "react";

const list = props => {
  console.log("Renderinng List");

  return (
    <ul>
      {props.items.map((todo, index) => (
        <li key={todo.id} onClick={props.onClick.bind(this, todo.id)}>
          {todo.name}
        </li>
      ))}
    </ul>
  );
};

export default list;
