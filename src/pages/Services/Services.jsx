import { ServicesContainer, ServiceBlock, ServiceSquare, ServiceContent, ServiceTitle, ServiceDesc, ServiceImpact, ServiceIcon } from "./styles.js";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaChartLine } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Desenvolvimento Web",
      desc: "Sites e aplicações modernas, responsivas e otimizadas para performance e SEO.",
      impact: [
        "Digitalize seu negócio e alcance clientes online 24/7",
        "Mostre seus produtos e serviços de forma profissional",
        "Aumenta a visibilidade em até 70% comparado a negócios sem presença online"
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: "Aplicativos Mobile",
      desc: "Apps iOS e Android com design intuitivo e alta performance.",
      impact: [
        "Ofereça serviços e produtos na palma da mão do seu cliente",
        "Melhore engajamento e fidelização de usuários",
        "Pode aumentar a retenção de clientes em até 50%"
      ]
    },
    {
      icon: <FaPaintBrush />,
      title: "Design & Branding",
      desc: "Identidade visual, UX/UI design e branding para criar experiências únicas.",
      impact: [
        "Construa uma marca forte e memorável",
        "Melhore a experiência do usuário em todos os pontos de contato",
        "Empresas com branding consistente têm até 23% mais fidelização de clientes"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Digital",
      desc: "Estratégias de marketing, SEO e campanhas que geram resultados reais.",
      impact: [
        "Atraia clientes qualificados através de campanhas inteligentes",
        "Otimize conversões e retorno sobre investimento",
        "Negócios que investem em marketing digital têm crescimento médio de 60% ao ano"
      ]
    }
  ];

  return (
    <ServicesContainer>
      {services.map((service, idx) => (
        <ServiceBlock key={idx} reverse={idx % 2 !== 0}>
          <ServiceSquare>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
          </ServiceSquare>
          <ServiceContent>
            <ServiceDesc>{service.desc}</ServiceDesc>
            <ServiceImpact>
              {service.impact.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ServiceImpact>
          </ServiceContent>
        </ServiceBlock>
      ))}
    </ServicesContainer>
  );
}
