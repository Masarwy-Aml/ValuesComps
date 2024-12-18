import React, { Component } from "react";

export default class ValueInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      id: "",
    };
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Add a new value
  handleAdd = () => {
    const { name, age, id } = this.state;

    if (name && age && id) {
      this.props.onAddValue({ name, age: Number(age), id: Number(id) });
      this.setState({ name: "", age: "", id: "" }); // Reset 
    } else {
      alert("Please fill in all fields!");
    }
  };

  render() {
    return (
      <div className="value-input">
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Enter Age"
          className="no-arrows"
        />
        <input
          type="number"
          name="id"
          value={this.state.id}
          onChange={this.handleChange}
          placeholder="Enter ID"
          className="no-arrows"
        />
        <button onClick={this.handleAdd}>Add Value</button>
      </div>
    );
  }
}
