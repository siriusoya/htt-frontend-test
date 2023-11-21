import React from "react";
import { useForm } from "react-hook-form";

const VariantForm = (props) => {
    const { handleCloseModal, handleAddVariant, variant } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data, '<<<');
        handleAddVariant(data)
      };
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span onClick={handleCloseModal} className="close">
          &times;
        </span>
        <h3 className="variant_form_title">Add Product Variant</h3>
        <form id="login_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_container">
          <p className="product_label">Name</p>
          <input
            className="form_input"
            placeholder="Name"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <p className="error_message">Name is required!</p>}
        </div>
        <div className="input_container">
          <p className="product_label">Stock Keeping Unit (SKU)</p>
          <input
            className="form_input"
            placeholder="Stock Keeping Unit (SKU)"
            {...register("sku", { required: true })}
          />
          {errors.sku && <p className="error_message">SKU is required!</p>}
        </div>
        <div className="input_container">
          <p className="product_label">Price</p>
          <input
            className="form_input"
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          {errors.price && <p className="error_message">Price is required!</p>}
        </div>

        <input id="login_button" type="submit" value="ADD VARIANT" />
        </form>
      </div>
    </div>
  );
};

export default VariantForm;
