import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from "../components/ProductCard";
import product from "../store/slices/product";

const HomePage = () => {
  const productList = useSelector(state => state.product.productList)

  return (
    <div className="home_container">
      <h2 className="page_title">Product List</h2>
      <div className="product_container container grid">
        {productList.map((product) => {
          return <ProductCard key={product.sku} product={product} />
        })}
      </div>
    </div>
  );
};

export default HomePage;
