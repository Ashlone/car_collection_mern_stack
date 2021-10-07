import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import "./Form.css";

const EditForm = () => {
  //states
  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  let history = useHistory();
  //We use the useEffect hook to get data we stored in the Local Storage
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setModel(localStorage.getItem("Model"));
    setYear(localStorage.getItem("Year"));
    setPrice(localStorage.getItem("Price"));
  }, []);

  const handleClick = () => {
    axios
      .put(`http://localhost:5000/car/${id}`, {
        name,
        model,
        year,
        price,
      })
      .then(() => {
        history.push("/home");
      });
    alert("Car updated successfully");
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
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <div className="label">
            <label>Model</label>
          </div>
          <input value={model} onChange={(e) => setModel(e.target.value)} />
          <div className="label">
            <label>Year</label>
          </div>
          <input value={year} onChange={(e) => setYear(e.target.value)} />
          <div className="label">
            <label>Price</label>
          </div>
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <button onClick={handleClick} className="formButton">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
