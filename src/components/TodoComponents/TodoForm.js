import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item1: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  // class property to submit form
  submitItem = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.item);
    // this.setState({ item: "" });
  };

  render() {
    console.log("rendering form", this.state.item);
    return (
      <form onSubmit={this.submitItem}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
