import { createSlice, current } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [
      {
        name: "Product 1",
        sku: "SKU001",
        brand: "Brand A",
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
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
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
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
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
        variants: [],
      },
      {
        name: "Product 4",
        sku: "SKU004",
        brand: "Brand A",
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
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
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
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
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
        variants: [],
      },
      {
        name: "Product 7",
        sku: "SKU007",
        brand: "Brand C",
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
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
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
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
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
        variants: [],
      },
      {
        name: "Product 10",
        sku: "SKU010",
        brand: "Brand B",
        description: {
          blocks: [
            {
              key: "8i090",
              text: "Hello CodePulse!",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 16,
                  style: "BOLD",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "42ncd",
              text: "This text should be underlined.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "UNDERLINE",
                },
              ],
              entityRanges: [],
              data: {},
            },
            {
              key: "327r6",
              text: "And this text should be italic.",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [
                {
                  offset: 0,
                  length: 31,
                  style: "ITALIC",
                },
              ],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
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

      console.log(variantProduct, "gurl");

      const latestProductVariantList = variantProduct.variants.filter(
        (variant) => variant.sku !== action.payload.variantSku
      );

      variantProduct.variants = latestProductVariantList;

      console.log(productIndex, variantProduct, "^^^");

      productList.splice(productIndex, 1, variantProduct);

      state.productList = productList;
    },
    addProductVariant: (state, action) => {
      let productList = state.productList;

      const productIndex = state.productList.findIndex(
        (product) => product.sku === action.payload.productSku
      );

      let [variantProduct] = state.productList.filter(
        (product) => product.sku === action.payload.productSku
      );

      variantProduct.variants.push(action.payload.variantData);

      productList.splice(productIndex, 1, variantProduct);

      state.productList = productList;
    },
    editProduct: (state, action) => {
      let productList = state.productList;

      const productIndex = state.productList.findIndex(
        (product) => product.sku === action.payload.initialSku
      );

      productList.splice(productIndex, 1, action.payload.productData);

      state.productList = productList;
    },
    addProduct: (state, action) => {
      let productList = state.productList;

      productList.push(action.payload);

      console.log(action.payload, "<<< actionpayload");
      console.log(state.productList, "<<< asli");
      console.log(productList, "<<< terbaru");

      state.productList = productList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  deleteProduct,
  fetchProductVariants,
  deleteProductVariant,
  addProduct,
  editProduct,
  addProductVariant,
} = productSlice.actions;

export default productSlice.reducer;
