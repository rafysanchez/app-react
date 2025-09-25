
import React from 'react';
import PieChart from '../components/PieChart';

const produtos = [
  { nome: 'Notebook', percentual: 30 },
  { nome: 'Pen', percentual: 25 },
  { nome: 'Pencil', percentual: 20 },
  { nome: 'Eraser', percentual: 15 },
  { nome: 'Sharpener', percentual: 10 },
];

const cores = [
  '#4e79a7',
  '#f28e2b',
  '#e15759',
  '#76b7b2',
  '#59a14f',
];

const Produtos = () => (
  <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div className="bg-white rounded shadow p-4 d-flex flex-wrap align-items-center justify-content-center gap-4" style={{minWidth: 600, maxWidth: 900}}>
      <div>
        <h2 className="mb-4 text-center">Stationery Products</h2>
        <table className="table table-bordered align-middle text-center mb-0" style={{minWidth: 320}}>
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Sales Percentage</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p, i) => (
              <tr key={p.nome}>
                <td>{p.nome}</td>
                <td>{p.percentual}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h5 className="mb-3">Sales Distribution</h5>
        <PieChart
          labels={produtos.map(p => p.nome)}
          data={produtos.map(p => p.percentual)}
          colors={cores}
        />
      </div>
    </div>
  </div>
);

export default Produtos;
