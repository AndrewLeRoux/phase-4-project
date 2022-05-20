import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm"

function Login({ onLogin }) {

    const [showLogin, setShowLogin] = useState(true);

    
    return (
        <div>
            <h1>AndysList</h1>
            {showLogin ? ( 
                <>
                <LoginForm onLogin = {onLogin} />
                <p>Need to create an account?</p>
                <button onClick = { () => setShowLogin(false)}> Signup</button>
                </>
                ) : (
                <>
                <SignUpForm onLogin = {onLogin} />
                <p>Already have an account?</p>
                <button onClick = { () => setShowLogin(true)}> Login Page</button>
                </>    
                 )}
        </div>
        )
}

export default Login;