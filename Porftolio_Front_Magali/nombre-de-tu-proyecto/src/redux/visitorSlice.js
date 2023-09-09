import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",

};
export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    addVisitor: (state, action) => {
      const {name} = action.payload;
      state.name = name;
    }
  
  },
});
export const {addVisitor,allVisitor} = visitorSlice.actions
export default visitorSlice.reducer;
