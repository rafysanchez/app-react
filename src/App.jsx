
import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

function App() {
  const [user, setUser] = useState(() => localStorage.getItem('user') || null);
  const [active, setActive] = useState(() => localStorage.getItem('active') || 'users');

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user);
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('active', active);
  }, [active]);

  const handleLogin = (email) => {
    setUser(email);
    setActive('users');
  };

  const handleLogout = () => {
    setUser(null);
    setActive('users');
  };

  const handleNavigate = (section) => {
    setActive(section);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column" style={{minHeight: '100vh', width: '100vw', margin: 0, padding: 0}}>
      <Header user={user} onLogout={handleLogout} onNavigate={handleNavigate} active={active} />
      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center w-100" style={{margin: 0, padding: 0}}>
        {!user ? (
          <div className="w-100" style={{maxWidth: 1200, minWidth: 320}}>
            <Login onLogin={handleLogin} />
          </div>
        ) : (
          <div className="w-100" style={{maxWidth: 1200, minWidth: 320}}>
            <Body active={active} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
