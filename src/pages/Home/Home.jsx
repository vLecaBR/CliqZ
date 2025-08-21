import Hero from "../../components/Hero/Hero.jsx";
import ServicesSection from "../../components/ServicesSection/ServicesSection.jsx";
import AboutSection from "../../components/AboutSection/AboutSection.jsx";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection.jsx";
import ContactCTA from "../../components/ContactCTA/ContactCTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
        <ServicesSection />   
        <AboutSection />    
        <ContactCTA />
    </>
  );
}
