import React from 'react'
import { Article } from '../../components/Article/Article'
import { SettingSideBar } from '../../components/Setting-Sidebar/SettingSideBar'
import { GrArticle } from 'react-icons/gr';

import './my-articles.css'

export const MyArticles = () => {
    return (
        <div className='My_Articles_Component'>
            <div className='Main_Container'>
                <div className='My_Articles_Container'>
                    <SettingSideBar />
                    <div className='My_Articles'>
                        <h2>
                            <GrArticle className='icon'/>
                            My articles
                        </h2>
                        <div className='Articles_Container'>
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
