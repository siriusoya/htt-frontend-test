import React from "react";

const VariantName = (props) => {
  const { variant, handleDeleteVariant } = props;
  return (
    <div className="variant_info">
      <p>{variant.name}</p>
      
        <span onClick={() => handleDeleteVariant(variant.sku)} className="delete_variant">&times;</span>
     
    </div>
  );
};

export default VariantName;
