import React from "react";

import productImg from "../../../assets/images/product_2.1.jpg";

import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="product__item">
      <article className="item-details">
        <div className="item-image">
          <img src={productImg} alt="" />
        </div>

        <h3>title</h3>
        <div className="item-prices">
          <span>oldPrice</span>
          <h4>newPrice</h4>
        </div>
        <div className="item-cta">
          <button className="add-cart">Add to cart</button>

          <Link className="buy-now-link">
            <button className="buy-now">buy Now</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
