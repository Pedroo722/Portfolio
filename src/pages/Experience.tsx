import React, { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { techIcons } from '../util/techIcons';
import '../styles/Experience.css';
import { experiences } from '../util/constants';

const Experience: React.FC = () => {
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
