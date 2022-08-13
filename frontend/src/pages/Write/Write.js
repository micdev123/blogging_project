import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdPublish } from 'react-icons/md';


import { Store } from '../../Store';

import './write.css'
import { publicRequest, userRequest } from '../../requestController';
import { useNavigate } from 'react-router';

const initialState = {
    user: [],
    loading: true,
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_REQUEST':
            return { ...state, loadingCreate: true };
        case 'CREATE_SUCCESS':
            return {
                ...state,
                loadingCreate: false,
            };
        case 'CREATE_FAIL':
            return { ...state, loadingCreate: false };
        default:
            return state;
    }
};


export const Write = () => {
    const navigate = useNavigate();
    const { state } = useContext(Store);
    const { userInfo } = state;

    const [{ error, loadingCreate, }, dispatch, ] = useReducer(reducer, {
        loading: true,
        error: '',
    });

    const [openFormSideBar, setFormSideBar] = useState(false);
    
    const closeFormSideBar = () => {
        setFormSideBar(false);
    }
    
    
    const titleRef = useRef();
    const slugRef = useRef();
    const tagsRef = useRef();
    const descRef = useRef();
    const userLinkRef = useRef();
    const [file, setFile] = useState("")
   
    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            title: titleRef.current.value,
            slug: slugRef.current.value,
            desc: descRef.current.value,
            tags: tagsRef.current.value.split(','),
            creatorId: userInfo._id,
            creator: userInfo.name,
            creatorPhoto: userInfo.photo,
            creatorLink: userInfo.userUrl
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await publicRequest.post("upload", data);
            }
            catch (err) { }
        }
        try {
            dispatch({ type: 'CREATE_REQUEST' });
            await publicRequest.post("posts", newPost);
            dispatch({ type: 'CREATE_SUCCESS' });
            navigate(`/`);
            // window.location.replace("/post/" + data._id);
        }
        catch (err) { }

    }
    return (
        <div className={!openFormSideBar ? 'Write_Component' : 'Set_Fixed'}>
            <div className={openFormSideBar && 'Overlay_Form_Post'}></div>
            <Helmet>
                <title>Write</title>   
            </Helmet>
            <div className='Main_Container'>
                <div className='Write_Container'>
                    {file && (
                        <img className="Write_Img" src={URL.createObjectURL(file)} alt="Post_Img" />
                    )}
                
                    <form className='Write_Form_Container' onSubmit={submitHandler}>
                        <div className='Form_Group'>
                            <label htmlFor='File_Input'>
                                <BiMessageSquareAdd className='icon' />
                            </label>
                            <input type='file' id='File_Input' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                            <input type='text' placeholder='Title' className='Text_Input' autoFocus={true} required ref={titleRef} />
                        </div>
                        <div className='Form_Group'>
                            <textarea placeholder='Tell your story...' type='text' className='Text_Input Textarea' name='desc' required ref={descRef}></textarea>
                        </div>
                        <p onClick={(e) => e.target(setFormSideBar(!openFormSideBar))} className='Publish'>
                            Publish
                        </p>
                        {openFormSideBar && (
                            <div className='Form_SideBar'>
                                <AiOutlineCloseCircle className='CloseBtn' onClick={closeFormSideBar}/>
                                <div className='SideBar_Form_Group'>
                                    <label htmlFor='keywords'>SEO Title | Slug</label>
                                    <input type='text' placeholder='key-to-blogging' className='Input' name='slug' required ref={slugRef} />
                                    <p>Please separate each word with hyphen(-) with no spacing</p>
                                </div>
                                <div className='SideBar_Form_Group'>
                                    <label htmlFor='keywords'>Post Keywords | Tags</label>
                                    <input type='text' placeholder='technology,javaScript,etc...' className='Input' name='tags' required ref={tagsRef} />
                                    <p>Please separate each word with a comma(,) with no spacing</p>
                                </div>
                                <div className='SideBar_Form_Group'>
                                    <label htmlFor='keywords'>Publish post on</label>
                                    <input type='text' name='creatorLink' value={userInfo.userUrl} className='Input' required ref={userLinkRef} />
                                </div>
                                {loadingCreate ? (
                                    <button type='submit' className='Now_Publish' >
                                        Processing...
                                    </button>
                                ): (
                                    <button type='submit' className='Now_Publish' >
                                        <MdPublish className='icon'/>
                                        Publish
                                    </button>    
                                )}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
