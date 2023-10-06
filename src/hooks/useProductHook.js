import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosCreate";
import { useDispatch } from "react-redux";
import {
  addProductReducer,
  deleteProductReducer,
  loadProductReducer,
  updateProductReducer,
} from "../store/slices/productSlice";

const useProductHook = () => {
  const [products, setProducts] = useState([]);
  const [phone, setPhone] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch(`http://localhost:8000/products/all?sortAsc=price&sortParam=price`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data?.data?.products);
  //     });
  // }, []);

  const getAllProducts = () => {
    setIsLoadingProduct(true);
    axiosInstance
      .get(`/all`)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        setProducts(data?.data?.products);
        setIsLoadingProduct(false);
        dispatch(loadProductReducer(data?.data?.products));
        // if (data?.success) {
        //   alert(data?.message);
        // } else {
        //   alert(data?.message);
        // }
      })
      .catch((e) => {
        console.log("Error: ", e?.response?.statusText);
        // alert(e?.response?.statusText);
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const getSearchedProduct = (search) => {
    console.log("search called ", search);
    setIsLoadingProduct(true);
    axiosInstance
      .get(`/all?search=${search}`)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        setProducts(data?.data?.products);
        setIsLoadingProduct(false);
        // if (data?.success) {
        //   alert(data?.message);
        // } else {
        //   alert(data?.message);
        // }
      })
      .catch((e) => {
        console.log("Error: ", e?.response?.statusText);
        // alert(e?.response?.statusText);
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const getSmartPhone = () => {
    setIsLoadingProduct(true);
    axiosInstance
      .get(`http://localhost:8000/products/all?category=phone`)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        setPhone(data?.data?.products);
        setIsLoadingProduct(false);
        // if (data?.success) {
        //   alert(data?.message);
        // } else {
        //   alert(data?.message);
        // }
      })
      .catch((e) => {
        console.log("Error: ", e?.response?.statusText);
        // alert(e?.response?.statusText);
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const getProductById = (id) => {
    setIsLoadingProduct(true);
    // console.log("begin");
    axiosInstance
      .get(`find-by-id/${id}`)
      .then((res) => res.data)
      .then((data) => {
        // console.log("shihab ", data);
        setIsLoadingProduct(false);
        // if (data?.success == false) {
        //   setProduct({});
        //   alert(data?.message);
        // }
        if (data?.data) setProduct(data?.data);
        else setProduct({});
      })
      .catch((e) => {
        console.log("Error: ", e?.response?.statusText);
        setProduct({});
        alert(e?.response?.statusText);
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
    // console.log("end");
  };

  const deleteProduct = (id) => {
    setIsLoadingProduct(true);
    axiosInstance
      .delete(`/delete/${id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log("inside ");
        setIsLoadingProduct(false);
        console.log(data);
        if (data?.success) {
          dispatch(deleteProductReducer(id));
          alert(data?.message);
        } else {
          alert(data?.message);
        }
      })
      .catch((e) => {
        console.log(e);
        console.log("Error: ", e?.response?.statusText);
        alert(e?.response?.statusText);
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const insertProduct = (product) => {
    setIsLoadingProduct(true);
    axiosInstance
      .post(`http://localhost:8000/products/insert`, product)
      .then((res) => res.data)
      .then((data) => {
        setIsLoadingProduct(false);
        if (data?.success) {
          dispatch(addProductReducer(data?.data));
          alert(data?.message);
        } else {
          alert(data?.message);
        }
      })
      .catch((e) => {
        console.log(e);
        console.log("Error: ", e?.response?.statusText);
        alert(e?.response?.statusText);
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const updateProduct = (product) => {
    console.log(product);
    setIsLoadingProduct(true);
    const { id, ...other } = product;
    axiosInstance
      .patch(`http://localhost:8000/products/update/${id}`, other)
      .then((res) => res.data)
      .then((data) => {
        setIsLoadingProduct(false);
        if (data?.success) {
          dispatch(updateProductReducer(product));
          alert(data?.message);
        } else {
          alert(data?.message);
        }
      })
      .catch((e) => {
        console.log("Error: ", e?.response?.statusText);
        alert(e?.response?.statusText);
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  return {
    products,
    product,
    phone,
    setProduct,
    isLoadingProduct,
    getAllProducts,
    getSearchedProduct,
    getSmartPhone,
    insertProduct,
    deleteProduct,
    getProductById,
    updateProduct,
  };
};

export default useProductHook;
