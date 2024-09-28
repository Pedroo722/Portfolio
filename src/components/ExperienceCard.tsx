import React from 'react';

interface ExperienceCardProps {
  experience: {
    name: string;
    description: string[];
    technologies: string[];
    startDate: string;
    endDate: string;
    repository?: string;
  };
  expanded: boolean;
  onToggle: () => void;
  techIcons: { [key: string]: JSX.Element | null }; 
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, expanded, onToggle, techIcons }) => {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div
        onClick={onToggle}
        style={{
          padding: '1rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          transition: '0.3s',
        }}
      >
        <h3 style={{ margin: 0 }}>{experience.name}</h3>
        {expanded && (
          <div>
            {experience.description.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
                {point.startsWith('-') && (
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#2980b9',
                      marginRight: '0.5rem',
                    }}
                  ></div>
                )}
                <p style={{ margin: 0 }}>{point.replace(/^- /, '')}</p>
              </div>
            ))}
            {experience.repository && (
              <div style={{ margin: '1rem 0' }}>
                <strong>Repositório:</strong>
                <p>
                  <a
                    href={experience.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#2980b9', textDecoration: 'underline' }}
                  >
                    {experience.repository}
                  </a>
                </p>
              </div>
            )}
            <div style={{ margin: '1rem 0' }}>
              <strong>Tecnologias:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {experience.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#e7f1ff',
                      borderRadius: '4px',
                      padding: '0.5rem 1rem',
                      margin: '0.25rem',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {techIcons[tech] && <span style={{ marginRight: '0.5rem' }}>{techIcons[tech]}</span>}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <p><strong>Início:</strong> {experience.startDate}</p>
            <p><strong>Fim:</strong> {experience.endDate}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;