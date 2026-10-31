import React from 'react';
import { useState } from 'react';
export default function Tabs({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = items.find((item) => item.id === activeId);
  if (!active)
    return null;
  return <div className="tabs-component">
    <div className="tabs-list" role="tablist" aria-label="Informações da plataforma">{items.map((item) => <button key={item.id} id={`tab-${item.id}`} role="tab" aria-selected={activeId === item.id} aria-controls={`panel-${item.id}`} tabIndex={activeId === item.id ? 0 : -1} className={`tab-button ${activeId === item.id ? 'active' : ''}`} onClick={() => setActiveId(item.id)} onKeyDown={(event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const index = items.findIndex((tab) => tab.id === activeId);
        const offset = event.key === 'ArrowRight' ? 1 : -1;
        const next = items[(index + offset + items.length) % items.length];
        setActiveId(next.id);
        event.currentTarget.parentElement.querySelector(`#tab-${next.id}`)?.focus();
      }
    }}>{item.label}</button>)}</div>
    <div className="tab-panel" id={`panel-${active.id}`} role="tabpanel" aria-labelledby={`tab-${active.id}`} tabIndex={0}><div className="tab-graphic" aria-hidden="true">✧</div><div><span className="eyebrow">EXPLORE A PLATAFORMA</span><h3>{active.title}</h3><p>{active.description}</p></div></div>
  </div>;
}
