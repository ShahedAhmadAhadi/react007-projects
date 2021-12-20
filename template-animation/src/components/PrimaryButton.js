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

`

export default PrimaryButton
