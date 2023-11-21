import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../store/slices/product'
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import {
  Editor,
  initialStyleMap,
  isBold,
  isItalic,
  isUnderline,
  toggleBold,
  toggleItalic,
  toggleUnderline,
} from "contenido";
import "draft-js/dist/Draft.css";

import VariantForm from "../components/VariantForm";
import VariantName from "../components/VariantName";

const buttons = [
  { title: "Bold", handler: toggleBold, checker: isBold },
  { title: "Italic", handler: toggleItalic, checker: isItalic },
  { title: "Underline", handler: toggleUnderline, checker: isUnderline },
];

const AddProduct = () => {
  const dispatch = useDispatch()

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showModal, setShowModal] = useState(false);
  const [productVariants, setProductVariants] = useState([])

  const contentState = editorState;
  const editorStateShow = EditorState.createWithContent(
    contentState.getCurrentContent()
  );

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log('submit dong :(((')
    console.log(data);
    console.log(editorState, "<<<");
    const contentState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));

    const rawContentState = convertToRaw(contentState);

    const addProductPayload = {
      name: data.name,
      sku: data.sku,
      brand: data.brand,
      description: rawContentState,
      variants: productVariants,
    }

    dispatch(addProduct(addProductPayload))

    navigate('/');
  };

  

  function handleShowModal() {
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  function handleAddVariant(data) {
    console.log('add ketrigger')
    let copyVariants = productVariants;
    copyVariants.push(data)
    setProductVariants(copyVariants)
    setShowModal(false)
  }

  function handleDeleteVariant(payload) {
    console.log(payload, 'delete ketrigger')
    const latestVariantList = productVariants.filter(
      (variant) => variant.sku !== payload
    );

    setProductVariants(latestVariantList)
  }

  return (
    <div className="home_container">
      <h2 className="page_title">Add New Product</h2>

      <div id="product_form">
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
          <p className="product_label">Brand</p>
          <select className="form_input" name="Brand" {...register("brand")}>
            <option disabled selected hidden value="">
              -- Select Brand --
            </option>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
            <option value="Brand D">Brand D</option>
          </select>
        </div>

        <div className="input_container">
          <p className="product_label">Description</p>
          <div className="wysiwyg_button_container">
            {buttons.map((button) => (
              <button
                key={button.title}
                style={{
                  minWidth: "2rem",
                  padding: "0.5rem",
                  margin: "0 4.5px",
                  backgroundColor: button.checker(editorState)
                    ? "#372549"
                    : "rgba(125, 125, 125, 0.25)",
                  color: button.checker(editorState) ? "#fff" : "inherit",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  button.handler(editorState, setEditorState);
                }}
              >
                {button.title}
              </button>
            ))}
          </div>
          <div
            style={{
              border: "1px solid black",
              minHeight: "6em",
              cursor: "text",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              customStyleMap={initialStyleMap}
              placeholder="Write the product description..."
            />
          </div>
        </div>

        <div className="input_container">
          {showModal && <VariantForm handleAddVariant={handleAddVariant} handleCloseModal={handleCloseModal} />}

          <p className="product_label">Variants</p>
          <button 
          onClick={handleShowModal}
          className="add_variant_form_button">Add Product Variant</button>

          
        </div>

        {productVariants.map((variant) => {
          return (
            <VariantName key={variant.sku} variant={variant} handleDeleteVariant={handleDeleteVariant} />
          )
        })}

        {/* <Editor editorState={editorStateShow} readOnly={true} /> */}

        <button onClick={handleSubmit(onSubmit)} id="form_button">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
