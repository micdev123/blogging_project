import React from 'react'
import { MostRead } from '../Most-Read-Posts/MostRead'
import { Post } from '../Post/Post'

import './posts.css'

export const Posts = () => {
    return (
        <div className='Posts_Component'>
            <div className='Posts'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className='Most_Viewed'>
                <MostRead />
            </div>
        </div>
    )
}
