import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const task = [
  {
    name: "Bananas",
    id: 123,
    completed: false
  },
  {
    name: "Tortillas",
    id: 124,
    completed: false
  },
  {
    name: "Milk",
    id: 1235,
    completed: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    completed: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    completed: false
  },
  {
    name: "Granola Bars",
    id: 1248,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // this is the same as task: task
      task
    };
  }
  // Class methods to update state
  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      task: [...this.state.task, newItem]
    });
  };

  // this is a method of App
  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      task: this.state.task.map(item => {
        console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state.task);
    this.setState({
      // returns the items that haven't been completed and purges
      // the ones that have been completed
      task: this.state.task.filter(item => item.completed === false)
    });
    console.log(this.state.task);
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          task={this.state.task}
          toggleItem={this.toggleItem}
          clearcompleted={this.clearcompleted}
        />
      </div>
    );
  }
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

export default App;
