import React, { Component } from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

class BuildControls extends Component {
  constructor() {
    super();
    this.state = {
      controls: [
        { label: "Meat", type: "meat" },
        { label: "Salad", type: "salad" },
        { label: "Cheese", type: "cheese" },
        { label: "Bacon", type: "bacon" }
      ]
    };
  }
  handleRemoveIngredient(type) {
    this.props.removeIngredient(type);
  }
  handleAddIngredient(type) {
    this.props.addIngredient(type);
  }
  render() {
    return (
      <div className="BuildControls">
        <p>
          Cost:<strong>{this.props.totalCost}</strong>
        </p>
        {this.state.controls.map(control => (
          <BuildControl
            removeIngredient={this.handleRemoveIngredient.bind(this)}
            addIngredient={this.handleAddIngredient.bind(this)}
            key={control.label}
            label={control.label}
            type={control.type}
          />
        ))}
      </div>
    );
  }
}

export default BuildControls;
