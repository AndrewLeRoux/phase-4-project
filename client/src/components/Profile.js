import React from "react"
import styled from "styled-components";

function Profile({user}) {
    

      return (
        <Wrapper>
          <h1 id = "myProfile">My Profile</h1>
          <img src={user.image_url} alt="profile"></img>
          <p><strong>Username: </strong>{user.username}</p>
          <p><strong>Phone Number: </strong>{user.phone_number }</p>
        </Wrapper>
          )
}

const Wrapper = styled.section`
  padding: 4em;
  background: #61fb78;
  margin-left: 15%;
  margin-right: 15%;
  color: black;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  border-style: solid outset;
  border-color: green;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 40px;
`;

export default Profile;