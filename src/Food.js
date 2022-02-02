import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';

const Food = () => {
  const [Food, setFood] = useState("");
  const [FoodList, setFoodList] = useState([]);
  return (
    <div>
      <center>
      <input id='foodibox'
        type="text"
        value={Food}
        placeholder="Enter a Food"
        onChange={(e) => {
          setFood(e.target.value);
        }}
      />
      <input
      id='ibox'
        type="button"
        value="Add"
        onClick={(e) => {
          setFoodList([...FoodList,
            {
              id: FoodList.length + 1,
              Food: Food
            }
          ]);
          setFood(""); 
        }}
      />
      <ul>
        {FoodList.map((m) => (
          <li key={m.id}>{m.Food}</li>
        ))}
      </ul>
      </center>
    </div>
  );
};
export default Food;