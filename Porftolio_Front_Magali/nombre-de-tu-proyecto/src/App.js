import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";




function App() {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Especifica el tipo de contenido que estás enviando
    }}
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3001/visit",requestOptions)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }, [dispatch]);
 

 
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
