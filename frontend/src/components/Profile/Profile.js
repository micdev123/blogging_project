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
        <div className='Profile_Component Dark_Mode_Background'>
            <Helmet>
                <title>Settings</title>   
            </Helmet>
            <h2 className='Dark_Mode'>
                <FcAbout className='icon' />
                About me
            </h2>
            <form onSubmit={updateHandler} className='Profile_Form'>
                <div className='Profile_Form_Container'>
                    <div>
                        <div className='Form_Group_'>
                            <label htmlFor='name' className='Dark_Mode'>Full name</label>
                            <input type='text' name='name' value={Inputs.name} placeholder='Enter full name' className='Dark_Mode_Background' required onChange={handleChange} />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='fields' className='Dark_Mode'>Your field</label>
                            <input type='text' name='fields' value={Inputs.fields} placeholder='web developer,economist,etc..' onChange={handleChange} className='Dark_Mode_Background' />
                            <p>Please separate each word with a comma(,)</p>
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='email' className='Dark_Mode'>Email</label>
                            <input type='email' name='email' value={Inputs.email} placeholder='Enter your email' required onChange={handleChange} className='Dark_Mode_Background' />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='password' className='Dark_Mode'>Password</label>
                            <input type='password' name='password' value={Inputs.password} placeholder='Enter your password' required onChange={handleChange} className='Dark_Mode_Background' />
                        </div>
                        <div className='Form_Group_'>
                            <label className='Dark_Mode'>Photo</label>
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
                                    <MdAddAPhoto className='icon Dark_Mode' />
                                </label>
                            </div>
                            <input type='file' id='photo' name='photo' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='location' className='Dark_Mode'>Location</label>
                            <input type='text' name='location' value={Inputs.location} placeholder='Enter your location' onChange={handleChange} className='Dark_Mode_Background' />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='work' className='Dark_Mode'>Work at</label>
                            <input type='text' name='work' value={Inputs.work} placeholder='Work at ...' onChange={handleChange} className='Dark_Mode_Background' />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='shortBio' className='Dark_Mode'>Short bio</label>
                            <textarea type='text' name='shortBio' value={Inputs.shortBio} className='short_bio Dark_Mode_Background' placeholder='Add your short bio full name' onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <div className='Form_Group_'>
                            <label htmlFor='keywords' className='Dark_Mode'>SEO Keywords</label>
                            <input type='text' name='keywords' value={Inputs.keywords} placeholder='technology,politics,etc...' onChange={handleChange} className='Dark_Mode_Background' />
                        </div>
                        <div className='Form_Group_ Username__Url'>
                            <label htmlFor='username' className='Username Dark_Mode'>Account URL:</label>
                            <p className='Url_Large Dark_Mode'>
                                <AiOutlineLink className='icon' />
                                URL: <span>https://{Inputs.userUrl}</span>
                            </p>
                            <p className='Url_Small Dark_Mode'>
                                <span>
                                    <AiOutlineLink className='icon' />
                                    URL:
                                </span>
                                <span>https://blogging.com/@hellenbangs123</span>
                            </p>
                        </div>
                        <div className='Form_Group_ socials'>
                            <label className='Main_Label Dark_Mode'>Socials</label>
                            <div className='Connection'>
                                <label htmlFor='your_website' className='Dark_Mode'>
                                    <AiOutlineLink className='icon'/>
                                    Connect your Website
                                </label>
                                <input type='text' name='websiteLink' value={Inputs.websiteLink} placeholder='https://websiteName.com' onChange={handleChange} className='Dark_Mode_Background Dark_Mode_P' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='gitHub' className='Dark_Mode'>
                                    <BsGithub className='icon'/>
                                    Connect to GitHub
                                </label>
                                <input type='text' name='gitHubLink' value={Inputs.gitHubLink} placeholder='https://github.com/account-name' onChange={handleChange} className='Dark_Mode_Background Dark_Mode_P' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='facebook' className='Dark_Mode'>
                                    <BsFacebook className='icon'/>
                                    Connect to Facebook
                                </label>
                                <input type='text' name='facebookLink' value={Inputs.facebookLink} placeholder='https://facebook.com/account-name' onChange={handleChange} className='Dark_Mode_Background Dark_Mode_P' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='twitter' className='Dark_Mode'>
                                    <BsTwitter className='icon' />
                                    Connect to Twitter
                                </label>
                                <input type='text' name='twitterLink' value={Inputs.twitterLink} placeholder='https://twitter.com/account-name' onChange={handleChange} className='Dark_Mode_Background Dark_Mode_P' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='instagram' className='Dark_Mode'>
                                    <RiInstagramFill className='icon'/>
                                    Connect to Instagram
                                </label>
                                <input type='text' name='instagramLink' value={Inputs.instagramLink} placeholder='https://instagram.com/account-name' onChange={handleChange} className='Dark_Mode_Background Dark_Mode_P' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='youtube' className='Dark_Mode'>
                                    <BsYoutube className='icon'/>
                                    Connect to Youtube
                                </label>
                                <input type='text' name='youtubeLink' value={Inputs.youtubeLink} placeholder='https://youtube.com/channel/channel-name' onChange={handleChange} className='Dark_Mode_Background Dark_Mode_P' />
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
