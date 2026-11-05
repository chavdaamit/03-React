import { configureStore } from "@reduxjs/toolkit";

import inventorySlice from "../features/inventorySlice";

const store = configureStore({
  reducer: {
    inventory: inventorySlice,
  },
});

export default store;
