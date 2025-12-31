import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Componets/Navbar";
import Home from "./Management/Home";
import About from "./Management/About";
import Contact from "./Management/Contact";
import FrontPage from "./Management/FrontPage";
import Decoration from "./Management/Decoration";
import Services from "./Management/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Decoration" element={<Decoration />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
