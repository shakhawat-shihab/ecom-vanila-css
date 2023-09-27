import React, { useContext, useEffect, useState } from "react";
import "./smartPhone.style.scss";
import ProductCardImage from "../../ProductCard/productCardImage";

const SmartPhone = () => {
  const [smartPhone, setSmartPhone] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setSmartPhone(data?.products));
  }, []);
  return (
    <div className="smart-phone-container">
      <div className="smart-phone-title">
        <h2>Mobile Products</h2>
        <h5>Go to Shop</h5>
      </div>

      <div className="smart-phone-card-container">
        {smartPhone?.map((x) => (
          <ProductCardImage key={x?.id} props={x} />
        ))}
      </div>
    </div>
  );
};

export default SmartPhone;
