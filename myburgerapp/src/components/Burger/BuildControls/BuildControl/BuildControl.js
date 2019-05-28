import React, { Component } from "react";
import "./BuildControl.css";

class BuildControl extends Component {
  handleAddIngredient(type) {
    this.props.addIngredient(type);
  }
  handleRemoveIngredient(type) {
    this.props.removeIngredient(type);
  }
  render() {
    return (
      <div className="BuildControl">
        {this.props.label}
        <button
          className="Less"
          onClick={this.handleRemoveIngredient.bind(this, this.props.type)}
        >
          LESS
        </button>
        <button
          className="More"
          onClick={this.handleAddIngredient.bind(this, this.props.type)}
        >
          MORE
        </button>
      </div>
    );
  }
}

export default BuildControl;
