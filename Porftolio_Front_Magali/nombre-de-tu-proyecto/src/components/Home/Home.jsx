import {useSelector}  from "react-redux";

import  {useDispatch}  from "react-redux";
import { addVisitor } from "../../redux/visitorSlice";
import { useEffect } from "react";

const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3001/allVisit")
      .then((res) => res.json())
      .then((data) => dispatch(addVisitor(data)))
      .then((data) =>  console.log(data.payload[0].name))
      .catch((err) => console.log(err));
  }, [dispatch]);
 
  const visitor = useSelector((state) => state.visitor);
  return (
    <div>
      <h1>Hola! Bienvenido : {visitor.name}</h1>
    </div>
  );
};
export default Home;
