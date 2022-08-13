import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { publicRequest } from '../../requestController';

import './right-side-category.css'

export const RightSideCategory = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const getTags = async () => {
            const { data } = await publicRequest.get("posts/tags");
            setTags(data);
        };
        getTags();
    }, []);
    
    const values = Object.values(tags)

    const postTags = [];
    values.forEach((item) => {
        item.forEach((object) => {
            //  console.log(object);
            for (let i in object) {
                // console.log(object[i]);
                for (var j in object[i]) {
                    // console.log(object[i][j]._id);
                    postTags.push(object[i][j]._id)
               }
            }
         });
    });
    return (
        <div className='RightSideCategory_Component'>
            {postTags && postTags.map((tag) => (
                <Link to={`/?tag=${tag}`} className='Tag'>
                    <p>{tag}</p>
                </Link>  
            ))}
        </div>
    )
}
