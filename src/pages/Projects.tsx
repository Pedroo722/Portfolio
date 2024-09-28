import React from 'react';
import ProjectCatalog from '../components/ProjectCatalog';

const projects = [
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

const Projects: React.FC = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Meus Projetos</h1>
      <ProjectCatalog projects={projects} />
    </div>
  );
};

export default Projects;
