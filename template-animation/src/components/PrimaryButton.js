import React from 'react'
import styled from 'styled-components'

const PrimaryButton = ({name}) => {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: var(--accent-pink);
    padding: .7rem 1.8rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    
`

export default PrimaryButton
