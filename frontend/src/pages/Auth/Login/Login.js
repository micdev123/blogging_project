import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { publicRequest } from '../../../requestController';
import { Store } from '../../../Store';
import { getError } from '../../../utils';


import '../auth.css'


export const Login = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [msg, setMsg] = useState('');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await publicRequest.post('/auth/sign-in', {
                email,
                password,
            });
            // when dispatching you need to set the type and the payload 
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');
        }
        catch (err) {
            setMsg(getError(err));
        }
    }
    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo])

    return (
        <div className='Auth_Component'>
            <Helmet>
                <title>Login</title>     
            </Helmet>
            <div className='Main_Container'>
                <div className='Auth_Container'>
                    <form onSubmit={submitHandler} className='Auth_Form'>
                        {msg && (<p className='msg'>{msg}</p>)}
                        <h2>Login To Your Account</h2>
                        <input type='email' name='email' placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' name='password' placeholder='Enter password' required onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit' className='Auth_Btn'>Login</button>
                        
                        <button className='Info'>
                            <Link to={`/register?redirect=${redirect}`} className='link'>
                                Don't have an account | <span>Register</span>
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
