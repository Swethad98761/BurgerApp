import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_COST = {
  meat: 1.5,
  cheese: 0.8,
  bacon: 0.5,
  salad: 1.2
};
class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: { meat: 0, cheese: 0, bacon: 0, salad: 0 },
      totalCost: 4
    };
  }
  handleAddIngredient(type) {
    //console.log(label);
    const dummyIngredients = { ...this.state.ingredients };
    dummyIngredients[type] = dummyIngredients[type] + 1;
    //  console.log("state" + this.state.ingredients["meat"]);
    //console.log("state" + this.state.ingredients["meat"]);
    const totalCost = this.state.totalCost;
    const modifiedCost = totalCost + INGREDIENT_COST[type];
    this.setState({
      ingredients: dummyIngredients,
      totalCost: modifiedCost
    });
    //  console.log(dummyIngredients);
  }
  handleRemoveIngredient(type) {
    //console.log(label);
    const dummyIngredients = { ...this.state.ingredients };
    dummyIngredients[type] = dummyIngredients[type] - 1;
    //  console.log("state" + this.state.ingredients["meat"]);
    if (dummyIngredients[type] < 0) {
      dummyIngredients[type] = 0;
      //return;
    } else {
      const totalCost = this.state.totalCost;
      const modifiedCost = totalCost - INGREDIENT_COST[type];
      this.setState({
        ingredients: dummyIngredients,
        totalCost: modifiedCost
      });
    }
    console.log(dummyIngredients);
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          removeIngredient={this.handleRemoveIngredient.bind(this)}
          addIngredient={this.handleAddIngredient.bind(this)}
          totalCost={this.state.totalCost}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
