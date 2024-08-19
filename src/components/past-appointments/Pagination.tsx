import React from "react";
import ReactPaginate from "react-paginate";

interface props {
  setPage: React.Dispatch<number>;
  page: number;
  pageCount: number;
}

const Pagination = ({ setPage, pageCount, page }: props) => {
  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        breakClassName="list-group"
        breakLinkClassName="text-decoration-none text-dark break-select"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        className="d-flex justify-content-center align-items-center  mt-5 gap-3 p-0"
        previousClassName=" list-group"
        pageClassName="list-group d-none d-md-block"
        nextClassName="list-group"
        pageLinkClassName="text-decoration-none  list-group-item hover"
        previousLinkClassName="text-decoration-none  list-group-item hover text-nowrap"
        nextLinkClassName="text-decoration-none list-group-item hover text-nowrap"
        activeLinkClassName="bg-primary text-white"
        forcePage={page - 1}
      />
    </>
  );
};
export default Pagination;
