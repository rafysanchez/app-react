import React, { useRef, useState } from 'react';
import { t } from '../shared/i18n';

const Documentos = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!files.length) return;
    setUploading(true);
    setProgress(0);
    // Upload simulation with progress
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 15) + 5;
      if (percent >= 100) {
        percent = 100;
        clearInterval(interval);
        setTimeout(() => {
          setUploading(false);
          setProgress(0);
          setFiles([]);
          if (inputRef.current) inputRef.current.value = '';
        }, 800);
      }
      setProgress(percent);
    }, 400);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <form className="p-4 rounded shadow bg-white" style={{minWidth: 340, maxWidth: 400}} onSubmit={handleSubmit}>
        <h2 className="mb-4 text-center">{t('documents.title')}</h2>
        <div className="mb-3">
          <input
            ref={inputRef}
            type="file"
            className="form-control"
            accept=".pdf,.docx"
            multiple
            disabled={uploading}
            onChange={handleFileChange}
          />
          <div className="form-text">{t('documents.helper')}</div>
        </div>
        {files.length > 0 && (
          <ul className="list-group mb-3">
            {files.map((file, idx) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                {file.name}
                <span className="badge bg-secondary">{(file.size/1024).toFixed(1)} KB</span>
              </li>
            ))}
          </ul>
        )}
        {uploading && (
          <div className="mb-3">
            <div className="progress" style={{height: 20}}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                style={{width: `${progress}%`}}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {progress}%
              </div>
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary w-100" disabled={uploading || !files.length}>
          {uploading ? t('documents.uploading') : t('documents.send')}
        </button>
      </form>
    </div>
  );
};

export default Documentos;
