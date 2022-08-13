import React, { useContext, useEffect, useReducer, useState } from 'react'
import { AuthorRightSide } from '../../components/Author-Right-Side/AuthorRightSide'


import { AiFillEdit, AiFillDelete, AiOutlineLike, AiFillCloseCircle } from 'react-icons/ai'
import { BsFillReplyAllFill } from 'react-icons/bs'
import { HiCubeTransparent } from 'react-icons/hi'

import './single-post.css'
import { RelatedPost } from '../../components/Related-Post/RelatedPost'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { publicRequest, userRequest } from '../../requestController';
import { format } from "timeago.js"
import { Store } from '../../Store';
import { getError } from '../../utils';
import { RightSideCategory } from '../../components/Right-Side-Category/RightSideCategory'
import { Helmet } from 'react-helmet-async'



const initialState = {
    post: [],
    loading: true,
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, isLoading: true };
        case 'FETCH_SUCCESS':
            return { ...state, singlePost: action.payload.singlePost, isLoading: false }; 
        case 'FETCH_FAIL':
            return { ...state, isLoading: false, error: action.payload };
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


export const SinglePost = () => {
    const PF = "http://localhost:5000/images/";
    const navigate = useNavigate();
    
    
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const location = useLocation();
    const slug = location.pathname.split("/")[2];

    const id = slug.split("_")[1];
    // console.log(id);

    const [{ isLoading, error, singlePost, loadingDelete, successDelete, }, dispatch] = useReducer(reducer, initialState);

    const [post, setPost] = useState([]);
    

    useEffect(() => {
        const fetchPost = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await publicRequest.get(`posts/find/${id}`);
                setPost(data);
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            }
            catch (error) {
                dispatch({ type: 'FETCH_FAIL', payload: error.message });
            }
        }
        if (successDelete) {
            dispatch({ type: 'DELETE_RESET' });
        }
        else {
            fetchPost();
        }
    }, [id, successDelete])

    // console.log(post);

    const [rightBar, setRightBar] = useState(false);

    const close_rightBar = () => {
        setRightBar(false);
    }

    const deleteHandler = async () => {
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
        <div className={!rightBar ? 'Single_Post_Component' : 'Set_Fixed'}>
            {loadingDelete && (<div>Loading..</div>)}
            {isLoading ? (<div>Loading..</div>) : error ? (<div>{error}</div>) : (
                <>
                    <Helmet>
                        <title>{post.title}</title>
                    </Helmet>
                    <div className={!rightBar ? 'Display_None' : 'Overlay_Single_Post'}></div>
                    <div className='Main_Container'>
                    <div className='Single_Post_Container'>
                        <div className='Single_Post_Left'>
                            <div className='Single_Post'>
                                <div className='Single_Post_Img'>
                                    <img src={PF + post.photo} alt='Single_Post_Img' />
                                </div>
                                <div className='Single_Post_Left_Contents'>
                                    <div className='Single_Post_Left_Head'>
                                        <div className='Post_Head_Left'>
                                            {
                                                post.creatorPhoto ? (
                                                    <div className='Creator_Img'>
                                                        <img src={post.creatorPhoto} alt={post.creator} />
                                                    </div>
                                                ) : (
                                                    <div className='Creator'>
                                                        <h1>
                                                            {post.creator && `${post.creator.substring(0, 1)}`}
                                                        </h1>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className='Post_Head_Right'>
                                            <Link to={`/${post.creatorLink}`} className='Link'>
                                                <h2>{post.creator}</h2>
                                            </Link>
                                            <div className='Post_Head_Right_Foot'>
                                                <div className='Foot_Left'>
                                                    <Link to={`/${post.creatorLink}`} className='Link'>
                                                        <p>{post.creatorLink}</p>
                                                    </Link>
                                                    
                                                    <div className='line_'></div>
                                                    <p>{format(post.createdAt)}</p>
                                                </div>
                                                {userInfo && post.creatorId === userInfo._id && (
                                                    <div className='Single_Post_Actions'>
                                                        <AiFillEdit className='icon edit' onClick={() => navigate(`/updatePost/${post._id}`)} />
                                                        <AiFillDelete className='icon trash' onClick={deleteHandler} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h2 className='Single_Post_Title'>
                                        {post.title}
                                    </h2>
                                    <div className='Single_Post_Body'>
                                        <p>
                                            {post.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='Single_Post_Left_Footer'>
                                <div className='Pagination'>
                                    <div className='Previous'>
                                        <div className='Pagination_Overlay'></div>
                                        <img src='/assets/featured.png' alt='Previous' />
                                        <div className='Pagination_Content'>
                                            <h2>Data Structure In Javascript</h2>
                                            <p>Previous</p>
                                        </div>
                                    </div>
                                    <div className='Next'>
                                        <div className='Pagination_Overlay'></div>
                                        <img src='/assets/blog-img.png' alt='Next' />
                                        <div className='Pagination_Content'>
                                            <h2>Recursion In JavaScript</h2>
                                            <p>Next</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Single_Comments'>
                                    <div className='Comment_Head'>
                                        <h2>Comments(2)</h2>
                                        <button className='Comment_Btn'>
                                            <AiFillEdit className='icon'/>
                                            Leave a comment
                                        </button>
                                    </div>
                                    <div className='Comment_Form'></div>
                                    <div className='Comments'>
                                        <div className='Single_Comment'>
                                            <div className='Commenter_Head'>
                                                <div className='Commenter_Img'>
                                                    <img src='/assets/blog1.png' alt='Commenter_Img' />
                                                </div>
                                                <div className='Commenter_Info'>
                                                    <h2>Hellen Bangura</h2>
                                                    <div>
                                                        <p>Web Developer</p>
                                                        <p>1 hour ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Comment_Body'>
                                                <p>
                                                    Proident laborum aute aliqua consequat ad pariatur non cillum magna magna consequat duis ad. Officia veniam nisi proident enim aute in exercitation adipisicing est in deserunt tempor labore commodo. Sunt elit ipsum magna minim sunt pariatur ipsum ea dolore dolor culpa elit.
                                                </p>
                                                <div className='Single_Comment_Actions'>
                                                    <p className='Reply_Btn'>
                                                        <BsFillReplyAllFill className='icon' />
                                                        Reply
                                                    </p>
                                                    <p className='line_'></p>
                                                    <p>
                                                        <AiOutlineLike className='icon' />
                                                        <span>1</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='Reply_Container'>
                                                <div className='Reply_Head'>
                                                    <div className='Replier_Img'>
                                                        <img src='/assets/blog1.png' alt='Replyer_Img' />
                                                    </div>
                                                    <div className='Replier_Info'>
                                                        <h2>Hellen Bangura</h2>
                                                        <div>
                                                            <p>Web Developer</p>
                                                            <p>1 hour ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='Reply_Body'>
                                                    <p>
                                                        Proident laborum aute aliqua consequat ad pariatur non cillum magna magna consequat duis ad. Officia veniam nisi proident enim aute in exercitation adipisicing est in deserunt tempor labore commodo. Sunt elit ipsum magna minim sunt pariatur ipsum ea dolore dolor culpa elit.
                                                    </p>
                                                </div>
                                                <div className='Reply_Actions'>
                                                    <p className='Reply_Btn'>
                                                        <BsFillReplyAllFill className='icon' />
                                                        Reply
                                                    </p>
                                                    <p className='line_'></p>
                                                    <p>
                                                        <AiOutlineLike className='icon' />
                                                        <span>1</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='Single_Post_Right'>
                            <div className='Single_Post_Author'>
                                <AuthorRightSide author={post.creatorId} />
                                <div className='Categories_'>
                                    <h2>Categories</h2>
                                    
                                    <div className='Category'>
                                        <RightSideCategory />
                                    </div>
                                </div>
                                <RelatedPost />
                            </div>
                        </div>

                        <div className='Right_Sidebar_Icon'>
                            <HiCubeTransparent className='icon' onClick={(e) => setRightBar(!rightBar)} />
                        </div>

                        {rightBar && (
                            <div className='Single_Post_Right_Small_Screen'>
                                <AiFillCloseCircle className='Close_Sidebar' onClick={close_rightBar} />
                                <div className='Single_Post_Author'>
                                    <AuthorRightSide />
                                    <div className='Categories_'>
                                        <h2>Categories</h2>
                                        <div className='Category'>
                                            <p>Education</p>
                                            <p>Medicine</p>
                                            <p>Politics</p>
                                            <p>Motivation</p>
                                            <p>Economy</p>
                                        </div>
                                    </div>
                                    <RelatedPost className='RelatedPosts' />
                                </div>
                            </div>
                        )}
                    </div>
                    </div>
                </>
            )}
        </div>
        
    )
}
