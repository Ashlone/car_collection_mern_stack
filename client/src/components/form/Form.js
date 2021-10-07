import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({}) => {
  //states
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  //function to add the details to the database
  const handleOnClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/car/create", {
      name,
      model,
      year,
      price,
    });
    setName("");
    setModel("");
    setYear("");
    setPrice("");
    alert("Thanks for adding the car ");
  };

  return (
    <div>
      <Link to="/home" className="backLink">
        <span>back</span>
      </Link>

      <div className="form-container">
        <form className="form">
          <div className="label">
            <label>Name</label>
          </div>
          <input onChange={(e) => setName(e.target.value)} />
          <div className="label">
            <label>Model</label>
          </div>
          <input onChange={(e) => setModel(e.target.value)} />
          <div className="label">
            <label>Year</label>
          </div>
          <input onChange={(e) => setYear(e.target.value)} />
          <div className="label">
            <label>Price</label>
          </div>
          <input onChange={(e) => setPrice(e.target.value)} />
          <button onClick={handleOnClick} className="formButton">
            Create Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
