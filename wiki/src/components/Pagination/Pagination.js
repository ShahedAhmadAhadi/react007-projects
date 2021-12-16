import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {
    return (
        <ReactPaginate
            pageCount={info?.pages}
            className="pagination justify-content-center gap-4 my-4"
            onPageChange={(data) => {
                setPageNumber(data.selected + 1);
            }}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            activeClassName="active"
            nextLabel="Next"
            nextLinkClassName="btn btn-primary"
            previousLabel="Prev"
            previousLinkClassName="btn btn-primary"
            pageClassName="page-item"
            pageLinkClassName="page-link"
        />
    );
};

export default Pagination;
