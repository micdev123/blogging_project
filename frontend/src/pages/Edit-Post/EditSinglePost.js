import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { MdPublish } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router'
import { publicRequest, userRequest } from '../../requestController'
import { Store } from '../../Store'
import { getError } from '../../utils'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                singlePost: action.payload.singlePost,
                loading: false
            };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'UPDATE_REQUEST':
            return { ...state, loadingUpdate: true };
        case 'UPDATE_SUCCESS':
            return { ...state, loadingUpdate: false };
        case 'UPDATE_FAIL':
            return { ...state, loadingUpdate: false };
        default:
            return state;
    }
};


export const EditSinglePost = () => {
    const Images_Folder = "http://localhost:5000/images/";
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [{ loading, singlePost, error, loadingUpdate, }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
    });

    const [post, setPost] = useState([]);
    
    const [Inputs, setInputs] = useState({})
    const [file, setFile] = useState("")


    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await publicRequest.get(`posts/find/${id}`);
                setPost(data);
                setInputs(data)
                dispatch({ type: 'FETCH_SUCCESS', payload: data  });
            }
            catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(err),});
            }
        };
        fetchData();
    }, [id]);

    const [openFormSideBar, setFormSideBar] = useState(false);
    
    const closeFormSideBar = () => {
        setFormSideBar(false);
    }
    
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const updatePost = {
            ...Inputs,
            creator: userInfo.name,
            creatorPhoto: userInfo.photo
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatePost.photo = filename;
            try {
                await userRequest.post("upload", data);
            }
            catch (err) { }
        }
        try {
            dispatch({ type: 'UPDATE_REQUEST' });
            await userRequest.put( `posts/${id}`, updatePost);
            dispatch({ type: 'UPDATE_SUCCESS', });
            navigate(`/post/${post.slug}_${post._id}`);
            // window.location.replace("/post/" + data._id);
        }
        catch (err) {
            dispatch({ type: 'UPDATE_FAIL' });
         }

    }
    return (
        loading ? (<div>Loading..</div>) : error ? (<p className="danger">{error}</p>) : (
            <div className={!openFormSideBar ? 'EditSinglePost' : 'Set_Fixed Dark_Mode_Background'}>
                <div className={openFormSideBar && 'Overlay_Form_Post'}></div>
                <Helmet>
                    <title>Updating: {post.title} </title>   
                </Helmet>
                <div className='Main_Container'>
                    <div className='Write_Container Dark_Mode_Background'>
                        {
                            file ? (
                                <img className="Write_Img" src={URL.createObjectURL(file)} alt="Post_Img" />
                            ) : (
                                <img className="Write_Img" src={post.photo && (Images_Folder + post.photo)} alt="Post_Img" />
                            )
                        }
                        
                        <form className='Write_Form_Container' onSubmit={submitHandler}>
                            <div className='Form_Group'>
                                <label htmlFor='File_Input'>
                                    <BiMessageSquareAdd className='icon' />
                                </label>
                                <input type='file' id='File_Input' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                                <input type='text' placeholder='Title' className='Text_Input Dark_Mode_Background' autoFocus={true} name='title' value = {Inputs.title} onChange={handleChange} required />
                            </div>
                            <div className='Form_Group'>
                                <textarea placeholder='Tell your story...' type='text' className='Text_Input Textarea Dark_Mode_Background' name='desc' value = {Inputs.desc} onChange={handleChange} required></textarea>
                            </div>
                            <p onClick={(e) => e.target(setFormSideBar(!openFormSideBar))} className='Publish'>
                                Publish
                            </p>
                            {openFormSideBar && (
                                <div className='Form_SideBar Dark_Mode_Background'>
                                    <AiOutlineCloseCircle className='CloseBtn' onClick={closeFormSideBar}/>
                                    <div className='SideBar_Form_Group'>
                                        <label htmlFor='keywords' className='Dark_Mode'>SEO Title | Slug</label>
                                        <input type='text' placeholder='key-to-blogging' className='Input Dark_Mode_P' name='slug' value={Inputs.slug} onChange={handleChange} required />
                                        <p>Please separate each word with hyphen(-) with no spacing</p>
                                    </div>
                                    <div className='SideBar_Form_Group'>
                                        <label htmlFor='keywords' className='Dark_Mode'>Post Keywords | Tags</label>
                                        <input type='text' placeholder='technology,javaScript,etc...' className='Input Dark_Mode_P' name='tags' value={Inputs.tags} onChange={handleChange} required />
                                        <p>Please separate each word with a comma(,) with no spacing</p>
                                </div>
                                <div className='SideBar_Form_Group'>
                                        <label htmlFor='duration' className='Dark_Mode'>Duration</label>
                                        <input type='number' placeholder='2 min, 35 min, etc...' className='Input Dark_Mode_P' name='duration' value={Inputs.duration} onChange={handleChange} required />
                                        <p>Please only the number</p>
                                    </div>
                                    <div className='SideBar_Form_Group'>
                                        <label htmlFor='keywords' className='Dark_Mode'>Publish post on</label>
                                        <input type='text' name='creatorLink' value={Inputs.creatorLink} className='Input Dark_Mode_P' onChange={handleChange} required />
                                    </div>
                                    {loadingUpdate ? (
                                        <button type='submit' className='Now_Publish'>
                                            Processing...
                                        </button>
                                    ): (
                                        <button type='submit' className='Now_Publish'>
                                            <MdPublish className='icon'/>
                                            Update
                                        </button>    
                                    )}
                                </div>
                            )}
                        </form>
                        <p onClick={() => setFormSideBar(!openFormSideBar)} className='Mobile_Publish'>
                        Publish
                    </p>
                    </div>
                </div>
            </div>
        )
    )
}
