import { PaginationBtn, PaginationContainer, PaginationEllipsis, PaginationItem } from "../styles";
import { IPaginationProps } from "../types";

const defaultVisiblePages = 3;
const Pagination = (props: IPaginationProps) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isSmallEnough = totalPages <= defaultVisiblePages;

  const getPageNumbers = () => {
    if (isSmallEnough) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      const halfVisiblePages = Math.floor(defaultVisiblePages / 2);
      const pages: (number | string)[] = [];

      pages.push(1);

      if (currentPage > defaultVisiblePages - halfVisiblePages) {
        pages.push("...");
      }

      const startPage = Math.max(2, currentPage - halfVisiblePages);
      const endPage = Math.min(totalPages - 1, currentPage + halfVisiblePages);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - halfVisiblePages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);

      return pages;
    }
  };

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <PaginationContainer className="pagination">
      <PaginationItem>
        <PaginationBtn disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </PaginationBtn>
      </PaginationItem>

      {getPageNumbers().map((pageNumber, index) => (
        <PaginationItem key={index} className={pageNumber === currentPage ? "active" : ""}>
          {typeof pageNumber === "number" ? (
            <PaginationBtn type="button" onClick={() => handlePageChange(pageNumber)} title={"Go to page " + pageNumber}>
              {pageNumber}
            </PaginationBtn>
          ) : (
            <PaginationEllipsis>{pageNumber}</PaginationEllipsis>
          )}
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationBtn type="button" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} title="Next">
          Next
        </PaginationBtn>
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
