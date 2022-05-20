import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm"
import styled from "styled-components";


function Login({ onLogin }) {

    const [showLogin, setShowLogin] = useState(true);

    
    return (
        <Wrapper>
            <Title>AndysList</Title>
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
        </Wrapper>
        )
}

const Wrapper = styled.section`
  text-align: center;
  font-size: 20px;
`;

const Title = styled.h1`
    font-size: 45px;
`;

export default Login;