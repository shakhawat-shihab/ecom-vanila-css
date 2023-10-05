const initialState = {
  productsList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCT": {
      console.log("LOAD_PRODUCT is calling ");
      return {
        ...state,
        productsList: action.payload,
      };
    }

    case "ADD_PRODUCT": {
      console.log("ADD_PRODUCT is calling ", state.productsList);
      let products = state.productsList;
      products.push(action?.payload);
      console.log(products);
      return {
        ...state,
        productsList: products,
      };
    }

    case "DELETE_PRODUCT": {
      console.log("DELETE_PRODUCT is calling ", state.productsList);
      let products = state.productsList.filter(
        (x) => x?._id !== action.payload
      );
      console.log("delete products ", products);
      return {
        ...state,
        productsList: products,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
