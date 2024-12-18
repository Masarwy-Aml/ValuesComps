import React, { Component } from "react";
import ValueItem from "./ValueItem";

export default class ValueList extends Component {
  render() {
    return (
      <div className="value-list">
        <h2>Values List</h2>
        {this.props.list.map((item) => (
          <ValueItem
            key={item.id}
            name={item.name}
            age={item.age}
            id={item.id}
            onDelete={this.props.onDeleteValue}
          />
        ))}
      </div>
    );
  }
}
