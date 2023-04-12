import React from 'react';
import { FcGoogle } from "react-icons/fc"
import { auth, provider } from '../../Firebase/firebaseconfig';
import { Navigate } from "react-router-dom";
const Create = () => {
    const handleAuthWithGoogle = () => {
        auth.signInWithPopup(provider)
        .then(res => {
            if(res.user.emailVerified){
                window.localStorage.setItem("user", JSON.stringify(res.user))

                window.location.href = "/"
            }
        })
    }
    return (
        <div>
            <form>
                <input type="text" placeholder='Fullname'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
            </form>
            <button onClick={handleAuthWithGoogle}>
                <FcGoogle/>
                Продолжить через Google
            </button>
        </div>
    );
}

export default Create;
