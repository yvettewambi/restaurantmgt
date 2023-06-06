import React from "react";

function RestaurantDetails(props) {
  const { name, address, cuisine } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Cuisine:</strong> {cuisine}
      </p>
    </div>
  );
}

export default RestaurantDetails;
