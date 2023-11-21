import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import VariantCard from '../components/VariantCard';
import { fetchProductVariants, addProductVariant } from '../store/slices/product'

import VariantForm from "../components/VariantForm";

const ProductVariantPage = (props) => {
  let { state } = useLocation();
  const dispatch = useDispatch()
  const { productSku } = useParams();

  const productVariantList = useSelector(state => state.product.productVariants)
  const productList = useSelector(state => state.product.productList)

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProductVariants(productSku))
    
  }, [productList])

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleAddVariant(data) {
    console.log("add ketrigger");
    dispatch(addProductVariant(
      {
        productSku: productSku,
        variantData: data
      }
    ))
    setShowModal(false);
  }

  return (
    <div className="home_container">
      {showModal && (
            <VariantForm
              handleAddVariant={handleAddVariant}
              handleCloseModal={handleCloseModal}
            />
          )}
      <h2 className="page_title">{`${state?.name} Variant List`}</h2>
      <button onClick={handleShowModal} className='add_variant_button'>{`Add ${state?.name} Variant`}</button>
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