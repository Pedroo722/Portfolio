import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: '1rem',
    zIndex: 1000,
  };

  const ulStyle: React.CSSProperties = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center', 
  };

  const liStyle: React.CSSProperties = {
    margin: '0 3rem',
  };

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/experience" style={linkStyle}>Experiência</Link>
        </li>
        <li style={liStyle}>
          <Link to="/projects" style={linkStyle}>Projetos</Link>
        </li>
        <li style={liStyle}>
          <Link to="/extracurricular" style={linkStyle}>Extracurricular</Link>
        </li>
        <li style={liStyle}>
          <Link to="/publications" style={linkStyle}>Acadêmico</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;