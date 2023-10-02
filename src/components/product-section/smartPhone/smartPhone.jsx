import React, { useContext, useEffect, useState } from "react";
import "./smartPhone.style.scss";
import ProductCardImage from "../../ProductCard/productCardImage";
import useProductHook from "../../../hooks/useProductHook";
import Spinner from "../../spinner/spinner";

const SmartPhone = () => {
  const { phone, isLoadingProduct, getSmartPhone } = useProductHook();
  useEffect(() => {
    getSmartPhone();
  }, []);
  // console.log(phone);

  return (
    <div className="smart-phone-container">
      <div className="smart-phone-title">
        <h2>Mobile Products</h2>
        <h5>Go to Shop</h5>
      </div>
      <div>
        {isLoadingProduct ? (
          <Spinner />
        ) : (
          <div className="smart-phone-card-container">
            {phone?.map((x) => (
              <ProductCardImage key={x?.id} props={x} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartPhone;
