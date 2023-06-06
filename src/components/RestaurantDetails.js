import React, { useState, useEffect } from "react";
import axios from "axios";

const RestaurantDetails = ({ match }) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await axios.get(`/api/restaurants/${match.params.id}`);
        setRestaurant(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRestaurant();
  }, [match.params.id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <img src={`/images/${restaurant.image}`} alt="Restaurant" />
      <p>{restaurant.description}</p>
    </div>
  );
};

export default RestaurantDetails;
