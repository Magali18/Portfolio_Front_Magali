import "./App.css";
import Home from "./views/Home/Home";
import Navbar from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import React, { useEffect,useState} from "react";
import Me from './views/Me/Me'
import Message from './views/Message/Message'


const App = () => {
  const [cargando, setCargando] = useState(true);


  useEffect(() => {

    setTimeout(() => {
      setCargando(false);
    },4000);
   
  }, []);
  

  return (
    <div>
     {cargando ? (
        <Spinner/>) : (
        <div>
        
          <Navbar />
          <Routes>
            <Route path="/me" element={<Me/>} />
            <Route path="/" element={<Home />}/>
            <Route path= "/message" element={<Message/>}/>
          </Routes>
        </div>)}
    
    
     
     
    </div>
  );
};
export default App;
