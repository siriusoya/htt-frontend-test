import React from 'react'
import { Link } from "react-router-dom";
import { EditorState, convertFromRaw } from "draft-js";
import {
  Editor,
} from "contenido";
import "draft-js/dist/Draft.css";

import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../store/slices/product'

const ProductCard = (props) => {
const {product} = props
const dispatch = useDispatch()

const handleDeleteProduct = () => {
    dispatch(deleteProduct(product.sku))
}

const { blocks, entityMap } = product.description;

const contentState = convertFromRaw({
  blocks: blocks,
  entityMap: entityMap,
});
const editorStateShow = EditorState.createWithContent(contentState);

  return (
    <div className="product_card_container">
      {/* {console.log(contentState, 'iniiiii')} */}
          <div className="product_card_content">
            <h3 className="product_title">{product.name}</h3>
            <p className="product_text">{product.sku}</p>
            <p className="product_text">{product.brand}</p>
            <div className='product_desc_container'>
            <Editor editorState={editorStateShow} readOnly={true} />
            </div>
            <Link
                className='link'
                to={`/product/${product.sku}`}
                state={product}
            >
            <button 
            className="product_button"
            >See Variants</button>
            </Link>
            <Link
              className='link'
              to={`edit-product/${product.sku}`}
                state={product}
              
            >
            <button className="product_button">Edit Product</button>
            </Link>
            <button 
            className="product_button"
            onClick={handleDeleteProduct}
            >Delete Product</button>
          </div>
        </div>
  )
}

export default ProductCard