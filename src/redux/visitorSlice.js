import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  count : 0

};
export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    addVisitor: (state, action) => {
      const {name} = action.payload;
      state.name = name;
    },
  
  countMas:(state,action)=>{
      state.count++;


  }  
}
});
export const {addVisitor,countMas} = visitorSlice.actions
export default visitorSlice.reducer;
