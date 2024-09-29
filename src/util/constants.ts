import { Experience, Project, Activity, Course, Publication } from "./type";

export const experiences: Experience[] = [
    {
      name: 'Programa Nacional IF Mais Empreendedor 2023',
      description: [
        'Como parte de um projeto de extensão, atuei como bolsista no programa e durante 8 meses desenvolvi um sistema com o objetivo de desenvolver uma solução tecnológica para atender as necessidades diárias de uma microempreendedora local da região de Esperança/PB.',
        'A solução tecnológica se tratou de um sistema web de gerenciamento de estoque, vendas e clientes para ajudar no gerenciamento das atividades do dia a dia do negócio da cliente.',
        '- O desenvolvimento Front-end do sistema foi feito utilizando o framework React na linguagem Javascript, fazendo-se uso de bibliotecas adicionais como Axios, Redux e Ant Design.',
        '- O Back-end do sistema foi criado por meio do Headless CMS Strapi.io, tecnologia proveniente do Node.js.',
        '- O banco de dados do sistema foi feito no modelo PostgresSQL.',
      ],
      technologies: ['Javascript', 'React', 'Axios', 'Redux', 'Ant Design', 'Strapi.io', 'PostgresSQL'],
      startDate: '01/04/2023',
      endDate: '31/12/2024',
      repository: 'https://github.com/Pedroo722/Gerenciamento-de-Estoque',
    },
    {
      name: 'Projeto de Pesquisa: Estação Meteorológica',
      description: [
        'Como parte de um voluntariado para um projeto de pesquisa no IFPB. Ajudei no desenvolvimento de um dashboard web interativo para o auxílio na análise de dados meteorológicos da Paraíba.',
      ],
      technologies: ['Javascript', 'React', 'Axios', 'D3.js'],
      startDate: '01/09/2024',
      endDate: 'Em Andamento',
      repository: 'https://github.com/Pedroo722/Estacao-Meteorologica',
    },
];
  
export const projects: Project[] = [
    {
      name: 'Sistema de Ponto de Venda',
      description: 'Projeto em Java desenvolvido como parte da disciplina de Programação Orientada a Objetos, simulando um sistema de vendas.',
      repository: 'https://github.com/Pedroo722/Ponto_de_Venda_POO',
      technologies: ['Java', 'JUnit', 'Swing'],
      information: [
        'Esta aplicação foi projetada com foco na usabilidade e implementação dos conceitos de Orientação a Objeto.',
        'Inclui relatórios de vendas e gerenciamento de estoque.',
      ],
      images: [
        { src: '/images/ponto_venda/Inicial.png', caption: 'Tela Inicial' },
        { src: '/images/ponto_venda/Estoque.png', caption: 'Tela de Estoque' },
        { src: '/images/ponto_venda/Venda1.png', caption: 'Tela de Vendas' },
        { src: '/images/ponto_venda/Venda2.png', caption: 'Cadastro de Vendas' },
      ],
    },
    {
      name: 'Sistema de Gerenciamento de Hotel',
      description: 'Projeto em Java desenvolvido como parte da disciplina de Padrões de Projeto, simulando um sistema de gerenciamento de hotel fictício.',
      repository: 'https://github.com/Pedroo722/Hotel_PP',
      technologies: ['Java', 'JUnit', 'Swing', 'SQLite'],
      information: [
        'O programa foi desenvolvido em Java, com testes feitos pelo JUnit e uma interface gráfica pelo Swing.',
        'Possui gerenciamento de clientes, controle da disponibilidade e uso dos quartos, lógica de check-in/check-out, gestão de serviços adicionais de uma reserva e cálculo de custo dinâmico da estádia no hotel.',
        'Durante a programação, foram-se implementados os conceitos de SOLID e Object Calisthenics para ajudar no desenvolvimento e promoção do desacoplamento no código. Além disso, foi seguido o padrão de arquitetura MVVM (Model-View-ViewModel) para auxiliar na separação das funcionalidades das diferentes camadas da aplicação.',
        'Foi implementado vários padrões de projetos em diversas partes do código. Tais como:',
        '- *Singleton* - Usado nas classes Repository, garantindo que haja apenas uma única instância de objetos realizando a comunicação com o banco de dados.',
        '- *Builder* - Usado na lógica de instanciação dinâmico dos atributos dos quartos do hotel.',
        '- *Factory* - Usado para a pré-definição dos tipos de quartos que o hotel contém.',
        '- *Observer* - Usado para auxiliar na lógica de atualização de status das classes internas do sistema.',
        '- *Decorator* - Usado na lógica dos serviços adicionais que um hóspede pode consumir durante uma estádia no hotel.', 
        '- *Strategy* - Usado na lógica de cálculo de custo da taxa base da diária no Hotel.',
      ],
      images: [],
    },
    {
      name: 'Automação em Python: Transformador de PDF em Citação para Artigo Científico',
      description: 'Automação em Python que converte links ou arquivos PDFs recebidos em citações para artigos científicos.',
      repository: 'https://github.com/Pedroo722/pdf2cite',
      technologies: ['Python', 'PyPDF2', 'Tkinter'],
      information: [
        'Facilita a criação de referências bibliográficas de vários artigos ciéntificos de maneira rápida e fácil.',
        'Desenvolvido em Python com interface gráfica pelo Tinker.',
      ],
      images: [
          { src: '/images/pdf2cite/Inicial.png', caption: 'Estado Inicial' },
          { src: '/images/pdf2cite/PreUpload.png', caption: 'Arquivo selecionados' },
          { src: '/images/pdf2cite/PosUpload.png', caption: 'Citações criadas' },
      ],
    },
];

