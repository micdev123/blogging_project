import React, { useEffect, useState } from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsFacebook } from 'react-icons/bs'
import { FaFacebook, FaTiktok } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'
import { publicRequest } from '../../requestController';
import { Link } from 'react-router-dom'

import './author-right-side.css'
import { AiOutlineLink } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';


export const AuthorRightSide = ({ author }) => {
    const Images_Folder = "http://localhost:5000/images/";

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const { data } = await publicRequest.get(`/users/find/${author}`);
            setUser(data);
        }
        catch (err) {
            console.log('Not Found');
        }
        };
        fetchUser();
    }, [author]);
    console.log(user);
    return (
        <div className='Author_RightSide_Component'>
            {
                user.photo ? (
                    <div className='Author_RightSide_Img'>
                        <img src={Images_Folder + user.photo} alt={user.name} />
                    </div>
                ) : (
                    <div className='Creator'>
                        <h1>
                            {user.name && `${user.name.substring(0, 1)}`}
                        </h1>
                    </div>
                )
            }
            <div className='Author_RightSide_Title'>
                <h2>{user.name}</h2>
                {user.fields &&  (<p className='Author_Fields'>{user.fields}</p>)}
            </div>
            {user.shortBio && (<p className='Author_RightSide_Desc'>{user.shortBio}</p>)}
            <div className='Author_RightSide_socials'>
                {user && user.websiteLink &&(
                    <a target="_blank" rel="noreferrer" href={user.websiteLink} className='Link'>
                        <AiOutlineLink className='icon' />
                    </a>
                )}
                {user && user.gitHubLink &&(
                    <a target="_blank" rel="noreferrer" href={user.gitHubLink} className='Link'>
                        <BsGithub className='icon' />
                    </a>
                )}
                {user && user.facebookLink &&(
                    <a target="_blank" rel="noreferrer" href={user.facebookLink} className='Link'>
                        <BsFacebook className='icon' />
                    </a>
                )}
                {user && user.twitterLink &&(
                    <a target="_blank" rel="noreferrer" href={user.twitterLink} className='Link'>
                        <BsTwitter className='icon' />
                    </a>
                )}
                {user && user.youtubeLink &&(
                    <a target="_blank" rel="noreferrer" href={user.youtubeLink} className='Link'>
                        <BsYoutube className='icon' />
                    </a>
                )}
                {user && user.instagramLink &&(
                    <a target="_blank" rel="noreferrer" href={user.instagramLink} className='Link'>
                        <RiInstagramFill className='icon' />
                    </a>
                )}
            </div>

            <Link to={`/${user.userUrl}`} className='Author_RightSide_btn'>
                View work
            </Link>
        </div>
    )
}
