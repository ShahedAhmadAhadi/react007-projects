import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'
import blob1 from '../img/blob_top.svg';
import blob2 from '../img/blob_bottom.svg';

const AnimatedButton = ({name}) => {
    return (
        <AnimationButtonStyled>
            {name}
            <img src={arrow} alt="" />
            <img src={blob1} alt="" className="blob1" />
            <img src={blob2} alt="" className="blob2" />
        </AnimationButtonStyled>
    )
}

const AnimationButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2.0rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    &:hover{
        .blob1 {
            transition: all .4s ease-in-out;
            transform: translateX(-20px);
        }
    }
    .blob1, .blob2 {
        position: absolute;
    }
    img {
        padding-left: .9rem
    }
`

export default AnimatedButton
