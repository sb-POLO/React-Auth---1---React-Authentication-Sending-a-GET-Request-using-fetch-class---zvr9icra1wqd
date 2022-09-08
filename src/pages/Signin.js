import React, { useState } from 'react';
import { signin } from '../api/auth';
import { useNavigate } from 'react-router';
import { useAuth } from '../components/loginAuth';


export const Signin = () => {
    const [userDeatils, setUserDetails] = useState({ email: '', password: '' });
    const [signinResponse, setSigninResponse] = useState({ statusCode: null, message: '' });
    const auth = useAuth();
    const navigateToHome = useNavigate();

    const handleSumbit = async (event) => {
        event.preventDefault();
        await signin({ email: userDeatils.email, password: userDeatils.password })
            .then((resolveResponse) => setSigninResponse({ statusCode: resolveResponse.statusCode, message: resolveResponse.message }))
            .catch((rejectResponse) => setSigninResponse({ statusCode: rejectResponse.statusCode, message: rejectResponse.message }))
    }

    if (auth.authenticateUser(signinResponse.statusCode, userDeatils.email)) {
        navigateToHome('/home');
    }

    return (
        <div id="signin-page">
            <h1>Sign in page</h1>
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
                    <button type='submit'>Signin</button>
                </form>
                {signinResponse.statusCode && signinResponse.statusCode !== 200 && <div className='error-txt'>Wrong email or password</div>}
            </div>
        </div>
    )
}