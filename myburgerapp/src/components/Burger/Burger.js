import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const burger = props => {
  /*  let burgerIngredients = null;
  if (props.ingredients) {
    burgerIngredients = props.ingredients.map(ingredients => {
      return <BurgerIngredients type={ingredients} />;
    });
  }*/
  let transformedIngredients = null;
  if (props.ingredients) {
    transformedIngredients = Object.keys(props.ingredients)
      .map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, count) => {
          return (
            <BurgerIngredients key={count + ingredient} type={ingredient} />
          );
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
  }
  console.log(transformedIngredients);
  if (transformedIngredients.length == 0) {
    transformedIngredients = <p>Please Add the Ingredients</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
