import React, { useState } from "react";
import Error from "./Error";
import styled from "styled-components";

function SignUpForm ({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState([]);
    

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            image_url: imageUrl,
            phone_number: phoneNumber
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }



    return (
      <Wrapper>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <Input
            type="text"
            name = "username"
            placeholder= "username..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
        />
        <br/>
        <Input
            type="password"
            name = "password"
            placeholder= "password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <br/>
        <Input
            type="password"
            name = "password confirmation"
            placeholder= "password confirmation..."
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
        />
        <br/>
        <Input
            type="text"
            name = "imageUrl"
            placeholder= "Image url..."
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
        />
        <br/>
        <Input
            type="text"
            name = "phoneNumber"
            placeholder= "phone number..."
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
        />
        <br/>
        <Button type="submit">Create Account</Button>
        </form>
        {errors.map(error => {return <Error key = {error}>{error}</Error>})}
        </Wrapper>
    )
}


const Wrapper = styled.section`
  padding: 4em;
  background: #61fb78;
  margin-left: 30px;
  margin-right: 30px;
  color: black;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-style: solid outset;
  border-color: green;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 40px;
`;


const Input = styled.input`
	padding: 0.5em;
	color: black;
	background: white;
	border: none;
	border-radius: 3px;
	width: 50%;
	margin-bottom: 0.5em;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: green;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;


export default SignUpForm;