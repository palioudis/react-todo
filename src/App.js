import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
      { id: 3, title: "Call taxi" },
      { id: 4, title: "Push the code" }
    ],
    id: uuidv4(),
    item: "",
    editItem: false
  };

  handleChange = event => {
    console.log("handleChange");
  };

  handleSubmit = event => {
    console.log("handleSubmit");
  };

  handleClear = () => {
    console.log("handleClear");
  };

  handleEdit = id => {
    console.log("handleEdit");
  };

  handleDelete = id => {
    console.log(`handleDelete, ${id}`);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-9 mt-5">
              <h3 className="text-capitalize text-center"> todo input</h3>
            </div>
            <TodoInput
              items={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleEdit={this.handleEdit}
            />
            <TodoList
              items={this.state.items}
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
