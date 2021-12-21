import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import card from '../img/creditcard.svg'

const CartSection = () => {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className='card-container'>
                    <div className='card-left'>
                        <h2 className='secondary-heading'>
                            One card for all your payments
                        </h2>
                        <p className='secondary-heading'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit doloremque quia? Odit illo, tempore quod vero exercitationem, 
                                voluptatum laudantium quo harum, adipisci tenetur eum.
                        </p>
                    </div>
                    <div className='card-right'>
                        <img src={card} alt='' />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .card-right{
            display: flex;
            justify-content: flex-end;
        }
        .card-left{
            p{
                padding: 1rem 0;
                
            }
        }
    }
`

export default CartSection
