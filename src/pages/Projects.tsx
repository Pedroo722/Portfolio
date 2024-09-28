import React from 'react';
import ProjectCatalog from '../components/ProjectCatalog';
import { projects } from '../util/constants';

const Projects: React.FC = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Meus Projetos</h1>
      <ProjectCatalog projects={projects} />
    </div>
  );
};

export default Projects;
