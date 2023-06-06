import React, { useState } from "react";

function RestaurantUpdate(props) {
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);
  const [cuisine, setCuisine] = useState(props.cuisine);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleCuisineChange(event) {
    setCuisine(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Send data to server here
  }

  return (
    <div>
      <h2>Update Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <br />
        <label>
          Cuisine:
          <input type="text" value={cuisine} onChange={handleCuisineChange} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default RestaurantUpdate;
