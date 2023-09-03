import { useSelector } from "react-redux";
import"./Home.css"

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';

const Home = () => {
  const visitor = useSelector((state) => state.visitor);
  return (
    <div className="backgroundImage">

    <div className="containerHome">


    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab className="box" eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab className="box" eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab className="box" eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab className="box" eventKey="contact" title="Contact" >
      



    <>
      <Form.Label htmlFor="inputPassword5">Tenes alguna critica contructiva ? me encantaria saber que puedo mejorar segun tu opinion. Lo podes escribir aqui:</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
    </>



      </Tab>
    </Tabs>
  


  
      </div>
      
 
     </div>
    
    
  
  )
};
export default Home;
