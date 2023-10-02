import React, { useState } from "react";
import useProductHook from "../../hooks/useProductHook";
import { Controller, useForm } from "react-hook-form";

const DeleteProduct = () => {
  const [productId, setProductId] = useState("");
  const { deleteProduct } = useProductHook();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      id: "",
    },
  });

  const handleDeleteProduct = (data) => {
    if (getValues("id")) deleteProduct(getValues("id"));
    else alert("Product Id is not provided");
  };

  return (
    <div className="insert-product-form">
      <form onSubmit={handleSubmit(handleDeleteProduct)}>
        <h2>Delete Product</h2>
        <div>
          <label htmlFor="id">Product Id:</label>
          <Controller
            name="id"
            control={control}
            rules={{
              required: "Product ID is required",
              pattern: {
                value: /^[a-f\d]{24}$/i,
                message: "Invalid Id provided",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Product Id"
                {...field}
                type="text"
                style={{
                  border: errors?.price ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span className="error-message">{errors?.id?.message}</span>
        </div>
        <input type="submit" value="Delete" />
      </form>
    </div>
  );
};

export default DeleteProduct;
