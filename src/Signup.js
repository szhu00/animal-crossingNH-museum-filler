import React, { useState } from 'react'
import fire from './Firebase.js';
import './style.css';

export default function Signup(props)  {
    const [email, setEmail] = useState('');
    const [passWord, setPassword] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');
    const [passwordErrMsg, setPasswordErrMsg] = useState('');
    const handleCancel = () => {
        props.setSignupModalOpen(false);
    }

    function clearErrors() {
        setPasswordErrMsg('');
        setEmailErrMsg('');
    }

    return (
        <div>
            <div>
                <div className='loginContainer'>
                    <h1>Welcome</h1>
                    <label>Email</label>
                    <input type="text" placeholder="example@Email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <p className="errMsg">{emailErrMsg}</p>

                    <label>Password</label>
                    <input type="password" placeholder="Password has to be 6-digits"
                        value={passWord}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <p className="errMsg">{passwordErrMsg}</p>
                    <button className="formBtn" type="submit" onClick={handleSignUpSubmit} >Sign Up</button>
                    <button className="formBtn" type="reset" className="cancelBtn" onClick={handleCancel}> Cancel</button>

                </div>

            </div>
        </div>
    )


    function handleSignUpSubmit(e) {
        clearErrors();
        e.preventDefault();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, passWord)
            .then(cred => {
                fire.firestore().collection("UserData").doc(cred.user.uid).set({
                    collection: ["placeHolder"],
                    theme:  "light",
                });
                props.setSignupModalOpen(false);
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailErrMsg(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordErrMsg(err.message);
                        break;
                }
            });
    }
}



