import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Services from "../pages/Services/Services.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Portfolio from "../pages/Portfolio/Portfolio.jsx";
import PortfolioDetails from "../pages/PortfolioDetails/PortfolioDetails.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      //rotas da aplicação
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />

      //rotas do portfolio
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />

    </Routes>
  );
}
