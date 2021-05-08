import React, { useState } from 'react'
import fire from './Firebase.js';
import './style.css';



export default function Login({ setLoginModalOpen, setUser }) {

    const [email, setEmail] = useState('');
    const [passWord, setPassword] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');
    const [passwordErrMsg, setPasswordErrMsg] = useState('');
    const handleCancel = () => {
        setLoginModalOpen(false);
    }

    function clearErrors() {
        setPasswordErrMsg('');
        setEmailErrMsg('');
    }
    return (

        <div>
            <div className='loginContainer'>
                <h1>Login</h1>
                <label>Email</label>
                <input type="text" placeholder="example@Email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                <p className="errMsg">{emailErrMsg}</p>

                <label>Password</label>
                <input type="password" placeholder="Enter your password"
                    value={passWord}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <p className="errMsg">{passwordErrMsg}</p>

                <button className="formBtn" type="submit" onClick={handleLoginSubmit}>Log In</button>
                <button className="formBtn" type="reset" className="cancelBtn" onClick={handleCancel}> Cancel</button>
               
            </div>

        </div>

    )


    function handleLoginSubmit(e) {
        clearErrors();
        e.preventDefault();
        fire
            .auth()
            .signInWithEmailAndPassword(email, passWord)
            .then(() => {
                setLoginModalOpen(false);
                updateAuthState();
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailErrMsg(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordErrMsg(err.message);
                        break;
                }
            });


    }

    function updateAuthState() {

        fire.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);

            } else {
                setUser('');

            }
        })
    }
}
