import React, { useState } from 'react'
import Login from './Login.js';
import Modal from 'react-modal';
import Signup from './Signup.js';



export default function StartPage(props) {

    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signupModalOpen, setSignupModalOpen] = useState(false);

    function handleSignInCLick() {
        setLoginModalOpen(true);
    }
    function handleSignUpCLick() {
        setSignupModalOpen(true);
    }
    return (
        <div className="startPage">
            <nav className="navbar" >
                <ul className="navUL">
                    <div className="container">
                        <li className="left">
                            <img id="icon-acnh" src="https://img.icons8.com/clouds/150/000000/animal-crossing.png" />
                        </li>
                        <li className="left">
                            <h1 className="title">Fill My Musuem</h1>
                        </li>
                    </div>

                    <li className="navLI">
                        <button className="navBtn" onClick={handleSignUpCLick}>Sign Up</button>
                    </li>
                    <li className="navLI"><button className="navBtn" onClick={handleSignInCLick}>Sign In</button></li>
                </ul>
            </nav>
            <Modal isOpen={loginModalOpen}>
                <Login setLoginModalOpen={setLoginModalOpen} setUser={props.setUser} />
            </Modal>
            <Modal isOpen={signupModalOpen}>
                <Signup setSignupModalOpen={setSignupModalOpen} />
            </Modal>
            <section>
                <img id="startImg" src="https://i.pinimg.com/1200x/e2/f7/30/e2f73085d8c80ae757b62602b05bfbfb.jpg" alt="nook"></img>
                <div className="info-container">

                </div>
            </section>


        </div>


    );
}
