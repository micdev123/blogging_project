import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

import './footer.css'

export const Footer = () => {
    return (
        <div className='Footer_Component'>
            <p>&copy;copyrights :: Mic__Dev.com ~ Blogging.com</p>
            <div className='Footer_Socials'>
                <BsGithub className='icon' />
                <BsTwitter className='icon' />
                <BsInstagram className='icon' />
                <FaFacebook className='icon'/>
            </div>
        </div>
    )
}
