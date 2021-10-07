import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);

  const setDetailsData = (details) => {
    console.log(details);
    //setting the data into local storage
    let { _id, name, model, year, price } = details;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Model", model);
    localStorage.setItem("Year", year);
    localStorage.setItem("Price", price);
  };
  useEffect(() => {
    //fetching data from the api
    axios.get("http://localhost:5000/car/list").then((response) => {
      setData(response.data);
    });
  }, []);

  //function to fetch data after deleted
  const getDetails = () => {
    axios.get("http://localhost:5000/car/list").then((response) => {
      setData(response.data);
    });
  };

  const deleteCar = (_id) => {
    axios.delete(`http://localhost:5000/car/${_id}`).then(() => {
      getDetails();
      alert("deleted successful");
    });
  };

  return (
    <div>
      <div className="heading">
        <h1>Car Collection</h1>
        <Link to="/dashboard">
          <span>Add</span>
        </Link>
      </div>

      <div className="main-container">
        {data.map((details) => {
          return (
            <div className="container">
              <span className="title">{details.name}</span>

              <span className="model">{details.model}</span>

              <span className="year">{details.year}</span>

              <span className="price">{details.price}</span>
              <div className="adddelete">
                <Link to="/edit">
                  <span onClick={() => setDetailsData(details)}>edit</span>
                </Link>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteCar(details._id)}
                >
                  X
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
