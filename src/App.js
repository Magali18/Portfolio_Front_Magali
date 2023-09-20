import "./index.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Educacion from "./views/Educacion/Educacion";
import Navbar from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef } from "react";

const App = () => {
 {/* const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fwmu3vq",
        "template_dqufk4h",
        form.current,
        "A-0VQcem-nMbwDjM6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(sendEmail, []);
*/}
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/abaut" element={<Landing />}>
        </Route>
        <Route path="/portfolio" element={<Educacion />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
