import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const TOKEN_WPP ='EAAE8DpOkrsQBOxKD6u5ZCjGZA4d5N4Oov8vTb2V025R0i0vJ6ZBW19UIZARLLlZBQSsbS5tN91nA55reFNeWVCsW110es8BzyfmRUO5SLXCOR3h7L99bPlm9lCWpASrbK00YWZCUsyTAecSjh9zzOWc3K9YjjxW30BkQ0ysOIwJCHnLOZC2MIKZB6KxZB'

  const header = {
    headers: {
      Authorization: `Bearer ${TOKEN_WPP}`
  
    },
  };
  const dataTEmplate ={ "messaging_product": "whatsapp",
   "to": "543883371406",
    "type": "template",
     "template":
      { "name": "hello_world",
       "language": { "code": "en_US" } } };

   export const wppMessageRedux = createAsyncThunk("visitor/wppMessageRedux", async () => {


    
    try {

        const {data} = await axios.post(
  ('https://graph.facebook.com/v17.0/132405959956444/messages'),
          dataTEmplate,
          header);
        
         return data;
    
    } catch (error) {
      throw new Error(error);
    }
  });




   