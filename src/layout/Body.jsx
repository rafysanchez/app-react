import React from 'react';
import Usuarios from '../pages/Usuarios';
import Produtos from '../pages/Produtos';
import Documentos from '../pages/Documentos';
import Contato from '../pages/Contato';
import SobreNos from '../pages/SobreNos';

const Body = ({ active }) => {
  return (
    <main className="container" style={{paddingTop: 80, paddingBottom: 60}}>
      {active === 'usuarios' && <Usuarios />}
      {active === 'produtos' && <Produtos />}
      {active === 'documentos' && <Documentos />}
      {active === 'contato' && <Contato />}
      {active === 'sobre-nos' && <SobreNos />}
    </main>
  );
};

export default Body;
