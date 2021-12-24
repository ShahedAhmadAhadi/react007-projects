import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'

const FAQSection = () => {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className='small-heading'>Frequently <span> asked questions </span></h3>
                <p className="c-para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda maxime ipsa nam expedita dolorem distinctio illo 
                    ad doloribus atque fuga, Nihil laboriosam beatae fugit.
                </p>
            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    
`

export default FAQSection
