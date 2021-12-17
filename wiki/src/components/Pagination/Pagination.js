import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {
    const [width, setWidth] = useState(window.innerWidth)
    const updateDimention = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', updateDimention)
        return window.removeEventListener('resize', updateDimention)
    }, [])
    return (
        <>
        <style jsx>
            {`
                @media (max-width: 768px) {
                    .next, .prev{
                        display: none;
                    }
                    .pagination {
                        font-size: 14px;
                    }
                }
            `}
        </style>
        <ReactPaginate
            pageCount={info?.pages}
            className="pagination justify-content-center gap-4 my-4"
            onPageChange={(data) => {
                setPageNumber(data.selected + 1);
            }}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            activeClassName="active"
            nextLabel="Next"
            nextLinkClassName="btn btn-primary next"
            previousLabel="Prev"
            previousLinkClassName="btn btn-primary prev"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            marginPagesDisplayed={ width < 576 ? 1: 2}
            pageRangeDisplayed={width < 576 ? 1: 2}
        />
        </>
    );
};

export default Pagination;
