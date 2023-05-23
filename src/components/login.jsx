import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useCookies } from 'react-cookie';


function LoginPage() {
    const [cookie, setCookie] = useCookies(["aswin"])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);

    // const onSubmit = async (e) => {
    //     const response = await getOauthResponse(email)

    //     let expires = new Date()
    //     expires.setTime(expires.getTime() + (response.data.expires_in * 1000))
    //     setCookie('access_token', response.data.access_token, { path: '/', expires })
    //     setCookie('refresh_token', response.data.refresh_token, { path: '/', expires })
    // }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get('http://localhost:8000/login/', {
            params: {
                email, password
            }
        })
        console.log(res.data)
        if (res.status == 200) {
            setCookie(email, "12345678", {
                path: "/"
            })
            setRedirectToHome(true)
        }
        setEmail('');
        setPassword('');
    };
    if (redirectToHome) { return <Navbar /> }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 bg-gray-100 p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Login
                    </button>
                    <p>Don't have an account <a href='/register' color='blue'>Register</a></p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
