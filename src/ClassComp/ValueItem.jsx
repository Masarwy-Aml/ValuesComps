import React, { Component } from "react";

export default class ValueItem extends Component {
  render() {
    const { name, age, id, onDelete } = this.props;

    return (
      <div className="value-item">
        <span>
          Name: {name}, Age: {age}, ID: {id}
        </span>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    );
  }
}
