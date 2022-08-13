import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router'
import { MdAddAPhoto } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { BsFacebook, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

import './profile.css'
import { AiOutlineLink } from 'react-icons/ai';
import { Store } from '../../Store';
import { Helmet } from 'react-helmet-async';
import { publicRequest } from '../../requestController';
import { getError } from '../../utils';

const reducer = (state, action) => {
    switch (action.type) {
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


export const Profile = () => {
    const Images_Folder = "http://localhost:5000/images/";
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
        loadingUpdate: false,
    });

    const [Inputs, setInputs] = useState(userInfo)
    const [file, setFile] = useState("")
    
    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };



    const updateHandler = async (e) => { 
        e.preventDefault();
        const updateUser = {
            ...Inputs,
            userId: userInfo._id
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.photo = filename;
            try {
                await publicRequest.post("upload", data);
            }
            catch (err) { }
        }
        try {
            dispatch({ type: 'UPDATE_REQUEST' });
            const { data } = await publicRequest.put( `users/find/${userInfo._id}`, updateUser);
            dispatch({ type: 'UPDATE_SUCCESS', });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(`/${data.userUrl}`);
            // window.location.replace("/post/" + data._id);
        }
        catch (err) {
            dispatch({ type: 'UPDATE_FAIL' });
         }
    }

    return (
        <div className='Profile_Component'>
            <Helmet>
                <title>Settings</title>   
            </Helmet>
            <h2>
                <FcAbout className='icon' />
                About me
            </h2>
            <form onSubmit={updateHandler} className='Profile_Form'>
                <div className='Profile_Form_Container'>
                    <div>
                        <div className='Form_Group_'>
                            <label htmlFor='name'>Full name</label>
                            <input type='text' name='name' value={Inputs.name} placeholder='Enter full name' required onChange={handleChange} />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='fields'>Your field</label>
                            <input type='text' name='fields' value={Inputs.fields} placeholder='web developer,economist,etc..' onChange={handleChange} />
                            <p>Please separate each word with a comma(,)</p>
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' value={Inputs.email} placeholder='Enter your email' required onChange={handleChange} />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' value={Inputs.password} placeholder='Enter your password' required onChange={handleChange} />
                        </div>
                        <div className='Form_Group_'>
                            <label>Photo</label>
                            <div className='Profile_Photo'>
                                {
                                    file ? (
                                        <img className="Profile_Img" src={URL.createObjectURL(file)} alt="Post_Img" />
                                    ) : userInfo.photo ? (
                                        <img className="Profile_Img" src={userInfo.photo && (Images_Folder + userInfo.photo)} alt="Post_Img" />
                                    ) : (
                                        <img className="Profile_Img" src={`${Images_Folder}user.png`} alt="Post_Img" />  
                                    )
                                }
                                <label htmlFor='photo'>
                                    <MdAddAPhoto className='icon' />
                                </label>
                            </div>
                            <input type='file' id='photo' name='photo' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='location'>Location</label>
                            <input type='text' name='location' value={Inputs.location} placeholder='Enter your location' onChange={handleChange} />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='work'>Work at</label>
                            <input type='text' name='work' value={Inputs.work} placeholder='Work at ...' onChange={handleChange} />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='shortBio'>Short bio</label>
                            <textarea type='text' name='shortBio' value={Inputs.shortBio} className='short_bio' placeholder='Add your short bio full name' onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <div className='Form_Group_'>
                            <label htmlFor='keywords'>SEO Keywords</label>
                            <input type='text' name='keywords' value={Inputs.keywords} placeholder='technology,politics,etc...' onChange={handleChange} />
                        </div>
                        <div className='Form_Group_ Username__Url'>
                            <label htmlFor='username' className='Username'>Account URL:</label>
                            <p className='Url_Large'>
                                <AiOutlineLink className='icon' />
                                URL: <span>https://{Inputs.userUrl}</span>
                            </p>
                            <p className='Url_Small'>
                                <span>
                                    <AiOutlineLink className='icon' />
                                    URL:
                                </span>
                                <span>https://blogging.com/@hellenbangs123</span>
                            </p>
                        </div>
                        <div className='Form_Group_ socials'>
                            <label className='Main_Label'>Socials</label>
                            <div className='Connection'>
                                <label htmlFor='your_website'>
                                    <AiOutlineLink className='icon'/>
                                    Connect your Website
                                </label>
                                <input type='text' name='websiteLink' value={Inputs.websiteLink} placeholder='https://websiteName.com' onChange={handleChange} />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='gitHub'>
                                    <BsGithub className='icon'/>
                                    Connect to GitHub
                                </label>
                                <input type='text' name='gitHubLink' value={Inputs.gitHubLink} placeholder='https://github.com/account-name' onChange={handleChange} />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='facebook'>
                                    <BsFacebook className='icon'/>
                                    Connect to Facebook
                                </label>
                                <input type='text' name='facebookLink' value={Inputs.facebookLink} placeholder='https://facebook.com/account-name' onChange={handleChange} />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='twitter'>
                                    <BsTwitter className='icon' />
                                    Connect to Twitter
                                </label>
                                <input type='text' name='twitterLink' value={Inputs.twitterLink} placeholder='https://twitter.com/account-name' onChange={handleChange} />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='instagram'>
                                    <RiInstagramFill className='icon'/>
                                    Connect to Instagram
                                </label>
                                <input type='text' name='instagramLink' value={Inputs.instagramLink} placeholder='https://instagram.com/account-name' onChange={handleChange} />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='youtube'>
                                    <BsYoutube className='icon'/>
                                    Connect to Youtube
                                </label>
                                <input type='text' name='youtubeLink' value={Inputs.youtubeLink} placeholder='https://youtube.com/channel/channel-name' onChange={handleChange} />
                            </div>
                            
                        </div>
                    </div>
                </div>
                {loadingUpdate ? (
                    <button type='submit' className='Update_Profile'>
                        Processing...
                    </button>
                ): (
                    <button type='submit' className='Update_Profile'>
                        Update
                    </button>    
                )}
                
            </form>
        </div>
        
    )
}
