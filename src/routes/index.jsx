import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Services from "../pages/Services/Services.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Portfolio from "../pages/Portfolio/Portfolio.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
