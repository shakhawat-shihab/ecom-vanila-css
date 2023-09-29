import React, { useState } from "react";
import "./insertProduct.style.scss";
import useProductHook from "../../hooks/useProductHook";

const InsertProduct = () => {
  const { insertProduct } = useProductHook();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const handleInsertProduct = (e) => {
    console.log("Submit Clicked");
    e.preventDefault();
    const product = { title, price, stock, rating, description };
    console.log(product);
    insertProduct(product);
  };
  return (
    <div className="insert-product-form">
      <form onSubmit={handleInsertProduct}>
        <h2>Insert Product</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onKeyUp={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            required
            onKeyUp={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            required
            onKeyUp={(e) => setStock(e.target.value)}
          />

          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            required
            onKeyUp={(e) => setRating(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            required
            onKeyUp={(e) => setDescription(e.target.value)}
          ></textarea>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default InsertProduct;
