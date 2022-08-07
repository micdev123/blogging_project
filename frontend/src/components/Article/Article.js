import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

import './article.css'

export const Article = () => {
    return (
        <div className='Article_Component'>
            <div className='Article__Img'>
                <img src='./assets/featured.png' alt='Article_Img' />
            </div>
            <div className='Article_Contents'>
                <div className='Article_Contents_Head'>
                    <p className='Article_Date'>
                        Aug 2, 2022
                    </p>
                    <div className='Article_Actions'>
                        <AiFillEdit className='edit icon' />
                        <AiFillDelete className='icon trash'/>
                    </div>
                </div>
                <h2 className='Article_Title'>
                    The Ultimate Guide, Hands On Guide For Every Technical Interview 
                </h2>
                <p className='Article_Brief_Desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eius deserunt totam dolorem qui obcaecati placeat inventore ullam molestiae eos.?
                </p>
            </div>
        </div>
    )
}
