import { Input } from 'antd';
import React, { useState } from 'react';

const FoodForm = (props) => {
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const [calories, setcalories] = useState('');
   const [servings, setservings] = useState('');
  
  const nameChangeHandler = (event) => {
    setname(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setimage(event.target.value);
  };
  const caloriesChangeHandler = (event) => {
    setcalories(event.target.value);
  };

  const servingsChangeHandler = (event) => {
    setservings(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const foodData = {
      name: name,
      calories: calories,
      image: image,
      servings:servings
    };

    props.onSaveFoodData(foodData);
    setname('');
    setimage('');
    setservings('');
    setimage('');
  };

  return (
    <form onSubmit={submitHandler}>
    
      <Input addonBefore="Name"  defaultValue={name} onChange={nameChangeHandler} />
          <Input
            addonBefore="servings"
            type='number'
            min='1'
            step='1'
            defaultValue={servings}
            onChange={servingsChangeHandler}
          />
        
          <Input
            addonBefore="Image"
            defaultValue={image}
            onChange={imageChangeHandler}
          />
          <Input
            addonBefore="calories"
            type='number'
            min='1'
            step='1'
            value={calories}
            onChange={caloriesChangeHandler}
          />
        
      
      <div >
        <button type='submit'>Add Food</button>
      </div>
    </form>
  );
};

export default FoodForm;