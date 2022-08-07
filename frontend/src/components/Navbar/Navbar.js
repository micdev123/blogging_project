import React from 'react'
import { MdArticle } from 'react-icons/md'

import './navbar.css'

export const Navbar = () => {
    return (
        <div className='Nav_Container'>
            <div className='navigation'>
                <h2 className='logo'>
                    <MdArticle className='icon' />
                    Blogging
                </h2>
                <ul className='navLinks'>
                    <li>
                        <p>Write</p> 
                    </li>
                    <li className='state'>
                        <p>Hello, Guest</p>
                        <p>Sign-In</p> 
                    </li>
                </ul>
            </div>
        </div>
    )
}
