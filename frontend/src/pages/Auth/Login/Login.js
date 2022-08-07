import React from 'react'
import { FcGoogle } from 'react-icons/fc'

import '../auth.css'

export const Login = () => {
    return (
        <div className='Auth_Component'>
            <div className='Main_Container'>
                <div className='Auth_Container'>
                    <form className='Auth_Form'>
                        <h2>Login To Your Account</h2>
                        <input type='email' placeholder='Enter email' required />
                        <input type='password' placeholder='Enter password' required />
                        <button className='Auth_Btn'>Login</button>
                        <p>OR</p>
                        <button className='Auth_Google_Btn'>
                            <FcGoogle className='icon' />
                            Continue with google
                        </button>
                        <button className='Info'>
                            Don't have an account | <span>Register</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
