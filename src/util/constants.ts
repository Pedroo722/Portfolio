import { Experience, Project, Activity, Course } from "./type";

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
    // {
    //   name: 'Projeto de Extensão Nacional em Análise de Dados 2024',
    //   description: [
    //     'Atuei em um projeto de extensão nacional que visava capacitar estudantes na análise de dados.',
    //     'Utilizamos ferramentas como Python e Excel para análise estatística e visualização de dados.',
    //   ],
    //   technologies: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
    //   startDate: '01/01/2024',
    //   endDate: '31/12/2024',
    //   repository: '',
    // },
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
      images: [
        { src: '/images/hotel1.png', caption: 'Hotel 1' },
        { src: '/images/hotel2.png', caption: 'Hotel 2' },
      ],
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
      images: [],
    },
];

export const activities: Activity[] = [
    {
      title: 'Participação em Grupo de Extensão em Robótica',
      description: 'Aprendi e apliquei na prática conceitos de robótica por meio de projetos e atividades realizadas nesse grupo para a robótica educacional. Incluindo programação em C++ por meio das plataformas Arduino e Lego.',
      date: '2023 - Presente',
    },
    // {
    //   title: 'Competição de Programação: Hackathon 2023',
    //   description: 'Desenvolvi uma aplicação para otimizar processos logísticos.',
    //   date: '2023',
    // },
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