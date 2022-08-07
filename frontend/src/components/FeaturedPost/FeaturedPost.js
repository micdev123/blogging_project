import React from 'react'
import { AuthorRightSide } from '../Author-Right-Side/AuthorRightSide'

import './featuredPost.css'

export const FeaturedPost = () => {
    return (
        <div className='FeaturedPost_Components'>
            <div className='FeaturedPost'>
                <div className='FeaturedPostImg'>
                    <img src='./assets/featured.png' alt='FeaturedPost_Img' />
                </div>
                <div className='FeaturedPost_Contents'>
                    <p className='FeaturedPost_Date'>
                        Aug 2, 2022
                    </p>
                    <h2 className='FeaturedPost_Title'>
                        The Ultimate Guide, Hands On Guide For Every Technical Interview 
                    </h2>
                    <p className='FeaturedPost_Brief_Desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eius deserunt totam dolorem qui obcaecati placeat inventore ullam molestiae eos, error assumenda odit eligendi vero, porro itaque aliquid ex voluptatibus?
                    </p>
                </div>
            </div>
            <div className='FeaturedPost_Author'>
                <AuthorRightSide />
            </div>
        </div>
    )
}
