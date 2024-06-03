import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import './Login.css'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
// it successfully created a new user with wmail and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        //do some fancy firebase register

       
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
                className="login__logo" 
                src='https://th.bing.com/th/id/OIP.drh1URyUj_AxtgtkdqD3FQHaCS?w=310&h=108&c=7&r=0&o=5&dpr=1.25&pid=1.7' alt=""/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account
                </button>
           
            </div>
        </div>     
    )
}

export default Login
