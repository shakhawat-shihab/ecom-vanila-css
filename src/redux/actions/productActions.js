export const loadProductAction = (data) => {
  return {
    type: "LOAD_PRODUCT",
    payload: data,
  };
};

export const addProductAction = (data) => {
  return {
    type: "ADD_PRODUCT",
    payload: data,
  };
};

export const deleteProductAction = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

export const updateProduct = (id, data) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: { id, data },
  };
};
