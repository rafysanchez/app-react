import React, { useState } from 'react';
import { t } from '../shared/i18n';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = t('login.errors.emailRequired');
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.email = t('login.errors.emailInvalid');
    }
    if (!password) {
      newErrors.password = t('login.errors.passwordRequired');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onLogin(email);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <form className="p-4 rounded shadow bg-white" style={{minWidth: 320}} onSubmit={handleSubmit} noValidate>
        <h2 className="mb-4 text-center">{t('login.title')}</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">{t('login.email')}</label>
          <input
            type="email"
            className={`form-control${errors.email ? ' is-invalid' : ''}`}
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">{t('login.password')}</label>
          <input
            type="password"
            className={`form-control${errors.password ? ' is-invalid' : ''}`}
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary w-100">{t('login.signIn')}</button>
      </form>
    </div>
  );
};

export default Login;
