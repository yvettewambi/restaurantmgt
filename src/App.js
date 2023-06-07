import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantUpdate from "./components/RestaurantUpdate";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("/api/restaurants")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addRestaurant = (formData) => {
    axios
      .post("/api/restaurants", formData)
      .then((res) => setRestaurants([...restaurants, res.data]))
      .catch((err) => console.error(err));
  };

  const deleteRestaurant = (id) => {
    axios
      .delete(`/api/restaurants/${id}`)
      .then((res) =>
        setRestaurants(
          restaurants.filter((restaurant) => restaurant._id !== id)
        )
      )
      .catch((err) => console.error(err));
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <RestaurantList
                restaurants={restaurants}
                deleteRestaurant={deleteRestaurant}
              />
            }
          />
          <Route
            path="/add"
            element={<RestaurantForm addRestaurant={addRestaurant} />}
          />
          <Route path="/details/:id" element={<RestaurantDetails />} />
          <Route path="/update/:id" element={<RestaurantUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
