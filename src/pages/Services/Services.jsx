import { useRef, useEffect, useState } from "react";
import {
  ServicesContainer,
  ServiceBlock,
  ServiceSquare,
  ServiceContent,
  ServiceTitle,
  ServiceDesc,
  ServiceImpact,
  ServiceIcon,
  ChartWrapper,
} from "./styles.js";

import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaChartLine } from "react-icons/fa";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Desenvolvimento Web",
      desc: "Sites e aplicações modernas, responsivas e otimizadas para performance e SEO.",
      impact: [
        "Digitalize seu negócio e alcance clientes online 24/7",
        "Mostre seus produtos e serviços de forma profissional",
        "Aumenta a visibilidade em até 70%"
      ],
      data: [
        { name: "Visibilidade", value: 70 },
        { name: "Conversão", value: 50 },
        { name: "Performance", value: 80 }
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: "Aplicativos Mobile",
      desc: "Apps iOS e Android com design intuitivo e alta performance.",
      impact: [
        "Ofereça serviços e produtos na palma da mão do seu cliente",
        "Melhore engajamento e fidelização de usuários",
        "Pode aumentar a retenção em até 50%"
      ],
      data: [
        { name: "Retenção", value: 50 },
        { name: "Engajamento", value: 65 },
        { name: "Experiência", value: 90 }
      ]
    },
    {
      icon: <FaPaintBrush />,
      title: "Design & Branding",
      desc: "Identidade visual, UX/UI design e branding para criar experiências únicas.",
      impact: [
        "Construa uma marca forte e memorável",
        "Melhore a experiência do usuário em todos os pontos de contato",
        "Branding consistente gera até 23% mais fidelização"
      ],
      data: [
        { name: "Fidelização", value: 23 },
        { name: "Experiência", value: 80 },
        { name: "Força da Marca", value: 75 }
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Digital",
      desc: "Estratégias de marketing, SEO e campanhas que geram resultados reais.",
      impact: [
        "Atraia clientes qualificados através de campanhas inteligentes",
        "Otimize conversões e ROI",
        "Crescimento médio de 60% ao ano"
      ],
      data: [
        { name: "ROI", value: 70 },
        { name: "Conversão", value: 60 },
        { name: "Crescimento", value: 60 }
      ]
    }
  ];

  const [visibleBlocks, setVisibleBlocks] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleBlocks((prev) => [...prev, idx]);
            observer.unobserve(ref);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
    });
  }, []);

  return (
    <ServicesContainer>
      {services.map((service, idx) => (
        <ServiceBlock
          key={idx}
          reverse={idx % 2 !== 0}
          ref={(el) => (refs.current[idx] = el)}
          animate={visibleBlocks.includes(idx)}
        >
          <ServiceSquare>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
          </ServiceSquare>
          <ServiceContent>
            <ServiceDesc>{service.desc}</ServiceDesc>
            <ServiceImpact>
              {service.impact.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ServiceImpact>
            <ChartWrapper>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={service.data}>
                  <XAxis dataKey="name" stroke="#fff" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#7c3aed" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartWrapper>
          </ServiceContent>
        </ServiceBlock>
      ))}
    </ServicesContainer>
  );
}
