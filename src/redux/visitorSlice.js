import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  count : 87

};
export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    addVisitor: (state, action) => {
      state.name = action.payload.name

    
     
  
    },
  
  countMas:(state,action)=>{
      state.count++;


  }  
}
});
export const {addVisitor,countMas} = visitorSlice.actions
export default visitorSlice.reducer;
