import React from 'react';
import { t } from '../shared/i18n';

const headerStyle = {
  background: '#183153', // soft dark blue
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
        <button className={`${linkBase} ${active==='users'?linkActive:linkInactive}`} onClick={()=>onNavigate('users')}>{t('nav.users')}</button>
        <button className={`${linkBase} ${active==='products'?linkActive:linkInactive}`} onClick={()=>onNavigate('products')}>{t('nav.products')}</button>
        <button className={`${linkBase} ${active==='documents'?linkActive:linkInactive}`} onClick={()=>onNavigate('documents')}>{t('nav.documents')}</button>
        <button className={`${linkBase} ${active==='contact'?linkActive:linkInactive}`} onClick={()=>onNavigate('contact')}>{t('nav.contact')}</button>
        <button className={`${linkBase} ${active==='about-us'?linkActive:linkInactive}`} onClick={()=>onNavigate('about-us')}>{t('nav.aboutUs')}</button>
      </nav>
      <div className="d-flex align-items-center gap-2 ms-auto">
        <span className="text-light small">{user}</span>
        <button className="btn btn-outline-warning btn-sm" onClick={onLogout}>{t('nav.signOut')}</button>
      </div>
    </div>
  </header>
);

export default Header;
