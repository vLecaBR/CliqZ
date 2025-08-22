import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Services from './pages/Services/Services.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Contact from './pages/Contact/Contact.jsx';
import WhatsButton from './components/WhatsButton/WhatsButton.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsButton />
    </>
  );
}
