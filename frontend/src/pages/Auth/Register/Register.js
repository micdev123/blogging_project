import React, { useContext, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../../../Store';
import { publicRequest } from '../../../requestController';
import { getError } from '../../../utils';

export const Register = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [msg, setMsg] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmedPasswordRef = useRef()

    // console.log(name, email, password);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {
        e.preventDefault();
            if (passwordRef.current.value !== confirmedPasswordRef.current.value) {
            setMsg('Passwords do not match');
            return;
        }
        try {
            const { data } = await publicRequest.post('/auth/signup', {
                name: nameRef.current.value,
                password: passwordRef.current.value,
                email: emailRef.current.value,
                userUrl: emailRef.current.value.split('@')[0] + '.blogging.com'
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
    }, [navigate, redirect, userInfo]);


    return (
        <div className='Auth_Component'>
            <div className='Main_Container'>
                <Helmet>
                    <title>Register</title>     
                </Helmet>
                <div className='Auth_Container'>
                    <form className='Auth_Form' onSubmit={submitHandler}>
                        {msg && (<p className='msg'>{msg}</p>)}
                        <h2>Create An Account</h2>
                        <input type='text' name='name' placeholder='Enter full name' required ref={nameRef} />
                        <input type='email' name='email' placeholder='Enter email' required ref={emailRef} />
                        <input type='password' name='password' placeholder='Enter password' required ref={passwordRef} />
                        <input type='password' name='confirm_password' placeholder='confirm password' ref={confirmedPasswordRef}  required  />
                        <button type='submit' className='Auth_Btn'>Register</button>
                        
                        <button className='Info'>
                            <Link to={`/login?redirect=${redirect}`} className='link'>
                                Already have an account | <span>Login</span>
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
