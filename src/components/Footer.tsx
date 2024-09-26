import React from 'react';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#333', 
    color: 'white', 
    padding: '40px 20px', 
    textAlign: 'center', 
    position: 'relative', 
    bottom: 0, 
    width: '100%', 
  };

  const contactContainerStyle: React.CSSProperties = {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
  };

  const contactStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center', 
    margin: '10px 0',
    justifyContent: 'flex-start', 
    width: '300px', 
  };

  const iconStyle: React.CSSProperties = {
    marginRight: '10px', 
  };

  const spanStyle: React.CSSProperties = {
    whiteSpace: 'nowrap', 
  };

  return (
    <footer style={footerStyle}>
      <h2>Contatos</h2>
      <div className="contact-links" style={contactContainerStyle}>
        <div style={contactStyle}>
          <a href="https://github.com/Pedroo722" target='_blank' rel="noopener noreferrer">
            <img 
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" 
              alt="GitHub" 
              style={iconStyle} 
            />
          </a>
          <span style={spanStyle}>Pedroo722</span>
        </div>
        <div style={contactStyle}>
          <img 
            src="https://img.shields.io/badge/Telefone-black?style=for-the-badge&logo=phone&logoColor=white" 
            alt="Telefone" 
            style={iconStyle} 
          />
          <span style={spanStyle}>(83) 99336-5817</span>
        </div>
        <div style={contactStyle}>
          <a href="https://wa.me/83993315765" target='_blank' rel="noopener noreferrer">
            <img 
              src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" 
              alt="WhatsApp" 
              style={iconStyle} 
            />
          </a>
          <span style={spanStyle}>(83) 99331-5765</span>
        </div>
        <div style={contactStyle}>
          <a href="mailto:pedrohenriquealexandre7@gmail.com" target='_blank' rel="noopener noreferrer">
            <img 
              src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" 
              alt="Email" 
              style={iconStyle} 
            />
          </a>
          <span style={spanStyle}>pedrohenriquealexandre7@gmail.com</span>
        </div>
        <div style={contactStyle}>
          <a href="https://www.linkedin.com/in/pedro-henrique-alexandre-744894274/" target='_blank' rel="noopener noreferrer">
            <img 
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" 
              alt="LinkedIn" 
              style={iconStyle} 
            />
          </a>
          <span style={spanStyle}>Pedro Henrique Alexandre</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
