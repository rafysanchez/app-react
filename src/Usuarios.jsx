import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const tipos = [
  { value: 'adm', label: 'Administrador' },
  { value: 'operador', label: 'Operador' },
];

const usuariosDemo = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com', idade: 30, ativo: true, tipo: 'adm' },
  { id: 2, nome: 'Maria Souza', email: 'maria@email.com', idade: 25, ativo: false, tipo: 'operador' },
  { id: 3, nome: 'Carlos Lima', email: 'carlos@email.com', idade: 40, ativo: true, tipo: 'adm' },
  { id: 4, nome: 'Ana Paula', email: 'ana@email.com', idade: 28, ativo: true, tipo: 'operador' },
  { id: 5, nome: 'Pedro Santos', email: 'pedro@email.com', idade: 35, ativo: false, tipo: 'operador' },
  { id: 6, nome: 'Julia Costa', email: 'julia@email.com', idade: 22, ativo: true, tipo: 'adm' },
  { id: 7, nome: 'Rafael Alves', email: 'rafael@email.com', idade: 31, ativo: true, tipo: 'operador' },
  { id: 8, nome: 'Fernanda Dias', email: 'fernanda@email.com', idade: 27, ativo: false, tipo: 'adm' },
  { id: 9, nome: 'Lucas Rocha', email: 'lucas@email.com', idade: 29, ativo: true, tipo: 'operador' },
  { id: 10, nome: 'Patricia Melo', email: 'patricia@email.com', idade: 33, ativo: true, tipo: 'adm' },
];

