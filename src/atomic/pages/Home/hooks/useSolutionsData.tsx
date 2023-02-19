import ISolutionCard from "../interfaces/ISolutionCard";
import networkSolutionImg from "../../../../imgs/network.png";
import securityImg from "../../../../imgs/security.png";
import dataCenterImg from "../../../../imgs/data-center.png";
import applicationServicesImg from "../../../../imgs/application-services.png";
import digitalWorkflowImg from "../../../../imgs/digital-workflow.png";
import sgaImg from "../../../../imgs/sga.png";

export default function useSolutionsData(): ISolutionCard[] {
  return [
    {
      image: networkSolutionImg,
      title: "Redes",
      text: "Os desenhos das soluções oferecem alto desempenho, capacidade de expansão, uma ampla gama de recursos de conectividade, bem como todos os serviços de implementação dos projetos.",
      to: "/redes",
    },

    {
      image: securityImg,
      title: "Segurança",
      text: "Soluções que alcançam um novo nível de proteção em tempo real, fornecendo segurança proativa de antivírus baseado em IA, firewall, IPS, anti-spam, filtros de conteúdo e gerenciamento da internet.",
      to: "/seguranca",
    },

    {
      image: dataCenterImg,
      title: "Data Center",
      text: "Implementação e atualização de Data Centers, priorizamos a disponibilidade, segurança e desempenho de aplicativos, sistemas e dados, para garantir o fluxo de seu negócio com eficiência e economia.",
      to: "/data-center",
    },

    {
      image: applicationServicesImg,
      title: "Application Services",
      text: "Somos provedores de serviço de locação flexível, permitindo escolher o ativo adequado à sua necessidade, além de pacotes de instalação, operação assistida e manutenção.",
      to: "/application-services",
    },

    {
      image: digitalWorkflowImg,
      title: "Digital Workflow",
      text: "É um conjunto de estratégias, ferramentas e softwares capazes de acompanhar, monitorar e gerenciar todo o ciclo de vida dos serviços de TI de uma empresa.",
      to: "/digital-workflow",
    },

    {
      image: sgaImg,
      title: "SGA • Serviço Gerenciados Altasnet",
      text: "Contratos de suporte técnico níveis 02 e 03, elaborados para que mantenham o foco no desenvolvimento de seu negócio.",
      to: "/mssp",
    },
  ];
}
