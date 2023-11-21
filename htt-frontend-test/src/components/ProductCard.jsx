import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../store/slices/product'

const ProductCard = (props) => {
const {product} = props
const dispatch = useDispatch()

const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.sku))
}

  return (
    <div className="product_card_container">
          <div className="product_card_content">
            <h3 className="product_text">{product.name}</h3>
            <p className="product_text">{product.sku}</p>
            <p className="product_text">{product.brand}</p>
            <Link
                to={`product/${product.sku}`}
            >
            <button 
            className="product_button"
            >Product Variants</button>
            </Link>
            <button className="product_button">Edit Product</button>
            <button 
            className="product_button"
            onClick={handleDeleteProduct}
            >Delete Product</button>
          </div>
        </div>
  )
}

export default ProductCard