const pageSize = 5;

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState(usuariosDemo);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({ col: null, dir: 'asc' });

  const totalPages = Math.ceil(usuarios.length / pageSize);
  const filtered = usuarios.filter(u =>
    u.nome.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenação funcional
  const sorted = React.useMemo(() => {
    if (!sort.col) return filtered;
    const sortedArr = [...filtered].sort((a, b) => {
      let vA = a[sort.col], vB = b[sort.col];
      if (sort.col === 'nome' || sort.col === 'email' || sort.col === 'tipo') {
        vA = String(vA).toLowerCase();
        vB = String(vB).toLowerCase();
      }
      if (vA < vB) return sort.dir === 'asc' ? -1 : 1;
      if (vA > vB) return sort.dir === 'asc' ? 1 : -1;
      return 0;
    });
    return sortedArr;
  }, [filtered, sort]);

  const paginated = sorted.slice((page-1)*pageSize, page*pageSize);
  const filteredTotalPages = Math.ceil(filtered.length / pageSize);

  const handleSort = (col) => {
    setSort(s => ({
      col,
      dir: s.col === col ? (s.dir === 'asc' ? 'desc' : 'asc') : 'asc',
    }));
  };

  const handleEdit = (user) => {
    setEditUser(user ? { ...user } : { nome: '', email: '', idade: 18, ativo: true, tipo: 'operador' });
    setShowModal(true);
  };

  const handleDelete = (user) => {
    setDeleteUser(user);
    setShowDelete(true);
  };

  const handleSave = () => {
    if (editUser.id) {
      setUsuarios(us => us.map(u => u.id === editUser.id ? editUser : u));
    } else {
      setUsuarios(us => [...us, { ...editUser, id: Math.max(0, ...us.map(u=>u.id))+1 }]);
    }
    setShowModal(false);
    setEditUser(null);
  };

  const handleRemove = () => {
    setUsuarios(us => us.filter(u => u.id !== deleteUser.id));
    setShowDelete(false);
    setDeleteUser(null);
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setEditUser(u => ({ ...u, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <h2>Usuários</h2>
        <div className="d-flex align-items-center flex-wrap gap-2">
          <input
            type="text"
            className="form-control"
            style={{minWidth:220, maxWidth:300}}
            placeholder="Pesquisar por nome ou email..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
          />
          <div style={{width: 1, minWidth: 16}}></div>
          <button className="btn btn-success ms-2" onClick={() => handleEdit(null)} title="Adicionar Usuário">
            <i className="bi bi-person-plus"></i>
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped align-middle" style={{minWidth:900}}>
          <thead className="table-dark">
            <tr>
              <th style={{width:'20%', cursor:'pointer'}} onClick={()=>handleSort('nome')}>
                Nome
                {sort.col==='nome' ? (
                  sort.dir==='asc' ? <i className="bi bi-arrow-down ms-1" title="Ordem crescente"></i> : <i className="bi bi-arrow-up ms-1" title="Ordem decrescente"></i>
                ) : <i className="bi bi-arrow-down-up ms-1" title="Classificar"></i>}
              </th>
              <th style={{width:'25%', cursor:'pointer'}} onClick={()=>handleSort('email')}>
                Email
                {sort.col==='email' ? (
                  sort.dir==='asc' ? <i className="bi bi-arrow-down ms-1" title="Ordem crescente"></i> : <i className="bi bi-arrow-up ms-1" title="Ordem decrescente"></i>
                ) : <i className="bi bi-arrow-down-up ms-1" title="Classificar"></i>}
              </th>
              <th style={{width:'10%', cursor:'pointer'}} onClick={()=>handleSort('idade')}>
                Idade
                {sort.col==='idade' ? (
                  sort.dir==='asc' ? <i className="bi bi-arrow-down ms-1" title="Ordem crescente"></i> : <i className="bi bi-arrow-up ms-1" title="Ordem decrescente"></i>
                ) : <i className="bi bi-arrow-down-up ms-1" title="Classificar"></i>}
              </th>
              <th style={{width:'10%', cursor:'pointer'}} onClick={()=>handleSort('ativo')}>
                Ativo
                {sort.col==='ativo' ? (
                  sort.dir==='asc' ? <i className="bi bi-arrow-down ms-1" title="Ordem crescente"></i> : <i className="bi bi-arrow-up ms-1" title="Ordem decrescente"></i>
                ) : <i className="bi bi-arrow-down-up ms-1" title="Classificar"></i>}
              </th>
              <th style={{width:'15%', cursor:'pointer'}} onClick={()=>handleSort('tipo')}>
                Tipo
                {sort.col==='tipo' ? (
                  sort.dir==='asc' ? <i className="bi bi-arrow-down ms-1" title="Ordem crescente"></i> : <i className="bi bi-arrow-up ms-1" title="Ordem decrescente"></i>
                ) : <i className="bi bi-arrow-down-up ms-1" title="Classificar"></i>}
              </th>
              <th style={{width:'20%'}}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map(user => (
              <tr key={user.id}>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.idade}</td>
                <td>{user.ativo ? 'Sim' : 'Não'}</td>
                <td>{tipos.find(t=>t.value===user.tipo)?.label}</td>
                <td>
                  <button className="btn btn-link text-primary fs-5 me-2 p-0" onClick={() => handleEdit(user)} title="Editar">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-link text-danger fs-5 p-0" onClick={() => handleDelete(user)} title="Excluir">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Paginador */}
      <nav className="d-flex justify-content-center my-3">
        <ul className="pagination">
          <li className={`page-item${page===1?' disabled':''}`}><button className="page-link" onClick={()=>setPage(p=>Math.max(1,p-1))}>Anterior</button></li>
          {[...Array(filteredTotalPages)].map((_,i)=>(
            <li key={i} className={`page-item${page===i+1?' active':''}`}><button className="page-link" onClick={()=>setPage(i+1)}>{i+1}</button></li>
          ))}
          <li className={`page-item${page===filteredTotalPages?' disabled':''}`}><button className="page-link" onClick={()=>setPage(p=>Math.min(filteredTotalPages,p+1))}>Próxima</button></li>
        </ul>
      </nav>

      {/* Modal de edição/adicionar */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{background:'rgba(0,0,0,0.3)'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">{editUser.id ? 'Editar Usuário' : 'Adicionar Usuário'}</h5>
                <button type="button" className="btn-close" onClick={()=>setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="modal-nome">Nome</label>
                  <input id="modal-nome" type="text" className="form-control" name="nome" value={editUser.nome} onChange={handleChange} maxLength={100} required />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="modal-email">Email</label>
                  <input id="modal-email" type="email" className="form-control" name="email" value={editUser.email} onChange={handleChange} maxLength={100} required />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="modal-idade">Idade</label>
                  <input id="modal-idade" type="number" className="form-control" name="idade" value={editUser.idade} onChange={handleChange} min={18} max={120} required />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label" htmlFor="modal-tipo">Tipo</label>
                  <select id="modal-tipo" className="form-select" name="tipo" value={editUser.tipo} onChange={handleChange} required>
                    {tipos.map(t=>(<option key={t.value} value={t.value}>{t.label}</option>))}
                  </select>
                </div>
                <div className="form-check mb-2 text-start">
                  <input className="form-check-input" type="checkbox" name="ativo" id="ativo" checked={editUser.ativo} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="ativo">Ativo</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={()=>setShowModal(false)}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>Salvar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de deleção */}
      {showDelete && (
        <div className="modal fade show d-block" tabIndex="-1" style={{background:'rgba(0,0,0,0.3)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-danger">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">Confirmar Exclusão</h5>
                <button type="button" className="btn-close" onClick={()=>setShowDelete(false)}></button>
              </div>
              <div className="modal-body text-center">
                <p className="fs-5">Tem certeza que deseja excluir <b>{deleteUser?.nome}</b>?</p>
                <p className="text-danger">Esta ação não poderá ser desfeita!</p>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-secondary" onClick={()=>setShowDelete(false)}>Cancelar</button>
                <button type="button" className="btn btn-danger" onClick={handleRemove}>Excluir</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usuarios;
