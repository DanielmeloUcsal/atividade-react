import React from 'react';
export default function ProgressBar({ value, label = 'Progresso' }) {
  const safeValue = Math.min(100, Math.max(0, Number(value) || 0));
  return <div className="progress-component">
    <div className="progress-label"><span>{label}</span><strong>{safeValue}%</strong></div>
    <div className="progress-track" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeValue}>
      <div className={`progress-fill ${safeValue === 100 ? 'complete' : ''}`} style={{ width: `${safeValue}%` }} />
    </div>
  </div>;
}
