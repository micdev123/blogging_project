import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { GrArticle } from 'react-icons/gr';
import { AiFillDelete, AiFillSetting } from 'react-icons/ai';


import './setting-sidebar.css'

export const SettingSideBar = () => {
    return (
        <div className='Setting_SideBar_Component'>
            <h2>
                <AiFillSetting className='icon'/>
                Settings
            </h2>
            <ul className='Settings_Links'>
                <li className='Link '>
                    <CgProfile className='icon' />
                    Profile
                </li>
                <li className='Link'>
                    <GrArticle className='icon' />
                    Articles
                </li>
                <li className='Link active'>
                    <AiFillDelete className='icon trash' />
                    Delete Account
                </li>
            </ul>
        </div>
    )
}
