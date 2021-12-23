import React from 'react'
import './TodoItem.css'
import {Checkbox} from '@material-ui/core'

const TodoItem = ({name, done, id}) => {
    const handleChange = () => {
        
    }
    return (
        <div className='todoItem'>
            <Checkbox checked={done} color="primary" onChange={handleChange} inputProps={{'aria-label': 'secondary checkbox'}} />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}

export default TodoItem
