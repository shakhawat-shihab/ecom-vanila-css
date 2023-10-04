import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductHook from "../../hooks/useProductHook";
import ImageViewer from "../../components/imageViewer/imageViewer";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const { getProductById, product } = useProductHook();

  useEffect(() => {
    if (productId) getProductById(productId);
  }, [productId]);

  console.log(product);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <h2>{productId}</h2> */}

      <div className="modal-body">
        <div className="modal-image">
          {/* <img src={thumbnail} alt="" width="70%" /> */}
          <ImageViewer
            images={product?.images}
            thumbnail={product?.thumbnail}
          />
        </div>
        <div>
          <p>{product?.title}</p>
          <p>{product?.price}</p>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
