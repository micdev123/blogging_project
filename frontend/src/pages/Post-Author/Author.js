import React, { useEffect, useReducer, useState } from 'react'
import { Post } from '../../components/Post/Post'
import { MdDateRange, MdWorkspacesFilled } from 'react-icons/md';
import { BiCurrentLocation, BiLike, BiOutline } from 'react-icons/bi';
import { BsFacebook, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { AiOutlineLink } from 'react-icons/ai';
import { format } from "timeago.js"


import './post-author.css'
import { FaRegComment } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';
import { useLocation, useParams } from 'react-router';
import { publicRequest } from '../../requestController';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const initialState = {
    posts: [],
    loading: true,
    error: '',
};


// product reducer to manage product state
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, isLoading: true };
        case 'FETCH_SUCCESS':
            return { ...state, user_posts: action.payload, isLoading: false }; 
        case 'FETCH_FAIL':
            return { ...state, isLoading: false, error: action.payload }; 
        default:
            return state; //Current state
    }
}


export const Author = () => {
    const Images_Folder = "http://localhost:5000/images/";

    const { url } = useParams();
    // const url = location.pathname.split("/")[1];
    console.log(url);

    const [{ isLoading, error, user_posts }, dispatch] = useReducer(reducer, initialState);

    const [authorPosts, setAuthorPost] = useState([]);
    useEffect(() => {
        // fetch products from backend :: Ajax request
        const fetchUserAndPosts = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await publicRequest.get(`posts/author/${url}`);
                setAuthorPost(data);
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
                
            }
            catch (error) {
                dispatch({ type: 'FETCH_FAIL', payload: error.message });
                //console.log("Failed!");
            }
        }
        // called fetchUserAndPosts() fnx
        fetchUserAndPosts();
    }, [url])
    
    return (
        isLoading ? (<div>Loading...</div>) : error ? (<p>{ error }</p>) : (
            <div className='Author_Component'>
                <Helmet>
                    <title>Author</title>     
                </Helmet>
                <div className='Main_Container'>
                    <div className='Author__Container'>
                        <div className='Author_Profile'>
                            <div className='Author_Profile_Head'>
                                {
                                    authorPosts.user && authorPosts.user.photo ? (
                                        <div className='Author__Img'>
                                            <img src={Images_Folder + authorPosts.user.photo} alt={authorPosts.user.photo} />
                                        </div>
                                    ) : (
                                        <div className='Creator'>
                                            <h1>
                                                {authorPosts.user && `${authorPosts.user.name.substring(0, 1)}`}
                                            </h1>
                                        </div>
                                    )
                                }
                                <div className='Author_Head_Content'>
                                    {authorPosts.user && (<h2 className='Author_Name'>{authorPosts.user.name}</h2>)}
                                    
                                    <div className='Author_Fields'>
                                        <p className='Author_Field'>{authorPosts.user && authorPosts.user.fields}</p>
                                    </div>
                                    
                                    <p className='Website_Link'>
                                        <AiOutlineLink className='icon'/>
                                        {authorPosts.user && authorPosts.user.userUrl}
                                    </p>
                                </div>
                            </div>
                            <div className='Author_Profile_Contents'>
                                <div className='Author_Profile_Bio'>
                                    {authorPosts.user && authorPosts.user.shortBio && (
                                        <p>{authorPosts.user.shortBio}</p>
                                    )}
                                </div>
                                <p className='Author_Date_Joined'>
                                    <MdDateRange className='icon' />
                                    Member Since
                                    {authorPosts.user && (
                                        <span>{format(authorPosts.user.createdAt)}</span>
                                    )}
                                </p>
                                {authorPosts.user && authorPosts.user.location && (
                                    <p className='Author_Location'>
                                        <BiCurrentLocation className='icon' />
                                        {authorPosts.user.location}
                                    </p>
                                )}

                                {authorPosts.user && authorPosts.user.work && (
                                    <p className='Author_Job'>
                                        <MdWorkspacesFilled className='icon' />
                                        {authorPosts.user.work}
                                    </p>
                                )}
                                
                                {authorPosts.user && authorPosts.user.keywords && (
                                        <div className='Author_Profile_Keywords'>
                                            {authorPosts.user.keywords.split(', ').map((keyword) => (
                                                <Link to={`/?tag=${keyword}`} className='Keyword'>
                                                    <p>{keyword}</p>
                                                </Link>
                                            ))}
                                        </div>
                                 )}

                                <div className='Author_Profile_Socials'>
                                    {authorPosts.user && authorPosts.user.websiteLink &&(
                                        <a target="_blank" rel="noreferrer" href={authorPosts.user.websiteLink} className='Link'>
                                            <AiOutlineLink className='icon' />
                                        </a>
                                    )}
                                    {authorPosts.user && authorPosts.user.gitHubLink &&(
                                        <a target="_blank" rel="noreferrer" href={authorPosts.user.gitHubLink} className='Link'>
                                            <BsGithub className='icon' />
                                        </a>
                                    )}
                                    {authorPosts.user && authorPosts.user.facebookLink &&(
                                        <a target="_blank" rel="noreferrer" href={authorPosts.user.facebookLink} className='Link'>
                                            <BsFacebook className='icon' />
                                        </a>
                                    )}
                                    {authorPosts.user && authorPosts.user.twitterLink &&(
                                        <a target="_blank" rel="noreferrer" href={authorPosts.user.twitterLink} className='Link'>
                                            <BsTwitter className='icon' />
                                        </a>
                                    )}
                                    {authorPosts.user && authorPosts.user.youtubeLink &&(
                                        <a target="_blank" rel="noreferrer" href={authorPosts.user.youtubeLink} className='Link'>
                                            <BsYoutube className='icon' />
                                        </a>
                                    )}
                                    {authorPosts.user && authorPosts.user.instagramLink &&(
                                        <a target="_blank" rel="noreferrer" href={authorPosts.user.instagramLink} className='Link'>
                                            <RiInstagramFill className='icon' />
                                        </a>
                                    )}

                                </div>
                            </div>
                        </div>
                        <div className='Author_Works'>
                            <div className='Author_Works_Head'>
                                <h2>
                                    <GrArticle className='icon' />
                                    Published Work
                                </h2>
                                <p>
                                    <span>
                                        {authorPosts.posts && authorPosts.posts.length}
                                    </span>
                                    {authorPosts.posts && authorPosts.posts.length === 1 ? 'Post' : 'Posts'} published
                                </p>
                            </div>
                            <div className='Author_Work_Container'>
                                {authorPosts.posts && authorPosts.posts.length !== 0 && (
                                    authorPosts.posts.map((post) => (
                                        <div className='Author_Work'>
                                            <div className='Work_Image'>
                                                <img src={Images_Folder + post.photo} alt='Post_Img' />
                                            </div>
                                            <div className='Author_Work_Contents'>
                                                <div className='Author_Work_Contents_Head'>
                                                    {post.creatorPhoto ? (
                                                        <div className='Work_Head_Left'>
                                                            <img src={Images_Folder + post.creatorPhoto} alt='Author_Img' />
                                                        </div>
                                                        ) : (
                                                            <div className='Creator'>
                                                                <h1>
                                                                    {post.creator && `${post.creator.substring(0, 1)}`}
                                                                </h1>
                                                            </div>
                                                        )
                                                    }
                                                    <div className='Work_Head_Right'>
                                                        <h2>{post.creator}</h2>
                                                        <div className='Work_Head_Right_Foot_'>
                                                            <p>{post.creatorLink}</p>
                                                            <div className='line'></div>
                                                            <p>{format(post.createdAt)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='Work_Contents_Body'>
                                                    <Link to={`/post/${post.slug}_${post._id}`} className='Link'>
                                                        <h2 className='Work_Contents_Body_Title'>
                                                            {post.title}
                                                        </h2>
                                                        <p className='Work_Contents_Body_Desc'>
                                                            {post.desc && `${post.desc.substring(0, 250)}...`}
                                                        </p>
                                                    </Link>
                                                    <div className='Work_Contents_Body_Tags'>
                                                        {post.tags.map((tag) => (
                                                            <Link to={`/?tag=${tag}`} className='Tag'>
                                                                <p>{tag}</p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className='Work_Contents_Foot'>
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
                                        </div>
                                    ))
                                )}
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
