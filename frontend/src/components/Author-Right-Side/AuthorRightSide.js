import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebook, FaTiktok } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'

import './author-right-side.css'

export const AuthorRightSide = () => {
    return (
        <div className='Author_RightSide_Component'>
            <div className='Author_RightSide_Img'>
                    <img src='./assets/blog2.png' alt='Author_Img' />
                </div>
                <div className='Author_RightSide_Title'>
                    <h2>Hellen Bangura</h2>
                    <p>Front-End Developer</p>
                </div>
                <p className='Author_RightSide_Desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eius deserunt totam dolorem qui obcaecati 
                </p>
            
                <div className='Author_RightSide_socials'>
                    <FiLink className='icon' />
                    <BsTwitter className='icon' />
                    <FaFacebook className='icon' />
                    <BsInstagram className='icon' />
                    <FaTiktok className='icon' />
                </div>

                <button className='Author_RightSide_btn'>View work</button>
        </div>
    )
}
