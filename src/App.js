import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css';

class App extends React.Component {
 
  constructor() {
    super();
    this.state ={
      todo: []
    }
  }

  //Class methods to update State
  addTodo = (e, item )=> {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
      show: true
    }
    this.setState({ 
      todo: [...this.state.todo, newItem ]
    })
  }


  
  toggleCompleted = clickedItem => {
    console.log(clickedItem)

    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === clickedItem) {
          return {
            ...item,
            completed: !item.completed
          };
        } 
          return item;
      })
    });
  };

  handleChanges = (e) => {
    this.setState({ search: e.target.value })
    this.toggleShow(e.target.value);
  }

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };


  // filterCompleted = () => {
  //   this.setState({
  //     todo: this.state.todo.filter(item =>  !item.completed)
  //   })
  // }

  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>TO DO LIST</h1>
        <TodoForm  addTodo={this.addTodo}/>
        <TodoList toggleCompleted={this.toggleCompleted} todo={this.state.todo}
        clearTodo={this.clearTodo} />
      </div>
      </div>
    );
  }
}

export default App;