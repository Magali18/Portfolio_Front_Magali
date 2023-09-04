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
    const getVisit = createAsyncThunk("visitor/getVisit", async (visitData) => {
    try {
      
        const {data} = await axios.get(
          'http://localhost:3001/allVisit'
         );
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });
 



  export default postVisit;
   