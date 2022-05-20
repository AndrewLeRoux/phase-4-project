import { useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "./Error";

function UpdatePost({post, tags, user, onUpdatePost}) {

  let history = useHistory();
  const [errors, setErrors] = useState([]);


  const [name, setName] = useState(post.name)
  const [image_url, setImageUrl] = useState(post.image_url)
  const [description, setDescription] = useState(post.description)
  const [tag_id, setTagId] = useState(post.tag_id)
  

  let tagList = tags.map((tag) =>{
    return <option key = {tag.id} value = {tag_id}>{tag.name}</option>
  })

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/posts/${post.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          image_url: image_url,
          description: description,
          user_id: user.id,
          tag_id: tag_id
        }),
        })
        .then((r) => {
          if(r.ok) {
            r.json().then(
              (newPost) => {
                onUpdatePost(newPost)
                history.push("/my_posts")
              })
          }
          else {
            r.json().then((err) => setErrors(err.errors))
          }
        })
  }

  return (
    <>
    <div className="card">
            <img src = {post.image_url} alt="post" width = "200px" height = "200px"></img>
            <p className = "postName">{post.name}</p>
            <p>{post.description}</p>
            <p>Tag: {post.tag.name}</p>
            <p>Creator: {post.user.username}</p>
            <p>Contact information: {post.user.phone_number}</p>
        </div>
    <form className = "form" onSubmit={handleSubmit}>
        <input
            type="text"
            name = "name"
            placeholder="Post Title..."
            onChange={e => setName(e.target.value)}
            value={name}
        />
        <br/>
        <textarea
            type="text"
            name = "image_url"
            placeholder= "image_url..."
            onChange={e => setImageUrl(e.target.value)}
            value={image_url}
        />
        <br/>
        <textarea
            type="text"
            name = "description"
            placeholder= "description..."
            onChange={e => setDescription(e.target.value)}
            value={description}
        />
        <br/>
        <select onChange = {e => setTagId(e.target.selectedIndex)}>
        <option value = "" hidden>Select a Tag...</option>
            {tagList}
        </select>
        <br/>
        <button className="createNewPostButton" type="submit">Update Post</button>
        </form>
        {errors.map(error => {return <Error key = {error}>{error}</Error>})}
        </>
  )
}


export default UpdatePost;