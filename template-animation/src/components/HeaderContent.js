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
    padding-top: 3rem;
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
            color: white;
        }
    }
    .right-content {
        position: relative;
        display: flex;
        justify-content: center;
        .phone {
            width: 80%;
        }
        .ring1{
            position: absolute;
            bottom: 10%;
            left: auto;
            right: 0;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
        }
        .message1{
            position: absolute;
            top: 0;
            left: auto;
            right: 0;
            animation: move 5s infinite;
            transition: all .4s ease-in-out; 
        }
        .message2{
            position: absolute;
            bottom: 15%;
            left: 0;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s
        }
    }

    /* Animations */

    .message1{
        @keyframes move {
            0% {
                transform: translateY(0) scale(1) rotate(0deg) translateX(0);
                transform: rotate(0deg);
            }
            50% {
                transform: translateY(-10px) scale(1.1) rotate(20deg) translateX(10px);
                transform: rotate(20deg);
            }
            100%{
                transform: translateY(0) scale(1) rotate(0deg) translateX(0);
            }
        }
        @keyframes move {
            0% {
                transform: translateY(0) scale(1) rotate(0deg) translateX(0);
                transform: rotate(0deg);
            }
            50% {
                transform: translateY(-10px) scale(1.1) rotate(60deg) translateX(10px);
                transform: rotate(20deg);
            }
            100%{
                transform: translateY(0) scale(1) rotate(0deg) translateX(0);
            }
        }
    }

`

export default HeaderContent
