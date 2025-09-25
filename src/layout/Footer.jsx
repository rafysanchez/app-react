import React from 'react';

const Footer = () => (
  <footer className="bg-body-tertiary border-top text-center py-3 fixed-bottom" style={{background: '#f8f9fa'}}>
    <div className="container">
      <span className="text-muted">&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</span>
    </div>
  </footer>
);

export default Footer;