export const activities: Activity[] = [
    {
      title: 'Participação em Grupo de Extensão em Robótica',
      description: 'Aprendi e apliquei na prática conceitos de robótica por meio de projetos e atividades realizadas nesse grupo para a robótica educacional. Incluindo programação em C++ por meio das plataformas Arduino e Lego.',
      date: '2024',
    },
];

export const courses: Course[] = [
    {
      name: 'Rede de Computadores',
      description: 'Curso de Rede de Computadores realizado pela plataforma Huawei Talents.',
      certificate: 'https://drive.google.com/file/d/1YQF4Fgl6VyCNHaFzsy6S-UvnoygkBdiT/view?usp=drivesdk',
      issuer: 'Huawei',
      date: 'Dezembro de 2023',
    },
    {
      name: 'Programador Web',
      description: 'Curso de carga horária de 200 horas sobre desenvolvimento web, incluindo HTML, CSS e JavaScript, desenvolvimento front-end com React e desenvolvimento back-end com Node.js.',
      certificate: 'https://drive.google.com/drive/folders/1KpKsroWswmIKnbkLayFo4jglm38dJSdd',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      date: 'Maio de 2023',
    },
    {
      name: 'Administrador de Banco de Dados',
      description: 'Curso de carga horária de 200 horas sobre administração de banco de dados, linguagens SQL, incluindo MySQL, PostgreSQL, SQL Server e banco de dados NoSQL.',
      certificate: 'https://drive.google.com/drive/u/0/folders/1tx5InD_22BKkwMOV0XGnBZE6HGzgvyrm',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      date: 'Agosto de 2023',
    },
    {
      name: 'Automação de Sistemas',
      description: 'Curso de carga horária de 20 horas sobre automação de sistemas atráves de scripts usando Shell e Python.',
      certificate: 'https://drive.google.com/drive/folders/19M4Nkag7CFdOeKcK96xDCwXGoDBZP7jK',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      date: 'Agosto de 2023',
    },
    {
      name: 'Projeto de Sistemas Web',
      description: 'Curso de carga horária de 20 horas sobre organização e divisão de tarefas para desenvolvimento de sistemas de software usando metologia ágil.',
      certificate: 'https://drive.google.com/drive/folders/1d5kslgsfLFbi0iViaLAkfl1n0TZaiUO5',
      issuer: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
      date: 'Agosto de 2023',
    },
];

