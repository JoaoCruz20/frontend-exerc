import React, { useState, useEffect } from "react";
import { fetchProductDetail } from "../utils/api";
import "./ProductDetail.css";

function ProductDetail({ productId }) {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!productId) return (<h1>No Product Found</h1>);

    fetchProductDetail(productId).then((productInfo) =>
      setProductInfo(productInfo)
    );
  }, [productId]);

  const renderProductInfo = () => {
    return (
      <div className="detail-container">
        <div className="row">
          <img src={productInfo?.image} alt={productInfo?.title} className="product-image" />
        </div>
        <div className="row">
          <h2 className="row-title">{productInfo?.title}</h2>
        </div>
        <div className="row">
          <p className="row-description">{productInfo?.description}</p>
        </div>
        <div className="row">
          <h3 className="row-price">£{productInfo?.price}</h3>
        </div>
      </div>
    );
  };

  return productInfo && renderProductInfo();
}

export default ProductDetail;
