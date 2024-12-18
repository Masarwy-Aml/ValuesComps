import React, { Component } from "react";
import ValueInput from "./ValueInput";
import ValueList from "./ValueList";

export default class ValueManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: "Aml", age: 25, id: 315229021 }],
    };
  }

  handleAddValue = (newValue) => {
    this.setState({ list: [...this.state.list, newValue] });
  };

  handleDeleteValue = (id) => {
    this.setState({ list: this.state.list.filter((item) => item.id !== id) });
  };

  render() {
    return (
      <div className="value-manager">
        <h1>Value Manager</h1>
        <ValueInput onAddValue={this.handleAddValue} />
        <ValueList list={this.state.list} onDeleteValue={this.handleDeleteValue} />
      </div>
    );
  }
}
