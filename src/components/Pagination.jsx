import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination flex gap-3 w-max">
      <button className='btn-page' disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        <span className="material-symbols-rounded text-base">arrow_back</span>
      </button>

      {pageNumbers.slice(0, 10).map((page) => (
        <button className={`${currentPage === page ? 'btn-page-active' : 'btn-page'}`} key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}

      <button className='btn-page' disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        <span className="material-symbols-rounded text-base">arrow_forward</span>
      </button>
    </div>
  );
};

export default Pagination;