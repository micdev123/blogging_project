import React from 'react'
import { BiLike } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'

import './post.css'

export const Post = () => {
    return (
        <div className='Post_Component'>
            <div className='Post_Contents'>
                <div className='Post_Contents_Head'>
                    <div className='Post_Head_Left'>
                        <img src='./assets/blog2.png' alt='Author_Img' />
                    </div>
                    <div className='Post_Head_Right'>
                        <h2>Michael L Bangura</h2>
                        <div className='Post_Head_Right_Foot_'>
                            <p>mic__dev.com</p>
                            <div className='line'></div>
                            <p>Aug 2, 2022</p>
                        </div>
                    </div>
                </div>
                <div className='Post_Contents_Body'>
                    <h2 className='Post_Contents_Body_Title'>
                        8 ways to use the Spread operator in JavaScript
                    </h2>
                    <p className='Post_Contents_Body_Desc'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe necessitatibus eaque exercitationem eligendi voluptate illum.
                    </p>
                    <div className='Post_Contents_Body_Tags'>
                        <p className='Tag'>javascript</p>
                        <p className='Tag'>health</p>
                        <p className='Tag'>web development</p>
                    </div>
                </div>
                <div className='Post_Contents_Foot'>
                    <p>2 min read</p>
                    <div className='line'></div>
                    <p className='info'>
                        <BiLike className='icon' />
                        10
                    </p>
                    <p className='info comment'>
                        <FaRegComment className='icon' />
                        10
                    </p>
                </div>
            </div>
            <div className='Post_Image'>
                <img src='./assets/blog-img.png' alt='Post_Img' />
            </div>
        </div>
    )
}
