import React, { useState } from 'react';

const Contato = () => {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [focus, setFocus] = useState({});
  const [chars, setChars] = useState(0);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (name === 'mensagem') setChars(value.length);
  };

  const handleFocus = e => setFocus(f => ({ ...f, [e.target.name]: true }));
  const handleBlur = e => setFocus(f => ({ ...f, [e.target.name]: false }));

  return (
    <div className="d-flex align-items-center justify-content-center bg-light" style={{minHeight: 'calc(100vh - 120px)'}}>
      <div className="modal-dialog m-0" style={{maxWidth: 500, minWidth: 320}}>
        <div className="modal-content shadow">
          <div className="modal-header bg-primary text-white rounded-top">
            <h5 className="modal-title w-100 text-center">Deixe sua mensagem</h5>
          </div>
          <form className="modal-body p-4 bg-white" style={{borderRadius: 0}}>
            <div className="mb-3 text-start">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input
                type="text"
                className={`form-control${focus.nome ? ' border-primary shadow' : ''}`}
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={100}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input
                type="email"
                className={`form-control${focus.email ? ' border-primary shadow' : ''}`}
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={100}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="telefone" className="form-label">Telefone</label>
              <input
                type="tel"
                className={`form-control${focus.telefone ? ' border-primary shadow' : ''}`}
                id="telefone"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={20}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea
                className={`form-control${focus.mensagem ? ' border-primary shadow' : ''}`}
                id="mensagem"
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={1000}
                rows={4}
                required
              />
              <div className="form-text text-end small">{chars}/1000 caracteres</div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary w-100 mt-2">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
