import React from 'react';
import Users from '../pages/Users';
import Products from '../pages/Products';
import Documents from '../pages/Documents';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';

const Body = ({ active }) => {
  return (
    <main className="container" style={{paddingTop: 80, paddingBottom: 60}}>
      {active === 'users' && <Users />}
      {active === 'products' && <Products />}
      {active === 'documents' && <Documents />}
      {active === 'contact' && <Contact />}
      {active === 'about-us' && <AboutUs />}
    </main>
  );
};

export default Body;
