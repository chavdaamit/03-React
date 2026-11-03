import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      name: "phone",
      qty: 1,
      price: 1000,
      category: "electronics",
    },
    {
      id: 2,
      name: "Laptop",
      qty: 2,
      price: 75000,
      category: "electronics",
    },
    {
      id: 3,
      name: "Headphones",
      qty: 5,
      price: 2500,
      category: "accessories",
    },
    {
      id: 4,
      name: "Keyboard",
      qty: 3,
      price: 1500,
      category: "accessories",
    },
    {
      id: 5,
      name: "Smart Watch",
      qty: 4,
      price: 5000,
      category: "wearables",
    },
  ],
  editVal: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    add: (state, action) => {
      const newProduct = {
        id: new Date().getTime(),
        ...action.payload,
      };

      state.products.push(newProduct);

      console.log("product list", [...state.products]);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter((l) => l.id !== action.payload);
    },

    setEditValue: (state, action) => {
      state.editVal = state.products.find((p) => p.id === action.payload);
    },

    update: (state, action) => {
      const index = state.products.findIndex((l) => l.id === action.payload.id);

      if (index !== -1) {
        state.products[index] = action.payload;
      }

      state.editVal = null;
    },
  },
});

export const { add, deleteProduct, setEditValue, update } =
  inventorySlice.actions;

export default inventorySlice.reducer;
