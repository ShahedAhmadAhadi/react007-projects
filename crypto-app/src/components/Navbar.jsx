import { Button, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">CryptoVerse</Link>
                </Typography.Title>
            </div>
        </div>
    )
}

export default Navbar
