import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'

const SecondaryButton = ({ name }) => {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt='' />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        padding-left: .9rem
    }
`

export default SecondaryButton
