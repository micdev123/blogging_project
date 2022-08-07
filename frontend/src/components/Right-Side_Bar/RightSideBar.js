import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaTiktok } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'

import { AiFillCloseCircle } from 'react-icons/ai'

import './right-side-bar.css'
import { AuthorRightSide } from '../Author-Right-Side/AuthorRightSide'
import { MostRead } from '../Most-Read-Posts/MostRead'

export const RightSideBar = () => {
    return (
        <div className='Right_Side_Bar_Component'>
            <div className='Categories'>
                <p>All</p>
                <p>Health</p>
                <p>Technology</p>
                <p>Politics</p>
                <p>Development</p>
                <p>Motivation</p>
            </div>
            <div className='Featured_Post_Author'>
                <AuthorRightSide />
            </div>
            <div className='Most_Read_Posts'>
                <MostRead />
            </div>
        </div>
    )
}
