import React, { useContext, useEffect, useReducer, useState } from 'react'
import { MdArrowDropDown, MdArticle } from 'react-icons/md'
import { BsFillPenFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { publicRequest } from '../../requestController';
import { Store } from '../../Store';

import './navbar.css'
import { RiLogoutCircleLine } from 'react-icons/ri';


export const Navbar = () => {
    const Images_Folder = "http://localhost:5000/images/";

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [dropdown, setDropdown] = useState(false);

    const signOutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('shippingAddress');
        localStorage.removeItem('cartItems');
        window.location.href = '/login';
    };
    return (
        <div className='Nav_Container'>
            <div className='navigation'>
                <Link to='/' className='logo'>
                    <MdArticle className='icon' />
                    Blogging
                </Link>
                <ul className='navLinks'>
                    {userInfo ? (
                        <div className='LoginUser'>
                            {userInfo.photo ?
                                <div className='UserPhoto'>
                                    <img src={Images_Folder + userInfo.photo} alt='user' />
                                </div>
                                :
                                <div className='UserLogo'>
                                    <h1>
                                        {userInfo.name && `${userInfo.name.substring(0, 1)}`}
                                    </h1>
                                </div>
                            }
                            <div className='DropDown'>
                                <p className='User'>
                                    {userInfo.name}
                                    <MdArrowDropDown className='icon' onClick={(e) => setDropdown(!dropdown)} />
                                </p>
                                {dropdown &&
                                    (
                                        <div className='Dropdown_Menu'>
                                            <Link to='/settings' className='Link'>
                                                <AiFillSetting className='icon' />
                                                Setting
                                            </Link>
                                            <Link to='/' className='Link Logout' onClick={signOutHandler}>
                                                <RiLogoutCircleLine className='icon'/>
                                                Logout
                                            </Link>
                                        </div>
                                    )
                                }      
                            </div>
                        </div>
                    ) : (
                        <Link to='/login' className='navLink state'>
                            <p>Hello, Guest</p>
                            <p>Sign-In</p>
                        </Link>
                    )

                    }
                    <Link to='/write' className='navLink Write'>
                        <p>
                            <BsFillPenFill className='icon'/>
                            Write</p> 
                    </Link>
                </ul>
                
            </div>
        </div>
    )
}
