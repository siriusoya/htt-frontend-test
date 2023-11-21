import { createSlice, current } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [
      {
        name: "Product 1",
        sku: "SKU001",
        brand: "Brand A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit et ipsum faucibus varius.",
        variants: [
          {
            name: "Variant A1",
            sku: "VAR001",
            price: 10000,
          },
          {
            name: "Variant A2",
            sku: "VAR002",
            price: 11000,
          },
        ],
      },
      {
        name: "Product 2",
        sku: "SKU002",
        brand: "Brand B",
        description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        variants: [
          {
            name: "Variant B1",
            sku: "VAR003",
            price: 12000,
          },
        ],
      },
      {
        name: "Product 3",
        sku: "SKU003",
        brand: "Brand C",
        description:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas.",
        variants: [],
      },
      {
        name: "Product 4",
        sku: "SKU004",
        brand: "Brand A",
        description:
          "Sed nec libero sed tellus commodo condimentum. Proin vestibulum elit non urna rhoncus.",
        variants: [
          {
            name: "Variant A3",
            sku: "VAR004",
            price: 13000,
          },
          {
            name: "Variant A4",
            sku: "VAR005",
            price: 14000,
          },
        ],
      },
      {
        name: "Product 5",
        sku: "SKU005",
        brand: "Brand D",
        description:
          "Integer vel dapibus tortor, eu fermentum velit. In auctor nulla eget lorem lacinia, et.",
        variants: [
          {
            name: "Variant D1",
            sku: "VAR006",
            price: 15000,
          },
        ],
      },
      {
        name: "Product 6",
        sku: "SKU006",
        brand: "Brand B",
        description:
          "Fusce vel mauris vel neque tristique dictum. Quisque tempor semper lorem, vel tincidunt velit.",
        variants: [],
      },
      {
        name: "Product 7",
        sku: "SKU007",
        brand: "Brand C",
        description:
          "Donec in ullamcorper justo, in efficitur felis. Morbi ultricies ante ac ex commodo, sit.",
        variants: [
          {
            name: "Variant C1",
            sku: "VAR007",
            price: 16000,
          },
          {
            name: "Variant C2",
            sku: "VAR008",
            price: 17000,
          },
          {
            name: "Variant C3",
            sku: "VAR009",
            price: 18000,
          },
        ],
      },
      {
        name: "Product 8",
        sku: "SKU008",
        brand: "Brand D",
        description:
          "Etiam vitae commodo tortor, at posuere lorem. Phasellus vehicula mi nec sapien eleifend.",
        variants: [
          {
            name: "Variant D2",
            sku: "VAR010",
            price: 19000,
          },
        ],
      },
      {
        name: "Product 9",
        sku: "SKU009",
        brand: "Brand A",
        description:
          "Nam at bibendum dolor. Fusce in tempus quam. Vivamus vel eros ac felis commodo.",
        variants: [],
      },
      {
        name: "Product 10",
        sku: "SKU010",
        brand: "Brand B",
        description:
          "Curabitur tincidunt tortor vitae est dignissim, at placerat ligula congue. Nunc ullamcorper risus sed.",
        variants: [
          {
            name: "Variant B2",
            sku: "VAR011",
            price: 20000,
          },
          {
            name: "Variant B3",
            sku: "VAR012",
            price: 21000,
          },
        ],
      },
    ],
    productVariants: [],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    deleteProduct: (state, action) => {
      const latestProductList = state.productList.filter(
        (product) => product.sku !== action.payload
      );
      state.productList = latestProductList;
    },
    fetchProductVariants: (state, action) => {
      const [selectedProduct] = state.productList.filter(
        (product) => product.sku === action.payload
      );
      console.log(selectedProduct, "<<< selectedProduct dari slice");
      console.log(current(state));
      state.productVariants = selectedProduct.variants;
    },
    deleteProductVariant: (state, action) => {
      let productList = state.productList;

      const productIndex = state.productList.findIndex(
        (product) => product.sku === action.payload.productSku
      );
      let [variantProduct] = state.productList.filter(
        (product) => product.sku === action.payload.productSku
      );

        console.log(variantProduct, 'gurl')

      const latestProductVariantList = variantProduct.variants.filter(
        (variant) => variant.sku !== action.payload.variantSku
      );

      variantProduct.variants = latestProductVariantList;

      console.log(productIndex, variantProduct, '^^^')

      productList.splice(productIndex, 1, variantProduct);

      state.productList = productList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteProduct, fetchProductVariants, deleteProductVariant } =
  productSlice.actions;

export default productSlice.reducer;
