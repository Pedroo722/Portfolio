import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Extracurricular from './pages/Extracurricular';
import Academic from './pages/Academic';

const App: React.FC = () => {
  const appContentStyle: React.CSSProperties = {
    paddingTop: '3rem',
  };

  return (
    <Router>
      <NavBar />
      <div style={appContentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/publications" element={<Academic />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
