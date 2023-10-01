import { useState } from "react";

const useProductHook = () => {
  const [products, setProducts] = useState([]);
  const [phone, setPhone] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);

  //   useEffect(() => {
  //     fetch(`http://localhost:8000/products/all`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setProducts(data?.data?.products);
  //       });
  //   }, []);

  const getAllProducts = () => {
    setIsLoadingProduct(true);
    fetch(`http://localhost:8000/products/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data?.data?.products);
        setIsLoadingProduct(false);
        // if (data?.success) {
        //   alert(data?.message);
        // } else {
        //   alert(data?.message);
        // }
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const getSmartPhone = () => {
    setIsLoadingProduct(true);
    fetch(`http://localhost:8000/products/all?search=phone`)
      .then((res) => res.json())
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
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const getProductById = (id) => {
    setIsLoadingProduct(true);
    // console.log("begin");
    fetch(`http://localhost:8000/products/find-by-id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("shihab");
        setIsLoadingProduct(false);
        if (data?.success == false) {
          alert(data?.message);
        }
        if (data?.data) setProduct(data?.data);
        else setProduct({});
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
    // console.log("end");
  };

  const deleteProduct = (id) => {
    setIsLoadingProduct(true);
    fetch(`http://localhost:8000/products/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingProduct(false);
        if (data?.success) {
          alert(data?.message);
        } else {
          alert(data?.message);
        }
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const insertProduct = (product) => {
    setIsLoadingProduct(true);
    fetch(`http://localhost:8000/products/insert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingProduct(false);
        if (data?.success) {
          alert(data?.message);
        } else {
          alert(data?.message);
        }
      })
      .finally(() => {
        setIsLoadingProduct(false);
      });
  };

  const updateProduct = (product) => {
    setIsLoadingProduct(true);
    const { id, ...other } = product;
    fetch(`http://localhost:8000/products/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(other),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingProduct(false);
        if (data?.success) {
          alert(data?.message);
        } else {
          alert(data?.message);
        }
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
    getSmartPhone,
    insertProduct,
    deleteProduct,
    getProductById,
    updateProduct,
  };
};

export default useProductHook;
