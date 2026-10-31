import React from 'react';
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1)
    return null;
  return <nav className="pagination" aria-label="Paginação de projetos">
    <button className="page-arrow" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Página anterior">←</button>
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => <button key={page} className={`page-number ${page === currentPage ? 'selected' : ''}`} onClick={() => onPageChange(page)} aria-label={`Página ${page}`} aria-current={page === currentPage ? 'page' : undefined}>{page}</button>)}
    <button className="page-arrow" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Próxima página">→</button>
  </nav>;
}
