import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'

const HeaderContent = () => {
    return (
        <HeaderContentStyled>
            <div className='left-content'>
                <h1>Smart banking for freelancers</h1>
                <p className='white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas quaerat at soluta incidunt doloribus explicabo assumenda saepe cum dicta consequatur, culpa possimus enim vitae aperiam nesciunt beatae ea vero.
                </p>
                <SecondaryButton name={'Register Now'} />
            </div>
            <div className='right-content'>
                
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`

`

export default HeaderContent
