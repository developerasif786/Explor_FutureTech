import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import News from "./component/News";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Podcast from "./component/Podcast";
import Resours from "./component/Resours";
import FooterS from "./component/FooterS";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Resours" element={<Resours />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <FooterS/>
    </>
  );
}

export default App;