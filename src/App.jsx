import React, { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Persons";
import people from "./people";

export default function App() {
  const [peopleArr, setPeopleArr] = useState([]);

  useEffect(() => setPeopleArr(people), []);

  const handleClick = () => {
    setPeopleArr([]);
  };

  return (
    <div className="container card">
      <h1>5 people have birthday Today</h1>
      <main>
        {peopleArr.map(({ age, name, avatar }, index) => (
          <Person key={index} age={age} name={name} avatar={avatar} />
        ))}
      </main>

      <button onClick={handleClick}>Clear All</button>
    </div>
  );
}
