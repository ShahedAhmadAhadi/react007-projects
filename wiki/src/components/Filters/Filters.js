import React from 'react'
import Gender from './Catagory/Gender'
import Species from './Catagory/Species'
import Status from './Catagory/Status'

const Filters = ({setPageNumber, setStatus, setGender, setSpecies}) => {
    let clear = () => {
        setPageNumber('');
        setStatus('');
        setGender('');
        setSpecies('');
        window.location.reload(false)
    }
    return (
        <div className='col-3'>
            <div className="text-center fs-4 fw-bold mb-4">Filter</div>
            <div onClick={() => clear()} className='text-center text-primary text-decoration-underline mb-4' style={{ cursor: 'pointer' }}>Clear Filters</div>
            <div className="accordion" id="accordionExample">
                <Status setPageNumber={setPageNumber} setStatus={setStatus} />
                <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
                <Gender setPageNumber={setPageNumber} setGender={setGender} />
            </div>
        </div>
    )
}

export default Filters
