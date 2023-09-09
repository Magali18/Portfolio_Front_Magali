import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

 const postVisit = createAsyncThunk("visitor/postVisit", async (visitData) => {
    try {

        const {data} = await axios.post(
          'http://localhost:3001/visit',visitData
         );
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });
  const postVisitNull = createAsyncThunk("visitor/postVisitNull", async () => {
    try {

        const {data} = await axios.post(
          'http://localhost:3001/visit'
         );
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });

    const getVisit = createAsyncThunk("visitor/getVisit", async () => {
    try {
      
        const {data} = await axios.get(
          'http://localhost:3001/allVisit'
         );
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });
 



  export {postVisit, getVisit,postVisitNull};
   