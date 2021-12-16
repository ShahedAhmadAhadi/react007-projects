import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({setPageNumber, pageNumber, info}) => {
    return (
        <ReactPaginate pageCount={info?.pages} className='pagination justify-content-center' nextLabel="Next" previousLabel="Prev" nextClassName='btn btn-primary' previousLinkClassName='btn btn-primary' pageClassName='page-item' pageLinkClassName='page-link' />
    )
}

export default Pagination
