import React from 'react'
import styled from 'styled-components'

const ChartStats = ({name, amount}) => {
    return (
        <ChartStatsStyled>
            <p><b>{name}</b></p>
            <h4>{amount}</h4>
        </ChartStatsStyled>
    )
}

const ChartStatsStyled = styled.div`
    background: white;
    border: 1px solid var(--border-colour)
    border-radius: 50px;
    height: 10rem;
    padding: 2rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    h4{
        font-size: 3rem;
        color: var(--purple-primary);
    }
    p {
        color: black;

    }
`

export default ChartStats