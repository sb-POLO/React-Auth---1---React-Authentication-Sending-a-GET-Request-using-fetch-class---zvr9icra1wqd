import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { signup } from '../api/auth';

export const Signup = () => {
    const navigateToSignin = useNavigate();
    const [userDeatils, setUserDetails] = useState({ email: '', password: '' });
    const [signupResponse, setSignupResponse] = useState({ statusCode: null, message: '' });

    const handleSumbit = async (event) => {
        event.preventDefault();
        await signup({ email: userDeatils.email, password: userDeatils.password })
            .then((resolveResponse) => setSignupResponse({ statusCode: resolveResponse.statusCode, message: resolveResponse.message }))
            .catch((rejectResponse) => setSignupResponse({ statusCode: rejectResponse.statusCode, message: rejectResponse.message }))

        navigateToSignin('/signin');
    }
    return (
        <div id="signin-page">
            <h1>Sign Up page</h1>
            <div>
                <form onSubmit={handleSumbit}>
                    <input
                        type={'email'}
                        placeholder='Email'
                        onChange={(e) => setUserDetails({ ...userDeatils, email: e.target.value })}
                        required />
                    <br />
                    <input
                        type={'password'}
                        placeholder='Password'
                        onChange={(e) => setUserDetails({ ...userDeatils, password: e.target.value })}
                        required />
                    <br />
                    <button type='submit'>Signup</button>
                </form>
            </div>
        </div>
    )
}