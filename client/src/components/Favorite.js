import React from "react";
import styled from "styled-components";

function Favorite({favorite, tags, onFavoriteDelete}) {


    function removeFromFavorites() {
        
        fetch(`/favorites/${favorite.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedFavorite) => onFavoriteDelete(deletedFavorite));
        
    }

    
    
    return (
        <Wrapper>
            <img src = {favorite.post.image_url} alt="post" width = "200px" height = "200px"></img>
                <p className = "postName">{favorite.post.name}</p>
                <p>{favorite.post.description}</p>
                <p><strong>Tag: </strong>{favorite.post.tag.name}</p>
                <p><strong>Creator: </strong>{favorite.post.user.username}</p>
                <p><strong>Contact information: </strong>{favorite.post.user.phone_number}</p>
                <Button onClick = {removeFromFavorites}>remove from favorite</Button>
        </Wrapper>
        
    )
}


const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: green;
  padding: 8px 16px;
  margin: 2px;
  border-radius: 20px;
`;


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



export default Favorite;