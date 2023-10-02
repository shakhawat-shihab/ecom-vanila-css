import React, { useEffect, useState } from "react";
import "./insertProduct.style.scss";
import useProductHook from "../../hooks/useProductHook";
import { useForm, Controller } from "react-hook-form";

const InsertProduct = () => {
  const { insertProduct } = useProductHook();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      price: 1,
      stock: 1,
      rating: 0,
      description: "",
    },
  });

  // const handleInsertProduct = (e) => {
  //   console.log("Submit Clicked");
  //   e.preventDefault();
  //   const product = { title, price, stock, rating, description };
  //   console.log(product);
  //   insertProduct(product);
  // };

  const handleOnSubmit = (data) => {
    const product = {
      title: getValues("title"),
      price: getValues("price"),
      stock: getValues("stock"),
      rating: getValues("rating"),
      description: getValues("description"),
    };
    console.log("product ---", product);
    insertProduct(product);
  };

  useEffect(() => {
    console.log("error ", errors);
  }, [errors]);

  return (
    <div className="insert-product-form">
      {/* <form onSubmit={handleInsertProduct}>
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
      </form> */}

      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <h2>Insert Product</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <Controller
            name="title"
            control={control}
            rules={{
              required: "title is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
              // pattern: {
              //   value: 20,
              //   message: "Minimum length must be 20",
              // },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter title"
                {...field}
                type="text"
                // required
                style={{
                  border: errors?.title ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span className="error-message">{errors?.title?.message}</span>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <Controller
            name="price"
            control={control}
            rules={{
              required: "price is required",
              min: {
                value: 1,
                message: "Minimum value is 1",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter price"
                {...field}
                type="number"
                // required
                style={{
                  border: errors?.price ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span className="error-message">{errors?.price?.message}</span>
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <Controller
            name="stock"
            control={control}
            rules={{
              required: "stock is required",
              min: {
                value: 1,
                message: "Minimum value is 1",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter stock"
                {...field}
                type="number"
                // required
                style={{
                  border: errors?.stock ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span className="error-message">{errors?.stock?.message}</span>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <Controller
            name="rating"
            control={control}
            rules={{
              required: "rating is required",
              min: {
                value: 0,
                message: "Minimum value is 0",
              },
              max: {
                value: 5,
                message: "Maximum value is 5",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter rating"
                {...field}
                type="number"
                // required
                style={{
                  border: errors?.rating ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span className="error-message">{errors?.rating?.message}</span>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <Controller
            name="description"
            control={control}
            rules={{
              required: "description is required",
              minLength: {
                value: 5,
                message: "Minimum value is 5",
              },
              maxLength: {
                value: 200,
                message: "Maximum value is 200",
              },
            }}
            render={({ field }) => (
              <textarea
                placeholder="Enter description"
                {...field}
                type="text"
                // required
                style={{
                  border: errors?.description ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span className="error-message">{errors?.description?.message}</span>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default InsertProduct;
