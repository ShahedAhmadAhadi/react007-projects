import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton'

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className='logo'></div>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Pricing</a></li>
            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
    )
}

const NavigationStyled= styled.nav`

`

export default Navigation
