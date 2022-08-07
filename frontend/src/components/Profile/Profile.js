import React from 'react'
import { MdAddAPhoto } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

import './profile.css'
import { AiOutlineLink } from 'react-icons/ai';


export const Profile = () => {
    return (
        <div className='Profile_Component'>
            <h2>
                <FcAbout className='icon' />
                About me
            </h2>
            <form className='Profile_Form'>
                <div className='Profile_Form_Container'>
                    <div>
                        <div className='Form_Group_'>
                            <label htmlFor='name'>Full name</label>
                            <input type='text' id='name' placeholder='Enter full name' required />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='your_field'>Your field</label>
                            <input type='text' id='your_field' placeholder='web developer, economist etc..' required />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' placeholder='Enter your email' required />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' placeholder='Enter your password' required />
                        </div>
                        <div className='Form_Group_'>
                            <label>Photo</label>
                            <div className='Profile_Photo'>
                                <img src='./assets/blog1.png' alt='profile_img' />
                                <label htmlFor='photo'>
                                    <MdAddAPhoto className='icon' />
                                </label>
                            </div>
                            <input type='file' id='photo' style={{display:'none'}} />
                        </div>
                        <div className='Form_Group_'>
                            <label htmlFor='shortBio'>Short bio</label>
                            <textarea type='text' id='shortBio' className='short_bio' placeholder='Add your short bio full name' />
                        </div>
                    </div>

                    <div>
                        <div className='Form_Group_ Username__Url'>
                            <label className='Main_Label'>Username & URL</label>
                            <div className='username_url'>
                                <label htmlFor='username' className='Username'>Username:</label>
                                <input type='text' id='username' placeholder='Enter full name' required />
                            </div>
                            <p className='Url_Large'>
                                <AiOutlineLink className='icon' />
                                URL: <span>https://blogging.com/@hellenbangs123</span>
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
                                <input type='text' id='your_website' placeholder='https://hellenbangs.com' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='facebook'>
                                    <BsFacebook className='icon'/>
                                    Connect to Facebook
                                </label>
                                <input type='text' id='facebook' placeholder='https://facebook.com/johndoe' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='twitter'>
                                    <BsTwitter className='icon' />
                                    Connect to Twitter
                                </label>
                                <input type='text' id='twitter' placeholder='https://twitter.com/johndoe' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='instagram'>
                                    <RiInstagramFill className='icon'/>
                                    Connect to Instagram
                                </label>
                                <input type='text' id='instagram' placeholder='https://instagram.com/johndoe' />
                            </div>
                            <div className='Connection'>
                                <label htmlFor='youtube'>
                                    <BsYoutube className='icon'/>
                                    Connect to Youtube
                                </label>
                                <input type='text' id='youtube' placeholder='https://youtube.com/channel/channel-name' />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <button className='Update_Profile'>Update</button>
            </form>
        </div>
    )
}
