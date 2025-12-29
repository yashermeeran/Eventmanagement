import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Componets/Navbar";
import Home from "./Management/Home";
import About from "./Management/About";
import Service from "./Management/Service";
import Contact from "./Management/Contact";
import FrontPage from "./Management/FrontPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
