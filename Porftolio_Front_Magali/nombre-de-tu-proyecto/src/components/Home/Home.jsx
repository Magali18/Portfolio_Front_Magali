import {useSelector}  from "react-redux";
import ('./Home.css')
const Home = () => {
  const visitor = useSelector((state) => state.visitor);
  return (
    <div className="containerHome">
      <h1> Bienvenido : {visitor.name}</h1>
    </div>
  );
};
export default Home;
