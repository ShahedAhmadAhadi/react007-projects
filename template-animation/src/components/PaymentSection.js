import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Card from './Card'
import card from '../img/creditcard.svg';
import active from '../img/active.svg';
import inactive from '../img/inactive.svg';

const PaymentSection = () => {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">An exceptional service, <span>at the right price</span></h3>
                <p className="c-para">Start with our free plan and switch to premium as you grow. </p>
                <div className="card-con">
                    <Card
                        account={'Free'}
                        amount={'$0'}
                        text={'Manage your business with a simple and efficient account.'}
                        button={'Get Started'}
                        card={card}
                        active={active}
                        inactive={inactive} />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    p{
        text-align: center;
    }
`

export default PaymentSection
