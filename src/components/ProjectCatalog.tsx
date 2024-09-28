import React, { useState } from 'react';
import { List, Tag, Button } from 'antd';

interface Project {
  name: string;
  description: string;
  repository: string;
  technologies: string[];
  information: string[];
  images: { src: string; caption: string }[];
}

interface ProjectCatalogProps {
  projects: Project[];
}

const ProjectCatalog: React.FC<ProjectCatalogProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const formatInformation = (info: string) => 
    info.split(/\*(.*?)\*/g).map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );

  return (
    <List
      itemLayout="vertical"
      dataSource={projects}
      renderItem={(project, index) => (
        <List.Item
          key={index}
          style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '1rem', padding: '1.5rem' }}
        >
          <List.Item.Meta title={<h2 style={{ margin: 0 }}>{project.name}</h2>} />
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Descrição:</strong> {project.description}</p>
            <Button type="link" onClick={() => handleExpand(index)} style={{ paddingLeft: 0 }}>
              {activeIndex === index ? 'Ver menos' : 'Ver mais'}
            </Button>
          </div>
          {activeIndex === index && (
            <div>
              <p><strong>Tecnologias:</strong></p>
              <div style={{ marginBottom: '1rem' }}>
                {project.technologies.map((tech, idx) => <Tag color="blue" key={idx}>{tech}</Tag>)}
              </div>
              {project.information.length > 0 && (
                <div>
                  <p><strong>Informações Adicionais:</strong></p>
                  <ul style={{ paddingLeft: '20px' }}>
                    {project.information.map((info, idx) => (
                      <li key={idx} style={{ margin: '0.5rem 0' }}>
                        {formatInformation(info.startsWith('- ') ? info.replace('- ', '') : info)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.images.length > 0 && (
                <div>
                  <p><strong>Imagens:</strong></p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                    {project.images.map((img, idx) => (
                      <div key={idx} style={{ flex: '1 1 30%', margin: '0 10px', textAlign: 'center' }}>
                        <img src={img.src} alt={`Imagem do projeto ${project.name}`} style={{ width: '100%', height: '330px', objectFit: 'fill', borderRadius: '8px' }} />
                        <p style={{ marginTop: '0.5rem' }}>{img.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.repository && (
                <Button type="primary" href={project.repository} target="_blank" style={{ marginTop: '1rem' }}>
                  Ver Repositório
                </Button>
              )}
            </div>
          )}
        </List.Item>
      )}
    />
  );
};

export default ProjectCatalog;
