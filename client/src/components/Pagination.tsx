import React, { useState } from "react";
import { IPaginationProps } from "../types";

const defaultVisiblePages = 5;

const Pagination = (props: IPaginationProps) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const halfVisiblePages = Math.floor(defaultVisiblePages / 2);
  const leftPageBound = Math.max(1, currentPage - halfVisiblePages);
  const rightPageBound = Math.min(totalPages, currentPage + halfVisiblePages);

  const pageNumbers = Array.from({ length: rightPageBound - leftPageBound + 1 }, (_, index) => leftPageBound + index);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <nav>
      <ul className="pagination">
        {/* Render a "Previous" button */}
        {currentPage > 1 && (
          <li>
            <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          </li>
        )}

        {/* Render pagination numbers */}
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={pageNumber === currentPage ? "active" : ""}>
            <button onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
          </li>
        ))}

        {/* Render a "Next" button */}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
