import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postVisit = createAsyncThunk("visitor/postVisit", async (visitData) => {
    try {

        const {data} = await axios.post(
          'http://localhost:3001/visit',visitData
         );
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });
  export const postVisitNull = createAsyncThunk("visitor/postVisitNull", async () => {
    try {

        const {data} = await axios.post(
          'http://localhost:3001/visit'
         );
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });

    export const getVisit = createAsyncThunk("visitor/getVisit", async () => {
    try {
      
        const {data} = await axios.get(
          'http://localhost:3001/allVisit'
         );
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });
 
   export const wppMessageRedux = createAsyncThunk("visitor/wppMessageRedux", async (mensaje) => {
    console.log(typeof mensaje); 
    console.log(mensaje)

    if(!mensaje)console.log('en ReduxHnadler la data esta vacia')
    try {

        const {data} = await axios.post(
'https://portfolio-back-magali-git-magalisj-magali18s-projects.vercel.app/postWpp',
mensaje);
        
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });




   