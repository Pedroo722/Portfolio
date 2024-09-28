import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; 

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    navigate('/experience');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <section id="welcome-section">
        <div className="welcome-content">
          <h1>Bem-vindo ao meu Portfolio</h1>
          <section className="about">
            <h2>Sobre Mim:</h2>
            <p>Olá, eu sou Pedro, um estudante apaixonado por tecnologia e programação.</p>
            <p>Atualmente cursando Análise e Desenvolvimento de Sistemas no IFPB - Campus Esperança.</p>
            <p>Almejo me tornar um desenvolvedor de software.</p>
          </section>

          <section className="tecnologies">
            <h2>Minhas principais tecnologias incluem:</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" title="Javascript" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" title="HTML" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" title="CSS" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" title="Python" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript" title="Typescript" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" title="React" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" title="Node.js" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" title="Git" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VSCode" title="VSCode" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/mysql.png" alt="MySQL" title="MySQL" width="40" height="40" />
              <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="PostgreSQL" title="PostgreSQL" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" title="MongoDB" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/npm.png" alt="NPM" title="npm" width="40" height="40" />
            </div>
          </section>
        </div>
      </section>

      <div
        className="experience-popup"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        {showPopup && (
          <div className="popup-text" style={{ marginRight: '10px' }}>
            Ir para Experiências
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
          className="arrow-icon"
        >
          <path d="M8 5v14l11-7z" /> 
        </svg>
      </div>
    </div>
  );
};

export default Home;
