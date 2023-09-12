import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='appCont'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
