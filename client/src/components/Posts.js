import React, {useState, useEffect} from "react";
import Post from "./Post";
import Tag from "./Tag";

function Posts({posts, user}) {

  const [tags, setTags] = useState([])
  const [currentTag, setCurrentTag] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState([])
  

    
  useEffect(() =>{
   
    fetch("/tags")
    .then((r) => r.json())
    .then((tags) => setTags(tags));

  }, [])


  function handleTagClick(tag){
    
    const filteredPosts = posts.filter(post => (post.tag.id === tag.id))
    const currentTag = tag
    setFilteredPosts(filteredPosts)
    setCurrentTag(currentTag)
  }


  return (
    <div>
    {currentTag? 
    <>
    <button onClick = {() => {setCurrentTag(null)}}>Main Menu</button>
    {filteredPosts.map((post) =>{ return <Post key = {post.id} post={post} user= {user}/>})}
    </>
    : 
    <>
    <h1>AndysList</h1>
    <h2>Plase select a category below to browse posts </h2>
    {tags.map((tag) => {return <Tag key ={tag.id} tag = {tag} onTagClick = {handleTagClick}/>})}
    </>
    }
    </div>
  )
}


export default Posts;