import React, { useContext, useReducer } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';
import { publicRequest } from '../../requestController';
import { Store } from '../../Store';

import './article.css'

const initialState = {
    post: [],
    loading: true,
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_REQUEST':
            return { ...state, loadingDelete: true, successDelete: false };
        case 'DELETE_SUCCESS':
            return {
                ...state,
                loadingDelete: false,
                successDelete: true,
            };
        case 'DELETE_FAIL':
            return { ...state, loadingDelete: false, successDelete: false };

        case 'DELETE_RESET':
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state; //Current state
    }
}

export const Article = ({ post }) => {
    const Images_Folder = "http://localhost:5000/images/";
    const navigate = useNavigate();
    
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [{ loadingDelete, successDelete, }, dispatch] = useReducer(reducer, initialState);

    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure to delete?')) {
            try {
                await publicRequest.delete(`posts/${id}`, {
                    data: { creator: userInfo.name },
                });
                dispatch({ type: 'DELETE_SUCCESS' });
                navigate(`/`);
            }
            catch (err) {
                dispatch({ type: 'DELETE_FAIL', });
            }
        }
    };
    return (
        <div className='Article_Component'>
            <div className='Article_Image'>
                <img src={Images_Folder + post.photo} alt='Post_Img' />
            </div>
            <div className='Author_Article_Contents'>
                <p className='Author_Article_Date Dark_Mode_P'>{format(post.createdAt)}</p>
                <div className='Author_Article_Contents_Head'>
                    {post.creatorPhoto ? (
                        <div className='Article_Head_Left'>
                            <img src={Images_Folder + post.creatorPhoto} alt='Author_Img' />
                        </div>
                        ) : (
                            <div className='Creator_'>
                                <h1 className='Dark_Mode'>
                                    {post.creator && `${post.creator.substring(0, 1)}`}
                                </h1>
                            </div>
                        )
                    }
                    <div className='Article_Head_Right'>
                        <div className='Article_Head_Right_Foot'>
                            <Link to={`/${post.creatorLink}`} className='Link'>
                                <h2 className='Dark_Mode'>{post.creator}</h2>
                            </Link>
                            <Link to={`/${post.creatorLink}`} className='Link'>
                                <p className='Dark_Mode_P'>{post.creatorLink}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='Article_Contents_Body'>
                    <Link to={`/post/${post.slug}_${post._id}`} className='Link'>
                        <h2 className='Article_Contents_Body_Title Dark_Mode'>
                            {post.title}
                        </h2>
                        <h2 className='Small_Screen_Post_Title Dark_Mode'>
                            {post?.title.length > 50 ? `${post.title.substring(0, 45)}...` : post?.title}
                        </h2>
                        <p className='Article_Contents_Body_Desc Dark_Mode_P'>
                            {post.desc && `${post.desc.substring(0, 220)}...`}
                        </p>
                    </Link>
                </div> 
            </div>
        </div>
    )
}
