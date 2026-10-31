import React from 'react';
import { useEffect } from 'react';
import { useApp } from '../context/AppContext.jsx';
function ToastItem({ item, onClose }) {
  useEffect(() => { const timer = window.setTimeout(() => onClose(item.id), 4500); return () => window.clearTimeout(timer); }, [item.id, onClose]);
  const icons = { success: '✓', info: 'i', error: '!' };
  return <div className={`toast toast-${item.type}`} role={item.type === 'error' ? 'alert' : 'status'}><span className="toast-icon" aria-hidden="true">{icons[item.type] || 'i'}</span><span>{item.message}</span><button onClick={() => onClose(item.id)} aria-label="Fechar notificação">×</button></div>;
}
export default function Toast() {
  const { notifications, dismissToast } = useApp();
  return <div className="toast-container" aria-label="Notificações">{notifications.map((item) => <ToastItem key={item.id} item={item} onClose={dismissToast} />)}</div>;
}
