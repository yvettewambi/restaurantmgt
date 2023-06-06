import React, { useState, useEffect } from "react";
import axios from "axios";

const RestaurantUpdate = ({ match }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await axios.get(`/api/restaurants/${match.params.id}`);
        setName(res.data.name);
        setDescription(res.data.description);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRestaurant();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    try {
      const res = await axios.put(
        `/api/restaurants/${match.params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Update Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default RestaurantUpdate;
