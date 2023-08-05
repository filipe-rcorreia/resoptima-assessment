export interface IMovie {
  id: string;
  title: string;
  director: string;
  description: string;
  year: number;
  coverImage: string;
}

//Pagination
export interface IPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}
//endRegion
