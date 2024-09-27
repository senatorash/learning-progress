import React, { useState } from "react";

const Filter = ({ setFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleFilter = () => {
    setFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating..."
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
