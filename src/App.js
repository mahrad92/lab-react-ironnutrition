import './App.css';
// src/index.js
import "antd/dist/antd.css";
import foods from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox"
import NewFood from './components/NewFood';
import FoodSearch from './components/FoodSearch'
import { Card, Row, Col, Divider, Input, Button } from "antd";
function App() {
  const [ourfoods, setourfoods] = useState(foods.map((p, id) => ({ ...p, id })))
  const [showStatus, setshowStatus] = useState("FoodsList")
  const addFoodHandler = nFood => {
    setourfoods([...ourfoods, nFood])
  }
  const searchFoodHandler = (search) => {
    setourfoods(ourfoods.filter(filterFoods => search.length === 0 ? true : (filterFoods.name).toLowerCase().includes(search.toLowerCase())))
  }
  const DeleteFood = (idOfDeletedFood) => {
    setourfoods(ourfoods.filter(f => f.id !== idOfDeletedFood))
  }
  return (
    <Row >
      {

        showStatus !== "FoodsList" ?
          <>
             
             <Col>
             <Row>

            <Button type="primary" onClick={() => {
              setshowStatus("FoodsList")
            }}> FoodsList </Button>
          </Row>

          <Row>
            <NewFood foods={ourfoods} onAddFood={addFoodHandler} />
            </Row> 
            </Col>

          </>
          : <>
          <Col>
            <Row>
              <Button type="primary" onClick={() => {
                setshowStatus("Addform")
              }}> AddNew </Button>
            </Row>
            <Row>
              <FoodSearch onSearchFoodData={searchFoodHandler} />
              </Row>
              <Row>

              {
                ourfoods.map(food => <Col xs={24} sm={24} md={12} lg={8} >
                  <FoodBox foodB={food} onDelete={DeleteFood}> </FoodBox>
                </Col>)
              }
            </Row>
            </Col>
          </>
      }
    </Row>
  );
}
export default App;
