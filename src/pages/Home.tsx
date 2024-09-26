import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; 

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 420) {
        navigate('/experience');
        window.scrollTo(0, 0); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <section id="welcome-section">
        <div className="welcome-content">
          <h1>Bem-vindo ao meu Portfolio</h1>
          <section className="about">
            <h2>Sobre Mim:</h2>
            <p>Olá, eu sou Pedro, um estudante apaixonado por tecnologia e programação.</p>
            <p>Atualmente cursando Análise e Desenvolvimento de Sistemas no IFPB- Campus Esperança.</p>
            <p>Almeijo me tornar um desenvolver de software.</p>
        </section>

          <section className="tecnologies">
            <h2>Minhas principais tecnologias incluem:</h2>
            <div style={{ textAlign: 'center' }}>
              <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" title="Javascript" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" title="HTML" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" title="CSS" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" title="Python" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript" title="Typescript" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" title="React" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" title="Node.js" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" width="40" title="Git" height="40" />
              <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VSCode" title="VSCode" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/mysql.png" alt="MySQL" title="MySQL" width="40" height="40" />
              <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="PostgreSQL" title="PostgreSQL" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" title="MongoDB" width="40" height="40" />
              <img src="https://img.icons8.com/color/48/000000/npm.png" alt="NPM" title="npm" width="40" height="40" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Home;
