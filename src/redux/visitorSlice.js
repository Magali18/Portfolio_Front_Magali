import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mensajeState: [],
  value: "1",
  firstMensaje:''
};

export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    addVisitor: (state, action) => {
      state.name = action.payload.name;
    },
    addMensaje: (state, action) => {
      state.mensajeState = [...state.mensajeState, action.payload];
    },
    setWindowWpp: (state, action) => {
      state.value = action.payload;
    },
    setFirstMensaje:(state,action)=>{
      state.firstMensaje = action.payload
    }
  },
});
export const { addVisitor, addMensaje, setWindowWpp,setFirstMensaje } = visitorSlice.actions;
export default visitorSlice.reducer;
