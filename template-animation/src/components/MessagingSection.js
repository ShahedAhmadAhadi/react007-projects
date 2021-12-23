import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import avatar1 from '../img/avatar1.svg';
import avatar2 from '../img/avatar2.svg';
import avatar3 from '../img/avatar3.svg';
import avatar4 from '../img/avatar4.svg';
import avatar5 from '../img/avatar5.svg';
import messaging from '../img/conversation.svg';
import bgCircles from '../img/circleBg.svg';

const MessagingSection = () => {
    return (
        <MessageStyled>
            <InnerLayout>
                <div className='message-conatainer'>
                    <div className='left-items'>
                        <h2 className='secondary-heading'>
                            We support you in 5 different language
                        </h2>
                        <p className='m-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde, libero voluptatibus accusamus nihil dolore neque delectus?</p>
                        <div className="images-con">
                            <img src={avatar1} alt="" className="image-1" />
                            <img src={avatar2} alt="" className="image-2" />
                            <img src={avatar3} alt="" className="image-3" />
                            <img src={avatar4} alt="" className="image-4" />
                            <img src={avatar5} alt="" className="image-5" />
                            <p>&nbsp; +25</p>
                        </div>
                        <img src={bgCircles} className='bgCircle' alt='' />
                    </div>
                    <div className='right-items'>
                        <img src={messaging} alt='' />
                        <img src={bgCircles} alt='' className='bgCircle' />
                    </div>
                </div>
            </InnerLayout>
        </MessageStyled>
    )
}

const MessageStyled = styled.section`
    .message-con{
        display: grid;
        grid-template-column: repeat(2, 1fr)
    }
    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para {
            padding: 1rem 0;
        }
        .image-con{
            display: flex;
            align-items: center;
            .image-2, .image-3, image-4, image-5 {
                margin: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left:-10%;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircle{
            position: absolute;
            bottom: -7%;
            right:0;
            z-index: -1;
        }
    }
`

export default MessagingSection
