import React, { useState } from 'react'
import styles from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
    return (
        <form className='d-flex justify-content-center gap-4 mb-5'>
            <input type="text" onChange={(e) => {setPageNumber(1); setSearch(e.target.value)}} placeholder='Search for Characters' className={styles.input} />
            <button onClick={(e) => {e.preventDefault()}} className={`btn btn-primary fs-5 ${styles.btn}`}>Search</button>
        </form>
    )
}

export default Search