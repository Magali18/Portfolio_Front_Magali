import {useSelector} from 'react-redux'

const Home = () => {
  const visitor = useSelector((state)=> state.visitor)
  return (
    <div>
      <h1>Hola! Bienvenido : {visitor.name} </h1>
    </div>
  );
};
export default Home;
