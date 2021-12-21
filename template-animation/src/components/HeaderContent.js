import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg'
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'

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
                <img src={phone} alt='' className='phone' />
                <img src={ring1} alt="" className="ring1" />
                <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" />
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
        .phone {
            width: 80%;
            display: flex;
            justify-content: center; 
        }
        .ring1{
            posistion: absolute;
            bottom: 10%;
            left: auto;
            right: 0;
        }
        .message1{
            posistion: absolute;
            top: 0;
            left: auto;
            right: 0;
        }
        .message2{
            posistion: absolute;
            bottom: 15%;
            left: 0;
            right: 0;
        }
    }
`

export default HeaderContent
