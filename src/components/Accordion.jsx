import React from 'react';
import { useState } from 'react';
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);
  return <div className="accordion">{items.map(({ id, title, content }) => {
    const open = openId === id;
    return <div className={`accordion-item ${open ? 'open' : ''}`} key={id}>
      <h3><button id={`accordion-control-${id}`} className="accordion-trigger" aria-expanded={open} aria-controls={`accordion-panel-${id}`} onClick={() => setOpenId(open ? null : id)}><span>{title}</span><span className="accordion-symbol" aria-hidden="true">{open ? '−' : '+'}</span></button></h3>
      <div id={`accordion-panel-${id}`} className="accordion-panel" role="region" aria-labelledby={`accordion-control-${id}`} hidden={!open}><p>{content}</p></div>
    </div>;
  })}</div>;
}
