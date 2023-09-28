import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mensajeState:[]
};

export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    addVisitor: (state, action) => {
      state.name = action.payload.name   
    },
    addMensaje: (state, action) => {
      state.mensajeState = [...state.mensajeState, action.payload];    },
  
}
});
export const {addVisitor,addMensaje} = visitorSlice.actions
export default visitorSlice.reducer;
