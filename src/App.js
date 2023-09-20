import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact"
import Educacion from "./views/Educacion/Educacion";
import Navbar from "./components/Nav/Nav";
import { Route,Routes  } from "react-router-dom";


const App = () => {
 

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home />}> </Route> 
      <Route path="/abaut" element={ <Landing />}> </Route>
     
   
    <Route path="/portfolio" element={ <Educacion />}> </Route> 
    <Route path="/contact" element={<Contact/>}> </Route>
      </Routes>
    </div>
  );
};
export default App;
