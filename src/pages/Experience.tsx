import React, { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiPostgresql, SiStrapi, SiAntdesign, SiAxios, SiD3Dotjs } from 'react-icons/si';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  const experiences = [
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

  const techIcons: { [key: string]: JSX.Element | null } = {
    Javascript: <SiJavascript />,
    React: <FaReact />,
    Redux: <SiRedux />,
    Axios: <SiAxios />,
    'Ant Design': <SiAntdesign />,
    'D3.js': <SiD3Dotjs />,
    'Strapi.io': <SiStrapi />,
    PostgresSQL: <SiPostgresql />,
    Python: <FaPython />,
  };

  const groupedExperiences = experiences.reduce((acc, experience) => {
    const year = experience.startDate.split('/')[2];
    if (!acc[year]) acc[year] = [];
    acc[year].push(experience);
    return acc;
  }, {} as { [year: string]: typeof experiences });

  const [expandedYears, setExpandedYears] = useState<{ [year: string]: boolean }>({});
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleYear = (year: string) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div style={{ display: 'flex', padding: '2rem', backgroundColor: '#f0f4f8', minHeight: '55vh' }}>
      <div style={{ width: '30%', paddingRight: '2rem' }}>
        <h1>Minhas Experiências</h1>
        <Timeline>
          {Object.keys(groupedExperiences).map((year) => (
            <TimelineItem key={year}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span 
                    style={{ fontWeight: 'bold', cursor: 'pointer' }} 
                    onClick={() => toggleYear(year)} 
                  >
                    {year} {expandedYears[year] ? <UpOutlined /> : <DownOutlined />} 
                  </span>
                </div>
                <div style={{ width: '1500px' }}>
                  {groupedExperiences[year].map((experience, index) => {
                    const itemKey = `${year}-${index}`;
                    return (
                      <div key={itemKey} onClick={() => toggleItem(itemKey)} style={{ cursor: 'pointer' }}>
                        <ExperienceCard
                          experience={experience}
                          expanded={expandedYears[year] || expandedItems[itemKey] || false}
                          onToggle={() => {}}
                          techIcons={techIcons}
                        />
                      </div>
                    );
                  })}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
