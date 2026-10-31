import React from 'react';
import { useEffect, useRef, useState } from 'react';
export default function Dropdown({ options, value, onChange, label = 'Filtrar por categoria' }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  useEffect(() => {
    if (!open)
      return;
    const onOutside = (event) => {
      if (!rootRef.current?.contains(event.target))
        setOpen(false);
    };
    const onEscape = (event) => {
      if (event.key === 'Escape')
        setOpen(false);
    };
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('keydown', onEscape);
    return () => { document.removeEventListener('pointerdown', onOutside); document.removeEventListener('keydown', onEscape); };
  }, [open]);
  return <div className="dropdown" ref={rootRef}>
    <button className="dropdown-trigger" aria-label={label} aria-expanded={open} aria-haspopup="listbox" aria-controls="category-options" onClick={() => setOpen((v) => !v)}><span>{options.find((option) => option.value === value)?.label ?? value}</span><span aria-hidden="true" className="chevron">⌄</span></button>
    {open && <div className="dropdown-list" id="category-options" role="listbox" aria-label={label}>{options.map((option) => <button key={option.value} role="option" aria-selected={value === option.value} className={`dropdown-option ${value === option.value ? 'chosen' : ''}`} onClick={() => { onChange(option.value); setOpen(false); }}>{option.label}{value === option.value && <span aria-hidden="true">✓</span>}</button>)}</div>}
  </div>;
}
