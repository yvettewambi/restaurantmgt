import React, { useState } from "react";
import axios from "axios";

const RestaurantForm = ({ addRestaurant }) => {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("cuisine", cuisine);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("image", image);
    try {
      const res = await axios.post("/api/restaurants", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      addRestaurant(res.data);
      setName("");
      setCuisine("");
      setLocation("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  // ...
  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <h1>Restaurant Details</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cuisine">Cuisine:</label>
        <input
          type="text"
          id="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          className="form-control-file"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add restaurant
      </button>
    </form>
  );
  // ...
};

export default RestaurantForm;
