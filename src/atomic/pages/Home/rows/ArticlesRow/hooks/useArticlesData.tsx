import IArticle from "../interfaces/IArticle";
import unimedArticleImg from "../../../../../../imgs/unimed-article-img.jpg";
import cenibraArticleImg from "../../../../../../imgs/cenibra-article-img.jpg";
import f5ArticleImg from "../../../../../../imgs/f5-article-img.jpeg";

export default function useArticlesData(): IArticle[] {
  return [
    {
      companyName: "UNIMED",
      title: `A Unimed Belo Horizonte se prepara para a liderança no setor de saúde da próxima geração.`,
      linkTo: `/estudo-de-caso-unimed`,
      text: `A Unimed-BH, uma empresa provedora e operadora de planos de saúde brasileira, precisava fazer o upgrade de sua infraestrutura de TI para acompanhar o crescimento dos negócios e liberar a equipe de TI para estimular a criação de novas soluções inovadoras para o setor da saúde.

      O HPE Synergy supera os concorrentes em desempenho, capacidade de expansão, flexibilidade e segurança. Por fim, a Unimed BH atualizou seu conjunto de blades HPE existente com mais de 500 servidores virtuais HPE Synergy, que agora sustentam a maioria de seus aplicativos online e permitem interações fundamentais com seu 1,2 milhão de clientes, médicos cooperados e toda a cadeia de provedores de serviços de saúde.
      
      O HPE Synergy ajuda a TI a deixar de apenas dar suporte ao crescimento dos negócios e começar a promovê-lo
      
      Os negócios na Unimed BH estão expandindo em ritmo acelerado, e sua equipe de TI estava trabalhando muitas horas para acompanhá-lo. A integração das novas instalações médicas da empresa e o suporte de outras necessidades dos negócios estava consumindo a maior parte dos recursos. Mas, eles queriam mudar o foco para desenvolver novas soluções em tecnologia, fazendo os negócios crescerem ainda mais. Além de melhorar o desempenho geral da TI, o upgrade da infraestrutura de TI para o HPE Synergy também permitiu promover resultados comerciais, em vez de apenas atender às necessidades dos negócios.`,
      image: unimedArticleImg,
      amountOfLikes: 1,
    },
    {
      companyName: "CENIBRA",
      title: `CENIBRA garante eficiência energética e operação ininterrupta aos sistemas de TI de sua fábrica.`,
      linkTo: `/cenibra`,
      text: `O site principal da CENIBRA possui um data center bem desenvolvido e estruturado, de acordo com as normas para o ambiente crítico de TI. Entretanto ela precisava de um segundo site de disaster recovery, a fim de garantir a disponibilidade das aplicações críticas SAP. A Altasnet em parceria com a Schneider Electric, superaram as expectativas de segurança e conectividade.`,
      image: cenibraArticleImg,
      amountOfLikes: 1,
    },

    {
      companyName: "f5",
      title: `Pare o phishing e elimine a infiltração e comunicação criptografadas`,
      linkTo: `/pare-o-phishing-e-elimine-a-infiltracao-e-comunicacao-criptografadas`,
      text: `Por: Jay Kelley

      Era uma vez, os ataques de phishing e spearphishing só surgiam em épocas específicas do ano, como feriados importantes como o Natal ou o Ano Novo Chinês, feriados prontos para o consumidor, como o Dia dos Namorados ou Festival das Lanternas na China, ou em eventos de compras para consumidores como a Black Friday ou Cyber segunda-feira nos Estados Unidos, Boxing Day (26 de Dezembro) no Reino Unido e da Commonwealth of Nations, ou escolhe o dia (11 de novembro) na Ásia.
      
      Os invasores então descobriram que poderiam alavancar o FUD - medo, incerteza e dúvida - impulsionado por desastres naturais e provocados pelo homem, guerras, doenças, eleições ou qualquer evento que impulsione o ciclo de notícias de hoje para semear suas sementes maliciosas.
      
      No Reino Unido, o Information Commissioner's Office (ICO) indicou que o phishing foi a principal causa de violações relacionadas à Internet de abril de 2019 a março de 2020. O Office of the Australian Information Commissioner (OAIC) ​​mostrou que o phishing foi responsável por 36% de todos os casos relatado a eles, no topo de sua lista.
      
      Para esse fim, os ataques de phishing e spearphishing aumentaram drasticamente ao longo de 2020, impulsionados pela ameaça de uma pandemia mundial, nações em quarentena ou bloqueio, trabalhadores que precisam trabalhar em casa e até mesmo eleições contenciosas nos EUA e em outras nações. Até mesmo o anúncio de vacinas para lidar com o COVID-19 estando pronto está sendo aproveitado para motivar até mesmo pessoas desconfiadas a abrir e-mails de fontes desconhecidas - ou mesmo de fontes conhecidas que podem ter suas contas violadas e sequestradas - para então espalhar malware e outros vetores de ataque malicioso e roubar informações corporativas e de usuários ou permitir o acesso ilícito a redes, nuvens, aplicativos e dados confidenciais.
      
      Um dos motivos mais citados para a recente explosão de ataques de phishing foi o trabalho de encomendas domiciliares precipitado pela pandemia de COVID-19. Muitos funcionários, contratados e outros membros da equipe foram forçados a trabalhar em casa ou remotamente e isso atraiu rapidamente a atenção indesejada dos invasores. Eles entenderam que há uma grande probabilidade de que as pessoas que trabalham remotamente fiquem sob pressão cada vez maior, baixem a guarda e comecem a clicar em links de quase todos os e-mails, mesmo aqueles que normalmente podem levantar suspeitas. Eles também sabem que aqueles que trabalham em casa podem estar usando produtos BYOD que não terão as ferramentas normalmente usadas pelas organizações para protegê-los de ataques como phishing. Os invasores e hackers também acreditam que os trabalhadores domiciliares podem não ter largura de banda suficiente para manter o software de segurança em execução ou atualizado, e pode desligar ou perder atualizações de seu software de segurança. Muitas vezes, eles estão certos.`,
      image: f5ArticleImg,
      amountOfLikes: 0,
    },
  ];
}
