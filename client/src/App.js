import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
