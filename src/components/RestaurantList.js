// RestaurantList.js

import React from "react";
import { Link } from "react-router-dom";

function RestaurantList(props) {
  const { restaurants, deleteRestaurant } = props;

  // ...
  return (
    <div>
      <h1>Restaurant List</h1>
      <Link to="/add" className="btn btn-primary mb-3">
        Add Restaurant
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant._id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.cuisine}</td>
              <td>{restaurant.location}</td>
              <td>
                <Link
                  to={`/details/${restaurant._id}`}
                  className="btn btn-info"
                >
                  Details
                </Link>
                <Link
                  to={`/update/${restaurant._id}`}
                  className="btn btn-warning"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteRestaurant(restaurant._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  // ...
}

export default RestaurantList;
