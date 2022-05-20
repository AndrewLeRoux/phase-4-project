import React from "react"

function Profile({user}) {
    

      return (
        <div className = "profile">
            <div className = "profileCard">
                <h1 id = "myProfile">My Profile</h1>
                <img src={user.image_url} alt="profile"></img>
                <p>Username: {user.username}</p>
                <p>Phone Number: {user.phone_number }</p>
                </div>
        </div>
          )
}


export default Profile;