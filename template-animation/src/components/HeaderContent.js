import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from '../img/phone.svg'
import ring1 from '../img/ring-orange.svg'
import

const HeaderContent = () => {
    return (
        <HeaderContentStyled>
            <div className='left-content'>
                <div className="left-text-container">

                <h1>Smart banking for freelancers</h1>
                <p className='white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestiae minus dicta ipsum atque est qui vel illo magni voluptates esse, e
                        x commodi corporis quos odio libero temporibus, eveniet nisi.
                </p>
                <SecondaryButton name={'Register Now'} />
                </div>
            </div>
            <div className='right-content'>
                <img src={phone} alt='' />
                <img src={ring1} alt="" className="ring1" />
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem;
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        h1 {
            font-size: 4rem;
            font-weight: 600;
        }
        .white {
            padding: 1.4rem 0;
            line-height: 1.8rem;
             
        }
    }
    .right-content {
        position: relative;
        .ring1{
            posistion: absolute;
            bottom: 10%;
            left: auto;
            right: 0;
        }
    }
`

export default HeaderContent
