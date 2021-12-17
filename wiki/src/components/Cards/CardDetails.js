import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    const [fetchedData, setFetchedData] = useState([])
    let { name, image, location, origin, gender, species, status, type } = fetchedData
    let { id } = useParams()
    let api = `https://rickandmortyapi.com/api/character/${id}`
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json())
            setFetchedData(data)
        })()
    }, [api])

    return (
        <div className='container d-flex justify-content-center'>
            <div className='d-flex flex-column gap-3'>
                <h1 className='text-center'>{name}</h1>
                <img src={image} alt="" className='img-fluid' />
                {(() => {
                    if (status === 'Dead') {
                        return (
                            <div
                                className={`fs-5 badge bg-danger`}
                            >
                                {status}
                            </div>
                        );
                    } else if (status === 'Alive') {
                        return (
                            <div
                                className={`fs-5 badge bg-success`}
                            >
                                {status}
                            </div>
                        );
                    } else {
                        return (
                            <div
                                className={`fs-5 badge bg-secondary`}
                            >
                                {status}
                            </div>
                        );
                    }
                })()}
                <div className="content">
                    <div className="">
                        <span className="fw-bold">Gender : </span>
                        {gender}
                    </div>
                    <div className="">
                        <span className="fw-bold">Location: </span>
                        {location?.name}
                    </div>
                    <div className="">
                        <span className="fw-bold">Origin: </span>
                        {origin?.name}
                    </div>
                    <div className="">
                        <span className="fw-bold">Species: </span>
                        {species}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
