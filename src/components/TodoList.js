import React from "react";
import Item from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo list </h2>
        <Item />
      </div>
    );
  }
}

export default TodoList;
