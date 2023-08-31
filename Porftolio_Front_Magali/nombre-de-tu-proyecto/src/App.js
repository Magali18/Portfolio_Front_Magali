import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
