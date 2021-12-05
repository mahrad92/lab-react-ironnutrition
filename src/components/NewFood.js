import React from 'react';
import FoodForm from './FoodForm';

const NewFood = (props) => {
  const saveFoodDataHandler = (enteredFoodData) => {
    const FoodData = {
      ...enteredFoodData,
      id: Math.random().toString()
    };
    props.onAddFood(FoodData);
  };
  return (
    <div>
      <FoodForm onSaveFoodData={saveFoodDataHandler} />
    </div>
  );
};

export default NewFood;