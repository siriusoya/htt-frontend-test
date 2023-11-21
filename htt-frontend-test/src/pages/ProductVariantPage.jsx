import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import VariantCard from '../components/VariantCard';
import { fetchProductVariants } from '../store/slices/product'

const ProductVariantPage = () => {
  const dispatch = useDispatch()
  const { productSku } = useParams();

  const productVariantList = useSelector(state => state.product.productVariants)
  const productList = useSelector(state => state.product.productList)

  useEffect(() => {
    dispatch(fetchProductVariants(productSku))
    
  }, [productList])

  return (
    <div className="home_container">
      <h2 className="page_title">{`${productSku} Variant List`}</h2>
      <button className='add_variant_button'>{`Add ${productSku} Variant`}</button>
      <div className="product_container container grid">
        {productVariantList?.map((variant) => {
          return <VariantCard key={variant.sku} variant={variant} productSku={productSku} />
        })}
      </div>
      {console.log(productVariantList, '<<< productVariantList')}
      {console.log(productSku, '<<< productSKU')}
    </div>
    
  )
}

export default ProductVariantPage