export const publications: Publication[] = [
  {
    title: "A PROBLEMÁTICA DOS RESÍDUOS ELETROELETRÔNICOS EM CAMPINA GRANDE - PB",
    authors: [
      "Vinicius Cavalcante Pequeno",
      "Pedro Henrique Alexandre da Rocha",
      "Thiago dos Santos Araújo",
    ],
    coordinators: [
      "Anne Karine de Queiroz Alves",
      "Lúcia de Fátima Araújo Souto Badú",
    ],
    summary: "Este artigo explora a complexa problemática dos resíduos de equipamentos eletroeletrônicos (REEE) na cidade de Campina Grande, na Paraíba. A pesquisa foi realizada por meio de uma abrangente revisão bibliográfica que abrangeu estudos publicados desde 2014, utilizando dados coletados do Google Acadêmico. Os resultados evidenciam que a solução dos desafios relacionados à gestão dos REEE em Campina Grande demanda a criação de políticas de logística reversa mais eficazes, além de investimentos robustos em infraestrutura para a coleta e o tratamento apropriados desses resíduos. A pesquisa também sugere que investigações futuras devem se concentrar nas dimensões econômicas da reciclagem e reutilização dos REEE, assim como na melhoria das práticas que visam integrar essas atividades dentro da gestão urbana. Essas ações são absolutamente essenciais para minimizar o impacto ambiental dos resíduos eletroeletrônicos e promover um manejo mais sustentável na cidade, contribuindo para uma cidade mais limpa e saudável para as futuras gerações.",
    references: [
      "ALMEIDA, I. C.; SETTE, R. S. Marketing Político: a arte e a ciência. XXXIV Encontro da Anpad, Rio de Janeiro, 2010.",
      "ALVES, F. F. de. Marketing político e eleitoral: um estudo sobre as estratégias e ferramentas necessárias para a construção de uma campanha política. Rio de Janeiro, Monografia, UFRJ, 2018.",
      "SOUZA, Raphael Salviano de. Estratégias para a revalorização de resíduos de equipamentos eletroeletrônicos no Brasil: aplicando princípios da economia circular. Dissertação de Mestrado (Pós-graduação em Administração) - Universidade de Brasília, 2023.",
      "FORTI, Vanessa; BALDÉ, Cornelis Peter; KUEHR, Ruediger; BEL, Garam. The Global E-waste Monitor, 2020.",
      "SZIGETHY, Leonardo; ANTENOR, Samuel. Resíduos sólidos urbanos no Brasil: desafios tecnológicos, políticos e econômicos, 2021.",
      "SANTOS, Dayse Hellen Pereira. Análise da importância da logística reversa no destino final do lixo eletrônico da cidade de Campina Grande-PB. Trabalho de conclusão de curso (Graduação em Administração) - Universidade Estadual da Paraíba, 2016.",
      "SANTOS, Luciana Gomes. Responsabilidade socioambiental no setor comercial: descarte de materiais elétricos/eletrônicos na cidade de Campina Grande/PB. Trabalho de conclusão de curso (Graduação em Administração) - Universidade Estadual da Paraíba, 2016.",
      "ARAÚJO, Elaine Patrícia; SANTOS, Amanda Gabriela Freitas; COSTA, Jussara Cristina Firmino da; ARAÚJO, Edcleide Maria. Estudo sobre a problemática da disposição inadequada dos resíduos eletrônicos entre educandos de uma escola municipal, 2016.",
      "MIRANDA, Willians Paulo. Responsabilidade Socioambiental no setor comercial: descarte de materiais elétricos/eletrônicos na cidade de Campina Grande/PB. Trabalho de conclusão de curso (Curso Superior de Tecnologia em Gestão Comercial) - Instituto Federal da Paraíba – Campus Guarabira, 2021.",
      "SILVA, Monica Maria Pereira; OLIVEIRA, Maria Albiege Sales. Gestão de resíduos de equipamentos eletroeletrônicos em cidade de grande porte da Paraíba, Brasil: um problema persistente, 2020.",
      "SILVA, Jorge Luiz Bezerra. Estrutura e forma de funcionamento dos postos de coleta permanentes de Resíduos de Equipamentos Eletroeletrônicos (REEE) de Campina Grande/PB. Relatório de estágio apresentado no curso de Bacharelado em Administração da Universidade Federal de Campina Grande.",
      "CASTRO, Inae; QUEIROZ, Jefferson Santos de; MORENO, João; PASCHOAL, Rhuan; BORGES, Daliana. O descarte do lixo eletrônico e seus impactos ambientais, 2021.",
      "G1. Maior parte do lixo eletrônico do Brasil é descartada irregularmente, mas poderia ser reciclada. Jornal Nacional, 2023.",
      "RESÍDUO ALL. Formas de disposição final de resíduos, 2017.",
      "GOMES, Geraldo Sérgio; ANGULAR, Einstein Lemos. Métodos de custeio aplicados na indústria de reciclagem de eletroeletrônicos (REE), 2019.",
      "ROMÃO, Débora Cristina de Freitas. Panorama da reciclagem de pilhas e baterias no Brasil e no mundo, 2020.",
      "TOKARNIA, Maria. Brasil é o quinto maior produtor de lixo eletrônico, 2021.",
      "POLÍTICA NACIONAL DE RESÍDUOS SÓLIDOS (PNRS). Lei 12.305, 2010.",
    ],
    link: "https://scholar.google.com.br/?hl=pt",
  },
];
