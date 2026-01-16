
import { createSlice } from "@reduxjs/toolkit";

const cartOps = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers:{},
});

export default cartOps.reducer;
