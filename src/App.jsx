import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsButton from './components/WhatsButton/WhatsButton.jsx';
import AppRoutes from "./routes/index.jsx";
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Header />

      <AppRoutes />
      
      <Footer />
      <WhatsButton />
    </BrowserRouter>
  );
}