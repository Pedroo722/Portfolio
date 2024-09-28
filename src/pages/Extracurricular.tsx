import React, { useState } from 'react';
import { Card, Typography, Modal, Button } from 'antd';
import { activities, courses } from '../util/constants';

const { Title } = Typography;

const Extracurricular: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const openModal = (course: any) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCourse(null);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f4f8', minHeight: '55vh' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Title level={1}>Atividades Extracurriculares</Title>
        <p style={{ marginBottom: '30px' }}>Atividades extracurriculares, como participação em grupos de extensão, competições, eventos e cursos.</p>
        {activities.map((activity, index) => (
          <div key={index} style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <small>{activity.date}</small>
          </div>
        ))}
      </div>

      <div>
        <Title level={1}>Cursos</Title>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {courses.map((course) => (
            <Card
              key={course.name}
              title={course.name}
              bordered
              hoverable
              style={{ width: 300, cursor: 'pointer' }}
              onClick={() => openModal(course)}
            >
              <p>{course.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <Modal
        title={selectedCourse?.name}
        open={modalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>Fechar</Button>,
          <Button key="download" type="primary">
            <a href={selectedCourse?.certificate} target="_blank" rel="noopener noreferrer">Visualizar Certificado</a>
          </Button>,
        ]}
      >
        <p>{selectedCourse?.description}</p>
        <p><strong>Emissor:</strong> {selectedCourse?.issuer}</p>
        <p><strong>Data da Emissão:</strong> {selectedCourse?.date}</p>
      </Modal>
    </div>
  );
};

export default Extracurricular;
