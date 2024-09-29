import React, { useState } from 'react';
import { List, Tag, Button, Modal } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

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
  const [visible, setVisible] = useState<boolean>(false);
  const [currentImages, setCurrentImages] = useState<{ src: string; caption: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleExpand = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleShowGallery = (images: { src: string; caption: string }[]) => {
    setCurrentImages(images);
    setCurrentIndex(0); 
    setVisible(true);
  };

  const formatInformation = (info: string) => 
    info.split(/\*(.*?)\*/g).map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );

  const handleCloseModal = () => {
    setVisible(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <>
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
                  <div style={{ marginTop: '1rem' }}>
                    <Button type="primary" onClick={() => handleShowGallery(project.images)}>
                      Exibir Galeria
                    </Button>
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
      
      <Modal
        title="Galeria de Imagens"
        open={visible}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            type="text" 
            icon={<LeftOutlined />} 
            onClick={prevImage} 
            disabled={currentImages.length <= 1}
          />
          <div style={{ flex: 1, textAlign: 'center', padding: '0 20px' }}>
            {currentImages.length > 0 && (
              <>
                <img 
                  src={currentImages[currentIndex].src} 
                  alt={`Imagem do projeto`} 
                  style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px' }} 
                />
                <p style={{ marginTop: '0.5rem' }}>{currentImages[currentIndex].caption}</p>
              </>
            )}
          </div>
          <Button 
            type="text" 
            icon={<RightOutlined />} 
            onClick={nextImage} 
            disabled={currentImages.length <= 1}
          />
        </div>
      </Modal>
    </>
  );
};

export default ProjectCatalog;
