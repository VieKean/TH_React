import React, { useState } from 'react';

function Car() {
  //tạo state
  const [car, setCar] = useState({
    name: "Toyota",
    color: "Red",
    year: 2020,
  });

  // Hàm xử lý update year
  const updateYear = (event) => {
    const newYear = event.target.value;

    setCar((prevCar) => ({
      ...prevCar, 
      year: newYear, 
    }));
  };

  return (
    <>
      <h2>Show information of Car:</h2>
      <p>Name: {car.name}</p>
      <p>Color: {car.color}</p>
      <p>Year: {car.year}</p>
      
      Update Year of Car: 
      <input 
        type="number" 
        value={car.year} 
        onChange={updateYear} 
      />
      
      <input 
        type="button" 
        value="Update Year" 
        onClick={() => alert(`Car's year updated to: ${car.year}`)}
      />
    </>
  );
}

export default Car;
