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

import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Desenvolvimento Web",
      desc: "Construímos sites e aplicações web modernas, seguras e escaláveis. Nosso foco é criar experiências digitais rápidas, responsivas e otimizadas para SEO, ajudando sua empresa a se destacar e converter mais clientes.",
      impact: [
        "Digitalize seu negócio e alcance clientes online 24/7.",
        "Sites responsivos que funcionam em qualquer dispositivo.",
        "Performance otimizada aumenta engajamento e tempo de navegação.",
        "SEO estruturado para aparecer no topo do Google.",
      ],
      data: [
        { name: "Visibilidade", value: 85 },
        { name: "Conversão", value: 65 },
        { name: "Performance", value: 90 },
      ],
    },
    {
      icon: <FaPaintBrush />,
      title: "Design & Branding",
      desc: "Sua marca é a identidade do seu negócio. Criamos logotipos, identidades visuais, UX/UI design e materiais que transmitem profissionalismo e criam conexão emocional com seu público.",
      impact: [
        "Construa uma marca forte e memorável.",
        "Design de interfaces que melhoram a experiência do usuário.",
        "Materiais gráficos consistentes para redes sociais e impressos.",
        "Branding sólido gera mais reconhecimento e fidelização.",
      ],
      data: [
        { name: "Fidelização", value: 40 },
        { name: "Experiência", value: 85 },
        { name: "Força da Marca", value: 80 },
      ],
    },
    {
      icon: <FaRobot />, // pode usar outro ícone do react-icons se preferir
      title: "Automação Inteligente",
      desc: "Ajudamos sua empresa a ganhar tempo e eficiência criando fluxos automatizados. Desde aprovações que disparam e-mails até bots no WhatsApp que respondem clientes, nossas soluções eliminam tarefas manuais e aceleram seus resultados.",
      impact: [
        "Fluxos de aprovação automáticos com notificações instantâneas.",
        "Bots no WhatsApp para responder clientes 24/7.",
        "Integrações entre sistemas que reduzem retrabalho.",
        "Automação de e-mails e campanhas para maior alcance.",
      ],
      data: [
        { name: "Eficiência", value: 90 },
        { name: "Tempo", value: 80 },
        { name: "Satisfação", value: 85 },
      ],
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Digital",
      desc: "Planejamos e executamos estratégias digitais que trazem resultados reais. Desde campanhas de tráfego pago até SEO e automação de marketing, ajudamos sua empresa a conquistar clientes qualificados e aumentar o faturamento.",
      impact: [
        "Campanhas inteligentes para atrair clientes prontos para comprar.",
        "Otimização de funis de vendas e conversões.",
        "SEO técnico para ranquear sua empresa organicamente.",
        "Relatórios claros e métricas de performance em tempo real.",
      ],
      data: [
        { name: "ROI", value: 80 },
        { name: "Conversão", value: 70 },
        { name: "Crescimento", value: 65 },
      ],
    },
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
                  <Bar
                    dataKey="value"
                    fill="#7c3aed"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartWrapper>
          </ServiceContent>
        </ServiceBlock>
      ))}
    </ServicesContainer>
  );
}
