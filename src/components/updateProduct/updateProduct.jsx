import React, { useEffect, useState } from "react";
import useProductHook from "../../hooks/useProductHook";
import "./updateProduct.style.css";
import Spinner from "../spinner/spinner";
const UpdateProduct = () => {
  const {
    getProductById,
    product,
    setProduct,
    isLoadingProduct,
    updateProduct,
  } = useProductHook();
  const [productId, setProductId] = useState("");

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [foundProduct, setFoundProduct] = useState(0);

  const getProduct = (e) => {
    setFoundProduct(0);
    e.preventDefault();
    if (productId) {
      //   console.log(productId);
      getProductById(productId);
      //   if (product) {
      //     console.log("product ", product);
      //     setFoundProduct(true);
      //     setId(product?._id);
      //     setTitle(product?.title);
      //     setPrice(product?.price);
      //     setStock(product?.stock);
      //     setRating(product?.rating);
      //     setDescription(product?.description);
      //   }
    } else alert("Product Id is not provided");
  };

  useEffect(() => {
    setId(product?._id);
    setTitle(product?.title);
    setPrice(product?.price);
    setStock(product?.stock);
    setRating(product?.rating);
    setDescription(product?.description);
  }, [product]);

  //   console.log(product);

  const handleUpdateProduct = (e) => {
    console.log("Update Clicked");
    e.preventDefault();
    const product = { id, title, price, stock, rating, description };
    console.log("product ", product);
    updateProduct(product);
    setProduct({});
  };

  return (
    <div className="update-product-form">
      <form onSubmit={getProduct}>
        <h2>Update Product</h2>
        <div>
          <label htmlFor="id">Product Id:</label>

          <input
            type="text"
            id="id"
            name="id"
            required
            onKeyUp={(e) => setProductId(e.target.value)}
            // disabled={`${foundProduct == 1 ? "true" : "false"}`}
            // disabled={`${foundProduct}`}
          />
          <input type="submit" value="Search" />
        </div>
      </form>
      {isLoadingProduct ? (
        <Spinner />
      ) : (
        product?._id && (
          <form onSubmit={handleUpdateProduct}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                required
                onKeyUp={(e) => setTitle(e.target.value)}
                defaultValue={product?.title}
              />

              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                required
                onKeyUp={(e) => setPrice(e.target.value)}
                defaultValue={product?.price}
              />

              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                required
                onKeyUp={(e) => setStock(e.target.value)}
                defaultValue={product?.stock}
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
                defaultValue={product?.rating}
              />
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                required
                onKeyUp={(e) => setDescription(e.target.value)}
                defaultValue={product?.description}
              ></textarea>
              <input type="submit" value="Update" />
            </div>
          </form>
        )
      )}
    </div>
  );
};

export default UpdateProduct;
