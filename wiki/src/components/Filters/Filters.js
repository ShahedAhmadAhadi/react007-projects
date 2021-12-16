import React from 'react'
import Gender from './Catagory/Gender'
import Species from './Catagory/Species'
import Status from './Catagory/Status'

const Filters = () => {
    return (
        <div className='col-3'>
            <div className="text-center fs-4 fw-bold mb-4">Filter</div>
            <div className='text-center text-primary text-decoration-underline mb-4' style={{ cursor: 'pointer' }}>Clear Filters</div>
            <div className="accordion" id="accordionExample">
                <Status />
                <Species />
                <Gender />
            </div>
        </div>
    )
}

export default Filters
