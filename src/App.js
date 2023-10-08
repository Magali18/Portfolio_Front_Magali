import "./App.css";
import Home from "./views/Home/Home";
import Navbar from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import React, { useEffect,useState} from "react";


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
            <Route path="/" element={<Home />}></Route>
          
          </Routes>
        </div>)}
    
    
     
     
    </div>
  );
};
export default App;
