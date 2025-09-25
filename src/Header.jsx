import React from 'react';


const headerStyle = {
  background: '#183153', // azul escuro suave
  color: '#fff',
};

const linkBase = 'nav-link btn btn-link px-2';
const linkActive = 'fw-bold text-warning';
const linkInactive = 'text-light';

const Header = ({ user, onLogout, onNavigate, active }) => (
  <header className="navbar navbar-expand-lg border-bottom shadow-sm fixed-top" style={headerStyle}>
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">
        <span className="fw-bold">LOGO</span>
      </a>
      <nav className="navbar-nav flex-row gap-2">
        <button className={`${linkBase} ${active==='usuarios'?linkActive:linkInactive}`} onClick={()=>onNavigate('usuarios')}>Usuários</button>
        <button className={`${linkBase} ${active==='produtos'?linkActive:linkInactive}`} onClick={()=>onNavigate('produtos')}>Produtos</button>
        <button className={`${linkBase} ${active==='documentos'?linkActive:linkInactive}`} onClick={()=>onNavigate('documentos')}>Documentos</button>
        <button className={`${linkBase} ${active==='contato'?linkActive:linkInactive}`} onClick={()=>onNavigate('contato')}>Contato</button>
        <button className={`${linkBase} ${active==='sobre-nos'?linkActive:linkInactive}`} onClick={()=>onNavigate('sobre-nos')}>Sobre-nós</button>
      </nav>
      <div className="d-flex align-items-center gap-2 ms-auto">
        <span className="text-light small">{user}</span>
        <button className="btn btn-outline-warning btn-sm" onClick={onLogout}>Sair</button>
      </div>
    </div>
  </header>
);

export default Header;
