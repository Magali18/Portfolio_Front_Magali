import "./index.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Educacion from "./views/Educacion/Educacion";
import Navbar from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";

import React, { useEffect,useState } from "react";

const App = () => {
  const [cargando, setCargando] = useState(true);


  useEffect(() => {

    setTimeout(() => {
      setCargando(false);
    },6000);
   
  }, []);

  return (
    <div>
      {cargando ? (
        <Spinner/>
  ) : (
        <div>
        
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/abaut" element={<Landing />}></Route>
            <Route path="/portfolio" element={<Educacion />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
};
export default App;
