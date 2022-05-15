import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name = "username"
            placeholder= "username..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
        />
        <br/>
        <input
            type="text"
            name = "password"
            placeholder= "pasword..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <br/>
        <input
            type="text"
            name = "password confirmation"
            placeholder= "pasword confirmation..."
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
        />
        <br/>
        <input
            type="text"
            name = "imageUrl"
            placeholder= "Image url..."
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
        />
        <br/>
        <input
            type="text"
            name = "phoneNumber"
            placeholder= "phone number..."
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
        />
        <br/>
        <button type="submit">Create Account</button>
        </form>
    )
}

export default SignUpForm;