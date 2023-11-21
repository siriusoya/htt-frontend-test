import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductVariant } from "../store/slices/product";
import rupiahFormat from "../helpers/rupiahFormat";

const VariantCard = (props) => {
  const { variant, productSku } = props;
  const dispatch = useDispatch();

  const handleDeleteVariant = () => {
    dispatch(deleteProductVariant({
        productSku: productSku,
        variantSku: variant.sku
    }))
}

  return (
    <div className="product_card_container">
      <div className="product_card_content">
        <h3 className="product_title">{variant.name}</h3>
        <p className="product_text">{variant.sku}</p>
        <p className="product_text">{rupiahFormat(variant.price)}</p>
        
        <button 
        className="product_button"
        onClick={handleDeleteVariant}
        >Delete Variant</button>
      </div>
    </div>
  );
};

export default VariantCard;
