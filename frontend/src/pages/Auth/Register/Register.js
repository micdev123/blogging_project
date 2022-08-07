import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export const Register = () => {
    return (
        <div className='Auth_Component'>
            <div className='Main_Container'>
                <div className='Auth_Container'>
                    <form className='Auth_Form'>
                        <h2>Create An Account</h2>
                        <input type='text' placeholder='Enter username' required />
                        <input type='email' placeholder='Enter email' required />
                        <input type='password' placeholder='Enter password' required />
                        <button className='Auth_Btn'>Register</button>
                        <p>OR</p>
                        <button className='Auth_Google_Btn'>
                            <FcGoogle className='icon' />
                            Continue with google
                        </button>
                        <button className='Info'>
                            Already have an account | <span>Login</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
