import React, { useState } from 'react';
const FoodSearch=(props)=>
{
const [search, setSearch] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearchFoodData(search);
    setSearch('');
  };

return (
    <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type='submit'>search Food</button>
      </form>  
)
}
export default FoodSearch;