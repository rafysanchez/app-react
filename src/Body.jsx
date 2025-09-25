import React from 'react';
import Usuarios from './Usuarios';
import Produtos from './Produtos';
import Documentos from './Documentos';
import Contato from './Contato';
import SobreNos from './SobreNos';

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
