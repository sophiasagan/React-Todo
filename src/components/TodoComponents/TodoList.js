// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  // console.log(props);
  // const sortedList = props.task.sort((a, b) => a.completed - b.completed);
  return (
    <div className="todo-list">
      {props.task.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoList;


